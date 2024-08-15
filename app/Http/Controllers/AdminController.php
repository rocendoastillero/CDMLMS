<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function dashboard(): Response
    {

        return Inertia::render('Admin/Dashboard', []);
    }

    /**
     * Instructors
     */

    public function instructors(): Response
    {

        return Inertia::render('Admin/Instructors/Instructors', [

            'paginated' => User::where('type', 'user')
                ->orderBy('verified', 'ASC')
                ->get()
                ->makeHidden(['email', 'email_verified_at', 'created_at', 'updated_at', 'phone'])
                ->paginate(8),
            'searched' => '',


        ]);
    }

    public function viewInstructor(User $instructor): Response
    {
        return Inertia::render('Admin/Instructors/ViewInstructor', [
            'instructor' => $instructor,
            'reports' => $instructor->accomplishmentreports->paginate(8),
            'subjects' => $instructor->subjects->select(['id','code'])->paginate(8),
            'files' => $instructor->files->makeVisible('type')->sortBy('type')->paginate(8)
        ]);
    }

    public function searchInstructor($search): Response
    {

        return Inertia::render('Admin/Instructors/Instructors', [

            'paginated' => User::where('type', 'user')
                ->orWhere('firstname', 'LIKE', "%{$search}%")
                ->orWhere('lastname', 'LIKE', "%{$search}%")
                ->orderBy('verified')
                ->get()
                ->makeHidden(['email', 'email_verified_at', 'created_at', 'updated_at', 'phone'])
                ->paginate(8),
            'searched' => $search,

        ]);
    }

    public function verify(Request $request): RedirectResponse
    {


        $user = User::where('id', $request->id)->first();

        $user->verified = $request->verify;

        $user->save();

        return redirect(route('admin.instructors'));
    }




    /**
     * Subjects
     */

    public function subjects(): Response
    {

        return Inertia::render('Admin/Subjects', [
            'paginated' => Subject::orderby('year')->get()->sortBy('instructor')->paginate(8)
        ]);
        // return Subject::orderby('year')->orderBy('sem')->paginate(8);
    }

    public function searchSubject($search): Response
    {

        return Inertia::render('Admin/Subjects', [
            'paginated' => Subject::where('code', 'LIKE', "%{$search}%")
                ->orWhere('description', 'LIKE', "%{$search}%")
                ->orWhere('year', 'LIKE', "%{$search}%")
                ->orWhere('sem', 'LIKE', "%{$search}%")
                ->orderBy('sem')
                ->paginate(8),
            'searched' => $search,
        ]);
    }
}

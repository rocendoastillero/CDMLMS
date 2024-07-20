<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function dashboard(): Response
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function instructors(): Response
    {
        //TODO change prop to paginated
        return Inertia::render('Admin/Instructors', [
            'instructors' => User::where('type', 'user')
                ->latest()
                ->orderBy('verified')
                ->get()
                ->makeHidden(['email', 'email_verified_at', 'created_at', 'updated_at', 'phone'])
        ]);
    }

    public function searchInstructor($search)
    {
        return Inertia::render('Admin/Instructors', [
            'instructors' => User::where('type', 'user')
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

    public function subjects(): Response
    {
        return Inertia::render('Admin/Subjects', [
            'paginated' => Subject::orderby('year')->orderBy('sem')->paginate(8)
        ]);
        // return Subject::orderby('year')->orderBy('sem')->paginate(8);
    }

    public function searchSubject($search)
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

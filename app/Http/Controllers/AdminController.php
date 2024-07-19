<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function dashboard() : Response
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function instructors()  : Response 
    {
            
        return Inertia::render('Admin/Instructors',[
            'instructors' => User::where('type', 'user')
            ->latest()
            ->orderBy('verified')
            ->get()
            ->makeHidden(['address','email','email_verified_at','created_at','updated_at','phone'])
        ]);
    }

    public function verify(Request $request) : RedirectResponse
    {
        $user = User::where('id', $request->id)->first();

        $user->verified = $request->verify;

        $user->save();

        return redirect(route('admin.instructors'));
    }
}

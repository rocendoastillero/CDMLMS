<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() : Response
    {
        // return Subject::where('user_id', Auth::user()->id)
        // ->pluck('subject','id');
        return Inertia::render('Faculty/Subjects', [
            'paginated' => Subject::where('course', Auth::user()->course)->paginate(8)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) : RedirectResponse
    {
        $validated = $request->validate([
            'subject' => 'required|unique:subjects|string|max:255',
            'description' => 'required|string|max:255'
        ]);

        $request->user()->subjects()->create($validated);

        return redirect(route('subjects.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Subject $subject)
    {
        // return Inertia::render('Faculty/Subjects', [
        //     'paginated' => Subject::where('code', 'LIKE', "%{$subject}%") ->get()
        // ]);
        return $subject;
    }

    public function search($search) : Response
    {
        return Inertia::render('Faculty/Subjects', [
            'paginated' => Subject::where('code', 'LIKE', "%{$search}%")->paginate(8)
        ]);
        // return Subject::where('code', 'LIKE', "%{$search}%")->paginate(8);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subject $subject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subject $subject) : RedirectResponse
    {
        Gate::authorize('update', $subject);
        $validated = $request->validate([
            'subject' => 'required|string|max:255',
            'description' => 'required|string|max:255'
        ]);

        $subject->update($validated);

        return redirect(route('subjects.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subject $subject) : RedirectResponse
    {
        Gate::authorize('delete', $subject);

        $subject->delete();

        return redirect(route('subjects.index'));
    }
}

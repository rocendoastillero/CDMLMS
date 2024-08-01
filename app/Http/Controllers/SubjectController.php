<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() : Response
    {
        
        $mySubjects = Auth::user()->subjects;
        $otherSubjects = Subject::where('user_id','!=', Auth::user()->id)->orWhereNull('user_id')->get();
        
        $all = $mySubjects->concat($otherSubjects);
        return Inertia::render('Faculty/Subjects', [
            'paginated' => $all->paginate(8)
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
    public function store(Request $request): RedirectResponse
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
        return $subject;
    }

    public function search($search): Response
    {
        return Inertia::render('Faculty/Subjects', [
            
            'paginated' => Subject::where('code', 'LIKE', "%{$search}%")
            ->orWhere('description', 'LIKE', "%{$search}%")
            ->orWhere('year', 'LIKE', "%{$search}%")
            ->orWhere('sem', 'LIKE', "%{$search}%")
            ->paginate(8),
            'searched' => $search,
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
    public function update(Request $request, Subject $subject): RedirectResponse
    {
        Gate::authorize('update', $subject);

        $validated = $request->validate([
            'subject' => 'required|string|max:255',
            'description' => 'required|string|max:255'
        ]);

        $subject->update($validated);

        return redirect(route('subjects.index'));
    }

    public function assign(Request $request) : RedirectResponse
    {
        $subject = Subject::where('id', $request->id)->first();

        if ($request->assign) {
            $subject->user_id = $request->user()->id;
        } else {
            $subject->user_id = null;
        }

        $subject->save();

        return redirect(route('subjects.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subject $subject): RedirectResponse
    {
        Gate::authorize('delete', $subject);

        $subject->delete();

        return redirect(route('subjects.index'));
    }
}

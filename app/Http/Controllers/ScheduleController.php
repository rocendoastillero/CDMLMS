<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use App\Models\Subject;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        return Inertia::render('Faculty/Schedules', [
            
            'subjects' => Subject::where('user_id', Auth::user()->id)->latest()->get(),
            'schedules' => Schedule::where('user_id', Auth::user()->id)->latest()->get()
        ]
    );
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
        Gate::authorize('create');

        $validated = $request->validate([
            'schedule' => 'required',
            'room' => 'string|max:255',
            'type' => 'string|max:255'
        ]);

        $request->user()->schedules()->create($validated);

        return redirect(route('schedules.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Schedule $schedule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Schedule $schedule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Schedule $schedule): RedirectResponse
    {
        Gate::authorize('update', $schedule);

        $validated = $request->validate([
            'schedule' => 'required',
            'room' => 'string|max:255',
            'type' => 'string|max:255'
        ]);

        $schedule->update($validated);

        return redirect(route('schedules.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Schedule $schedule)
    {
        Gate::authorize('delete', $schedule);

        $schedule->delete();

        return redirect(route('schedules.index'));
    }
}

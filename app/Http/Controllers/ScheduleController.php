<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use App\Models\Subject;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Throwable;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Schedules/Schedules',[
            'schedules' => []
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function mySchedule()
    {
        try {
            return Inertia::render('Faculty/Schedules', [
                'subjects' => Auth::user()->subjects,
                'schedules' => Auth::user()->subjects->first()->schedules,
                'activesubject' => Auth::user()->subjects->first()->code
            ]);
        } catch (Throwable $e) {
            return redirect(route('subjects.index'));
        }
    }

    public function scheduleOf(Subject $subject)
    {
        return Inertia::render('Admin/Schedules/ViewSched', [
            'schedules' => $subject->schedules->sortBy('start'),
            'pageHeaderSubtitle' => "View schedule of " . $subject->code,
            'subject' => $subject->id
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Subject $subject)
    {
        return Inertia::render('Admin/Schedules/ViewSched', [
            'pageHeaderSubtitle' => "View schedules of " . $subject->code
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $subject = Subject::find($request->subject)->first();

        $validated = $request->validate([
            'start' => 'required',
            'end' => 'required|after:start',
            'day' => 'required|string',
            'room' => 'required|string|max:255',
            'yrsec' => 'required|string|max:255',
            'type' => 'string|max:255'
        ]);

        $subject->schedules()->create($validated);

        return redirect(route('schedules.view', $request->subject));
    }

    /**
     * Display the specified resource.
     */
    public function show(Subject $schedule)
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
            'start' => 'required',
            'end' => 'required|after:start',
            'day' => 'required|integer',
            'room' => 'required|string|max:255',
            'course' => 'required|string|max:255',
            'yrsec' => 'required|string|max:255',
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

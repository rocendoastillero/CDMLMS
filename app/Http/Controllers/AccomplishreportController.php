<?php

namespace App\Http\Controllers;

use App\Models\Accomplishreport;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AccomplishreportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        return Inertia::render('Faculty/AccomplishmentReports', [
            'paginated' => Auth::user()->accomplishmentreports
            ->paginate(8)
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

        $start = Carbon::parse($request->date . " " . $request->start);
        $end = Carbon::parse($request->date . " " . $request->end);

        $request->request->remove('date');
        $request->request->remove('id');

        $request->merge([
            'start' => $start,
            'end' => $end,
        ]);

        $validated = $request->validate([
            'start' => 'required',
            'end' => 'required|after:start',
            'venue' => 'required|string|max:255',
            'activity' => 'required|string|max:255',
            'designation' => 'required|string|max:255',
            'report' => 'required|string|max:255',
        ]);

        $request->user()->accomplishmentreports()->create($validated);

        return redirect(route('accomplishmentreports.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Accomplishreport $accomplishreport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Accomplishreport $accomplishreport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Accomplishreport $accomplishreport) : RedirectResponse
    {
        Gate::authorize('update', $accomplishreport);

        $validated = $request->validate([
            'start' => 'required|date_format:g:i A',
            'end' => 'required|date_format:g:i A|after:start',
            'venue' => 'required|string|max:255',
            'activity' => 'required|string|max:255',
            'designation' => 'required|string|max:255',
            'report' => 'required|string|max:255',
        ]);

        $accomplishreport->update($validated);

        return redirect(route('accomplishmentreports.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Accomplishreport $accomplishreport) : RedirectResponse
    {
        Gate::authorize('delete', $accomplishreport);

        $accomplishreport->delete();

        return redirect(route('accomplishmentreports.index'));
    }
}

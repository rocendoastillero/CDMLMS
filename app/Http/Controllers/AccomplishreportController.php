<?php

namespace App\Http\Controllers;

use App\Models\Accomplishreport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class AccomplishreportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('CDMLMS/AccomplishmentReports', [
            'reports' => AccomplishReport::where('user_id', Auth::user()->id)->latest()->get()
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
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|unique:subjects|string|max:255',
            'subtitle' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $request->user()->accomplishreports()->create($validated);

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
    public function update(Request $request, Accomplishreport $accomplishreport)
    {
        Gate::authorize('update', $accomplishreport);
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'body' => 'required|string',
        ]);
        $accomplishreport->update($validated);

        return redirect(route('accomplishmentreports.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Accomplishreport $accomplishreport)
    {
        Gate::authorize('delete', $accomplishreport);

        $accomplishreport->delete();

        return redirect(route('accomplishmentreports.index'));
    }
}

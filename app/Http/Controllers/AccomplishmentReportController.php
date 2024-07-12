<?php

namespace App\Http\Controllers;

use App\Models\AccomplishmentReport;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class AccomplishmentReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {

        return Inertia::render('CDMLMS/AccomplishmentReports', [
            'reports' => AccomplishmentReport::where('user_id', Auth::user()->id)->latest()->get()
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
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $request->user()->accomplishmentreports()->create($validated);

        return redirect(route('accomplishmentreports.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(AccomplishmentReport $accomplishmentReport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AccomplishmentReport $accomplishmentReport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AccomplishmentReport $accomplishmentReport)
    // : RedirectResponse
    {
        // Gate::authorize('update', $accomplishmentReport);
        // $validated = $request->validate([
        //     'title' => 'required|string|max:255',
        //     'subtitle' => 'required|string|max:255',
        //     'body' => 'required|string',
        // ]);
        // $accomplishmentReport->update($validated);

        return $accomplishmentReport;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AccomplishmentReport $accomplishmentReport)
    {
        Gate::authorize('delete', $accomplishmentReport);

        $accomplishmentReport->delete();

        return redirect(route('accomplishmentreports.index'));
    }
}

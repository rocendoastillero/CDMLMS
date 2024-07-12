<?php

namespace App\Http\Controllers;

use App\Models\Dummy;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DummyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('CDMLMS/AccomplishmentReports', [
            'reports' => Dummy::where('user_id', Auth::user()->id)->latest()->get()
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
            'title' => 'bail|required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $request->user()->dummies()->create($validated);

        return redirect(route('dummy.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Dummy $dummy)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Dummy $dummy)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Dummy $dummy): RedirectResponse
    {
        Gate::authorize('update', $dummy);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'body' => 'required|string',
        ]);
        
        $dummy->update($validated);

        return redirect(route('dummy.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dummy $dummy)
    {
        Gate::authorize('delete', $dummy);

        $dummy->delete();

        return redirect(route('dummy.index'));
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Anouncement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class AnouncementController extends Controller
{
    public function view() 
    {
        return Inertia::render('Faculty/Anouncements',[
            'paginated' => Anouncement::latest()->get()->paginate(8)
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index() : Response
    {
        return Inertia::render('Admin/Anouncements',[
            'paginated' => Anouncement::latest()->get()->paginate(8)
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
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'cardtype' => 'required|string|max:255',
            'icon' => '',
            'color' => '',
        ]);

        $anouncement = new Anouncement($validated);
        $anouncement->save();

        return redirect(route('anouncements.index'));
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Anouncement $anouncement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Anouncement $anouncement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Anouncement $anouncement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Anouncement $anouncement)
    {
        //
    }
}

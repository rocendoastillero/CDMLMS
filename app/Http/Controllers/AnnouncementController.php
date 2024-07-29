<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class AnnouncementController extends Controller
{
    public function view() : Response
    {
        return Inertia::render('Faculty/Announcements',[
            'paginated' => Announcement::latest()->get()->paginate(8)
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index() : Response
    {
        return Inertia::render('Admin/Announcements',[
            'paginated' => Announcement::latest()->get()->paginate(8)
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
            'content' => 'required|string',
            'cardtype' => 'required|string|max:255',
            'icon' => '',
            'color' => '',
        ]);

        $announcement = new Announcement($validated);
        $announcement->save();

        return redirect(route('announcements.index'));
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Announcement $announcement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Announcement $announcement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Announcement $announcement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Announcement $announcement) : RedirectResponse
    {
        $announcement->delete();

        return redirect(route('announcements.index'));
    }
}

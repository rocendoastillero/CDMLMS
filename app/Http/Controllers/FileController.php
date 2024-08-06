<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class FileController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function classRecord() : Response
    {
        return Inertia::render('Faculty/ClassRecord', [
            'paginated' => File::where('user_id', Auth::user()->id)
                ->where('type', 'classrecord')
                ->latest()
                ->get()
                ->makeHidden('instructor')
                ->paginate(8)
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function gradeSheet() : Response
    {
        return Inertia::render('Faculty/GradeSheet', [
            'paginated' => File::where('user_id', Auth::user()->id)
                ->where('type', 'gradesheet')
                ->latest()
                ->get()
                ->makeHidden('instructor')
                ->paginate(8)
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function syllabus() : Response
    {
        return Inertia::render('Faculty/Syllabus', [
            'paginated' => File::where('user_id', Auth::user()->id)
                ->where('type', 'syllabus')
                ->latest()
                ->get()
                ->makeHidden('instructor')
                ->paginate(8)
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $path = $request->file('file')->store($request->type . 's');

        $request->request->add([
            'name' => $request->file('file')->getClientOriginalName(),
            'path' => $path,
            'size' => strval($request->file('file')->getSize()),
        ]);

        $validated = $request->validate([
            'name' => 'required|string',
            'type' => 'required|string',
            'path' => 'required|string',
            'size' => 'required|string',
        ]);

        $request->user()->files()->create($validated);

        return redirect(route($request->type));
    }

    /**
     * Donwload the specified resource.
     */
    public function download(File $file)
    {
        return Storage::download($file->path,$file->name);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(File $file)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, File $file)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(File $file) : RedirectResponse
    {
        return redirect(route($file->type));
    }
}

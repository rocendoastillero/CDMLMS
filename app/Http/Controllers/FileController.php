<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class FileController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function classRecord(): Response
    {
        return Inertia::render('Faculty/ClassRecord', [
            'paginated' => Auth::user()->files
                ->where('type', 'classrecord')
                ->makeHidden('instructor')
                ->paginate(8)
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function gradeSheet(): Response
    {
        return Inertia::render('Faculty/GradeSheet', [
            'paginated' => Auth::user()->files
                ->where('type', 'gradesheet')
                ->makeHidden('instructor')
                ->paginate(8)
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function syllabus(): Response
    {
        return Inertia::render('Faculty/Syllabus', [
            'paginated' => Auth::user()->files
                ->where('type', 'syllabus')
                ->makeHidden('instructor')
                ->paginate(8)
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/RepositoryOfFiles', [
            'paginated' => ''
        ]);
    }

    public function allClassRecord()
    {
        $type = 'classrecord';
        return Inertia::render('Admin/RepositoryOfFiles', [
            'paginated' => File::where('type', $type)
                ->latest()
                ->paginate(8),
            'type' => $type
        ]);
    }

    public function allGradeSheet()
    {
        $type = 'gradesheet';
        return Inertia::render('Admin/RepositoryOfFiles', [
            'paginated' => File::where('type', $type)
                ->latest()
                ->paginate(8),
            'type' => $type
        ]);
    }

    public function allSyllabus()
    {
        $type = 'syllabus';
        return Inertia::render('Admin/RepositoryOfFiles', [
            'paginated' => File::where('type', $type)
                ->latest()
                ->paginate(8),
            'type' => $type
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
        try {
            return Storage::download($file->path, $file->name);
        } catch (Throwable $e) {
            redirect(route('admin.repositoryoffiles'));
        }
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
    public function destroy(File $file): RedirectResponse
    {
        return redirect(route($file->type));
    }
}

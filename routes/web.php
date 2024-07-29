<?php

use App\Http\Controllers\AccomplishreportController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\SubjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/login', 301);

Route::middleware('auth')->group(function () {
    Route::get('unverified', function () {
        if (Route::has('Dashboard')) {
            return Inertia::render('Faculty/Dashboard');
        } else {
            return Inertia::render('Unverified');
        }
    })->name('unverified faculty');
});

Route::middleware('faculty')->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Faculty/Dashboard');
    })->name('dashboard');

    Route::get('/subjects/{search}', [SubjectController::class, 'search'])->name('subjects.search');
    Route::patch('subjects/assign', [SubjectController::class, 'assign'])->name('subjects.assign');
    Route::resource('subjects', SubjectController::class)
        ->only(['index', 'store', 'update', 'destroy']);

    Route::resource('accomplishmentreports', AccomplishreportController::class)
        ->only(['index', 'store', 'update', 'destroy']);

    Route::get('/announcements', [AnnouncementController::class, 'view'])->name('announcements');

    Route::resource('schedules', ScheduleController::class)
        ->only(['index', 'store', 'update', 'destroy']);

    Route::get('/attendance', function () {
        return Inertia::render('Faculty/Attendance',[]);
    })->name('attendance');

    Route::get('/syllabus', function () {
        return Inertia::render('Faculty/Syllabus',[]);
    })->name('syllabus');

    Route::get('/classrecord', function () {
        return Inertia::render('Faculty/ClassRecord',[]);
    })->name('classrecord');

    Route::get('/gradesheets', function () {
        return Inertia::render('Faculty/GradeSheets',[]);
    })->name('gradesheets');

    Route::get('/repositoryoffiles', function () {
        return Inertia::render('Faculty/RepositoryOfFiles',[]);
    })->name('repositoryoffiles');

    Route::get('/onlineexam', function () {
        return Inertia::render('Faculty/OnlineExam',[]);
    })->name('onlineexam');

    Route::get('/onlineclass', function () {
        return Inertia::render('Faculty/OnlineClass',[]);
    })->name('onlineclass');


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware('admin')->group(function () {

        Route::get('/admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');

        Route::get('/admin/instructors', [AdminController::class, 'instructors'])->name('admin.instructors');
        Route::get('/admin/instructors/{search}', [AdminController::class, 'searchInstructor'])->name('admin.instructors.search');
        Route::patch('/admin/instructors', [AdminController::class, 'verify'])->name('admin.verify');

        Route::get('/admin/subjects', [AdminController::class, 'subjects'])->name('admin.subjects');
        Route::get('/admin/subjects/{search}', [AdminController::class, 'searchSubject'])->name('admin.subjects.search');

        Route::resource('/admin/announcements', AnnouncementController::class)
        ->only(['index', 'store', 'update', 'destroy']);
    });
});




require __DIR__ . '/auth.php';

<?php

use App\Http\Controllers\AccomplishreportController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\SubjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/login', 301);

Route::middleware('auth')->group(function () {

    Route::get('unverified', function () {
        return Inertia::render('Unverified');
    })->name('unverified faculty');

    Route::middleware('faculty')->group(function () {

        Route::get('/dashboard', function () {
            return Inertia::render('Faculty/Dashboard');
        })->name('dashboard');

        Route::get('subjects/{search}', [SubjectController::class, 'search'])->name('subjects.search');
        Route::resource('subjects', SubjectController::class)
            ->only(['index', 'store', 'update', 'destroy']);

        Route::resource('accomplishmentreports', AccomplishreportController::class)
            ->only(['index', 'store', 'update', 'destroy']);

        Route::get('anouncements', function () {
            return Inertia::render('Faculty/Anouncements');
        });

        Route::resource('schedules', ScheduleController::class)
            ->only(['index', 'store', 'update', 'destroy']);

        Route::get('/attendance', function () {
            return Inertia::render('Faculty/Attendance');
        });
        Route::get('/syllabus', function () {
            return Inertia::render('Faculty/Syllabus');
        })->name('syllabus');
        Route::get('/classrecord', function () {
            return Inertia::render('Faculty/ClassRecord');
        })->name('classrecord');
        Route::get('/gradesheets', function () {
            return Inertia::render('Faculty/GradeSheets');
        })->name('gradesheets');

        Route::get('/repository of files', function () {
            return Inertia::render('Faculty/RepositoryOfFiles');
        });
        Route::get('/online exam', function () {
            return Inertia::render('Faculty/OnlineExam');
        });
        Route::get('/online class', function () {
            return Inertia::render('Faculty/OnlineClass');
        });


        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    Route::middleware('admin')->group(function () {
        
        Route::get('/admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');

        Route::get('/admin/instructors', [AdminController::class, 'instructors'])->name('admin.instructors');
        Route::patch('/admin/instructors', [AdminController::class, 'verify'])->name('admin.verify');

        Route::get('/admin/subjects', [AdminController::class, 'subjects'])->name('admin.subjects');
    });
});




require __DIR__ . '/auth.php';

<?php

use App\Http\Controllers\AccomplishmentReportController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/t', function () {
    return Inertia::render('Tests');
});


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('subjects', SubjectController::class)
    ->only(['index', 'store', 'update', 'show', 'destroy']);
    
    Route::resource('accomplishment reports', AccomplishmentReportController::class)
    ->only(['index', 'store', 'update', 'show', 'destroy']);

});

Route::middleware('auth')->group(function () {
    Route::get('/d', function () {
        return Inertia::render('CDMLMS/Dashboard');
    })->name('d');
    Route::get('anouncements', function () {
        return Inertia::render('CDMLMS/Anouncements');
    });
    Route::get('discussions', function () {
        return Inertia::render('CDMLMS/Discussions');
    });
    Route::get('people', function () {
        return Inertia::render('CDMLMS/People');
    });

   
    Route::get('/schedules', function () {
        return Inertia::render('CDMLMS/Schedules');
    });
    Route::get('/attendance', function () {
        return Inertia::render('CDMLMS/Attendance');
    });
    Route::get('/syllabus', function () {
        return Inertia::render('CDMLMS/Syllabus');
    })->name('syllabus');
    Route::get('/classrecord', function () {
        return Inertia::render('CDMLMS/ClassRecord');
    })->name('classrecord');
    Route::get('/gradesheets', function () {
        return Inertia::render('CDMLMS/GradeSheets');
    })->name('gradesheets');
    
    Route::get('/repository of files', function () {
        return Inertia::render('CDMLMS/RepositoryOfFiles');
    });
    Route::get('/online exam', function () {
        return Inertia::render('CDMLMS/OnlineExam');
    });
    Route::get('/online class', function () {
        return Inertia::render('CDMLMS/OnlineClass');
    });
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

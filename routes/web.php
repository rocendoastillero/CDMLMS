<?php

use App\Http\Controllers\AccomplishreportController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\SubjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {

    Route::get('unverified', function () {
        return Inertia::render('Unverified');
    })->name('unverified faculty');

    Route::get('anouncements', function () {
        return Inertia::render('CDMLMS/Anouncements');
    });
    Route::get('discussions', function () {
        return Inertia::render('CDMLMS/Discussions');
    });
    Route::get('people', function () {
        return Inertia::render('CDMLMS/People');
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
   
    Route::middleware('faculty')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('CDMLMS/Dashboard');
        })->name('dashboard');
    
        Route::resource('subjects', SubjectController::class)
        ->only(['index', 'store', 'update', 'destroy']);
        
        Route::resource('accomplishmentreports', AccomplishreportController::class)
        ->only(['index', 'store', 'update', 'destroy']);
    
        Route::resource('schedules', ScheduleController::class)
        ->only(['index', 'store', 'update', 'destroy']);
    
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    Route::middleware('admin')->group(function (){
        Route::get('/admin',[AdminController::class, 'dashboard'])->name('admin.dashboard');
    });

});




require __DIR__ . '/auth.php';

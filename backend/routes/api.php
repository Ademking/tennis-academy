<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CoachController;
use App\Http\Controllers\CourtController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ReservationController;

Route::prefix('v1')->group(function () {
    // Public routes
    Route::post('/register', [AuthController::class, 'registerPlayer']); // Register a new player
    Route::post('/login', [AuthController::class, 'login']); // Login


    // Protected routes
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::get('/logout', [AuthController::class, 'logout']);
        Route::apiResources([
            'courses' => CourseController::class,
            'courts' => CourtController::class,
            'players' => PlayerController::class,
            'coaches' => CoachController::class,
            'reservations' => ReservationController::class,
        ]);
        Route::get('/my-role', [AuthController::class, 'getRole']); // Get the role of the logged in user
        Route::get('/me', [AuthController::class, 'getConnectedUser']); // Get connected user data
        Route::post('/courses/{course}/purchase', [CourseController::class, 'purchaseCourse']); // Purchase a course
        Route::post('/courses/{course}/review', [CourseController::class, 'reviewCourse']); // Review a course
        Route::get('/me/courses', [CourseController::class, 'getMyCourses']); // Get the courses of the logged in user

    });
});

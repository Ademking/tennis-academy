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
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/my-role', [AuthController::class, 'getRole']);

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
    });
});

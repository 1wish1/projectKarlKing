<?php

use App\Http\Controllers\BedAssignController;
use App\Http\Controllers\bedController;
use App\Http\Controllers\invoiceController;
use App\Http\Controllers\messageController;
use App\Http\Controllers\paymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\requestsController;
use App\Http\Controllers\roomController;
use App\Http\Controllers\UserController;
use App\Models\invoices;
use App\Models\message;
use App\Models\room;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\TenantController;
use App\Http\Controllers\OwnerController;
use App\Http\Controllers\HomeController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::middleware(['auth','verified',])->group(function(){
    Route::get('/dashboard',
    fn() =>  Inertia::render('Dashboard'),
    )->name("dashboard");
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


Route::middleware(['auth','verified',"owner"])->group(function(){
    Route::get('Owner/Dashboard',
                [OwnerController::class,'index'],
        Route::resource('room', roomController::class),
        Route::resource('bed',  bedController::class),
        Route::resource('bed_assignment', BedAssignController::class),
        Route::resource('invoice', invoiceController::class),
        Route::resource('payment', paymentController::class),
        Route::resource('request', requestsController::class),

    )->name("owner");
});
Route::middleware(['auth','verified',"tenant"])->group(function(){
    Route::get('Tenant/Dashboard',  [UserController::class,'index'],
        Route::resource('User', UserController::class),
        Route::resource('Message', messageController::class),
        Route::resource('owners', OwnerController::class),
        Route::resource('tenant',TenantController::class),
        Route::resource('room', roomController::class),
        Route::resource('bed',  bedController::class),
        Route::resource('bed_assignment', BedAssignController::class),
        Route::resource('invoice', invoiceController::class),
        Route::resource('payment', paymentController::class),
        Route::resource('request', requestsController::class),
    )->name("tenant");
});
    Route::middleware(['auth','verified',"is-admin"])->group(function(){
        Route::get('Admin/Dashboard', [HomeController::class,'index'],
            Route::resource('user', UserController::class),
            Route::resource('message', messageController::class),
        )->name("admin");
    });

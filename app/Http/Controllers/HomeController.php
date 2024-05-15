<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        if (Auth::user()->type === "admin"){
            return Inertia::render('Admin/Dashboard');
        }
       if (Auth::user()->type === "owner"){
            return Inertia::render('Owner/Dashboard');
        }

    }
}

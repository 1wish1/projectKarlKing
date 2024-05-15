<?php

use App\Http\Middleware\OwnerType;
use App\Http\Middleware\TenantType;
use App\Http\Middleware\typeAdmin;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);
        $middleware->alias([
            "is-admin" => App\Http\Middleware\typeAdmin::class,
            "tenant" => App\Http\Middleware\TenantType::class,
            "owner" => App\Http\Middleware\OwnerType::class,
        ]);



        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();

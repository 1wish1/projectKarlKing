<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorerequestsRequest;
use App\Http\Requests\UpdaterequestsRequest;
use App\Http\Resources\OwnerResource;
use App\Models\requests;
use Inertia\Inertia;

class requestsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tenant/Request'
    );
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
    public function store(StorerequestsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(requests $requests)
    {
        return inertia("Tenant/Show", [
            'Owner' => new OwnerResource($requests),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(requests $requests)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdaterequestsRequest $request, requests $requests)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(requests $requests)
    {
        //
    }
}

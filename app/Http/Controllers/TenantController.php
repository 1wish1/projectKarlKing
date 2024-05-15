<?php

namespace App\Http\Controllers;

use App\Http\Resources\OwnerResource;
use App\Http\Resources\UsersResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TenantController extends Controller
{
    public function index(){
        $query = User::query();
        if (request("name")){
            $query->where("name","like","%".    request("name") . "%");
        }
        if (request("BH_name")){
            $query->where("BH_name","like","%".    request("BH_name") . "%");
        }
        $user = $query->where("type","=","owner")->simplePaginate(10);

        return Inertia::render('Tenant/Dashboard',[
            'owner' => OwnerResource::collection($user),
            'queryParams' => request()->query() ?: null,
        ]);
    }


}

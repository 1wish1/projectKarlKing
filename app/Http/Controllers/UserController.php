<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\OwnerResource;
use App\Http\Resources\requesResource;
use App\Http\Resources\UsersResource;
use App\Models\requests;
use App\Models\User;
use GuzzleHttp\Psr7\Request;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    use SoftDeletes;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if(Auth::user()->type ==="admin"){
            $query = User::query();
            if (request("name")){
                $query->where("name","like","%".    request("name") . "%");
            }
            if(request("status")){
                $query->where("status",request("status"));
            }
            if(request("type")){
                $query->where("type",request("type"));
            }
            //end search person

            $user = $query->where("deleted_at","=",null)->simplePaginate(10);
            return inertia("Project/Index",[
                'User' => UsersResource::collection($user),
                'queryParams' => request()->query() ?: null,
                'success' => session("success"),

            ]);
        }if(Auth::user()->type ==="tenant"){
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
        //search person

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Admin/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        User::create($data);
        return to_route("user.index")->with("success","User Created");
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user){
        if(Auth::user()->type ==="tenant"){
            return inertia("Tenant/Show", [
                'Owner' =>new UsersResource($user),
            ]);
        }
        if(Auth::user()->type ==="admin"){
            return inertia("Profile/Show", [
                'User' => new UsersResource($user),
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia("Project/Edit",[
            'User' => new UsersResource($user),
    ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {

        $user->update($request->validated());
        return to_route("user.index")->with("success","User Updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {

        $user->bed()->dissociated();
        $user->delete();
    }
}

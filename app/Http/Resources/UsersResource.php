<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UsersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        //only see post
        return [
            "id" => $this->id,
            "name" => $this->name,
            "email" => $this->email,
            "address" => $this->address,
            "type" => $this->type,
            "status" => $this->status,
            "contact_Number" => $this->contact_Number,
            "Facebook" => $this->Facebook,
            "BH_name" => $this->BH_name,
            "created_at" => (new Carbon( $this->created_at))->format("Y-m-D"),
            "updated_at" => (new Carbon( $this->updated_at))->format("Y-m-D"),
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class requesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [


            "name" => $this->name,
            "email" => $this->email,
            "address" => $this->address,
            "contact_Number" => $this->contact_Number,
            "Facebook" => $this->Facebook,
            "BH_name" => $this->BH_name,
        ];
    }
}

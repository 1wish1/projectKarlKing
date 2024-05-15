<?php

namespace App\Models;
use Database\Factories\RoomFactory;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class room extends Model
{
    use HasFactory;
    public function bed(){
        return $this->belongsTo(bed::class);
    }

}

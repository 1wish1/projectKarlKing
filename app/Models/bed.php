<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class bed extends Model
{
    use HasFactory;
    public function room()
    {
        return $this->hasOne(room::class);
    }
    public function bed_assignment()
    {
        return $this->hasOne(bed_assignment::class);
    }
    public function user_id(){
        return $this->belongsTo(User::class,"user_id");
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class invoices extends Model
{
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function bed_assignment(){
        return $this->belongsTo(bed_assignment::class);
    }
    public function room(){
        return $this->belongsTo(room::class);
    }
    public function bed(){
        return $this->belongsTo(bed::class);
    }

}

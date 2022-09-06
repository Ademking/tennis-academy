<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'category',
        'image',
        'price',
        'start_date',
        'end_date',
        'coach_id',
    ];
}

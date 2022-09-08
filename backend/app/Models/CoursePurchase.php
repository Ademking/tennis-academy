<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoursePurchase extends Model
{
    use HasFactory;

    protected $fillable = [
        'card_number',
        'card_holder_name',
        'card_expiration_date',
        'card_cvv',
        'start_date',
        'buyer_id',
        'course_id',
    ];

    public function buyer()
    {
        return $this->belongsTo('App\Models\User', 'buyer_id');
    }

    public function course()
    {
        return $this->belongsTo('App\Models\Course');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anouncement extends Model
{
    use HasFactory;

    /**
     * //TODO prepare for markdown
     * 
     */

    protected $fillable = [
        'title',
        'content',
        'cardtype',
        'icon',
        'color',
    ];


}

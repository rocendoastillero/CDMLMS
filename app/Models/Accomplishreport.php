<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Accomplishreport extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'body'
    ];
    
    protected $hidden = [
        'user',
    ];

    protected $appends = [
        'instructor',
    ];

    /**
     * Get the user that owns the Subject
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getInstructorAttribute() : String {
        return $this->user->lastname . ", " . $this->user->firstname; 
    }
}

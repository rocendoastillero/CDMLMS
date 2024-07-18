<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Subject extends Model
{
    
    use HasFactory;

    protected $fillable = [
        'subject',
        'description'
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
        if ($this->user == null){
            return "Vacant";
        }
        return $this->user->lastname + ", " + $this->user->firstname; 
    }
}

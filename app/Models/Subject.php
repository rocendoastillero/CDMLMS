<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subject extends Model
{

    use HasFactory;

    protected $fillable = [
        'code',
        'course',
        'description',
        'year',
        'sem',
    ];

    protected $hidden = [
        'user',
    ];

    protected $appends = [
        'instructor',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'created_at' => 'datetime:d/m/Y g:i A',
            'updated_at' => 'datetime:d/m/Y g:i A',
        ];
    }

    /**
     * Get all of the schedules for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function schedules(): HasMany
    {
        return $this->hasMany(Schedule::class);
    }

    /**
     * Get the user that owns the Subject
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getInstructorAttribute(): String
    {
        if ($this->user == null) {
            return "Vacant";
        }
        return $this->user->lastname . ", " . $this->user->firstname;
    }
}

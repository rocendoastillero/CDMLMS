<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'path',
        'size',
        'mime',
        'archived',
    ];

    protected $hidden = [
        'path',
        'type',
        'user'
    ];

    protected $appends = [
        'instructor'
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
     * Get the user that owns the File
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getInstructorAttribute(): String
    {
        return $this->user->lastname . ", " . substr($this->user->firstname, 0, 1);
    }
}

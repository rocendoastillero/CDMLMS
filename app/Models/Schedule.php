<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'start',
        'end',
        'day',
        'yrsec',
        'room',
        'type',
    ];

    protected $appends = [
        'code',
        'course',
    ];

    protected $hidden = [
        'subject'
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
            'start' => 'datetime:g:i A',
            'end' => 'datetime:g:i A',
        ];
    }

    /**
     * Get the user that owns the Schedule
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subject(): BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    public function getCodeAttribute() : String 
    {
        return $this->subject->code;
    }
    public function getCourseAttribute() : String
    {
        return $this->subject->course;    
    }
}

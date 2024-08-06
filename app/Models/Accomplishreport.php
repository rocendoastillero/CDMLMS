<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Accomplishreport extends Model
{
    use HasFactory;

    protected $fillable = [
        'start',
        'end',
        'activity',
        'venue',
        'designation',
        'report',
    ];

    protected $hidden = [
        'user',
    ];

    protected $appends = [
        'date',
        'timespent'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'start' => 'datetime:g:i A',
            'end' => 'datetime:g:i A',
            'created_at' => 'datetime:d/m/Y g:i A',
            'updated_at' => 'datetime:d/m/Y g:i A',
        ];
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
        return $this->user->lastname . ", " . $this->user->firstname;
    }

    public function getTimespentAttribute(): String
    {

        $start = Carbon::parse($this->start);
        $end = Carbon::parse($this->end);

        return $start->diff($end)->format('%H:%I');
    }

    public function getDateAttribute(): String
    {

        $weekMap = [
            0 => 'S',
            1 => 'M',
            2 => 'T',
            3 => 'W',
            4 => 'TH',
            5 => 'F',
            6 => 'Sat',
        ];

        $date = Carbon::parse($this->start);

        return $date->format('m/d') . ", " . $weekMap[$date->dayOfWeek()];
    }
}

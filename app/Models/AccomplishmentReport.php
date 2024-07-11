<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AccomplishmentReport extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'body'
    ];

    /**
     * Get the user that owns the AccomplishmentReport
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

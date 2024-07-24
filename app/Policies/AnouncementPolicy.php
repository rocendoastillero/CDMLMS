<?php

namespace App\Policies;

use App\Models\Anouncement;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class AnouncementPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->verified;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Anouncement $anouncement): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->type === 'admin';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Anouncement $anouncement): bool
    {
        return $user->type === 'admin';
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Anouncement $anouncement): bool
    {
        return $user->type === 'admin';
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Anouncement $anouncement): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Anouncement $anouncement): bool
    {
        //
    }
}

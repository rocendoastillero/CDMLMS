<?php

namespace App\Policies;

use App\Models\AccomplishmentReport;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class AccomplishmentReportPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, AccomplishmentReport $accomplishmentReport): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, AccomplishmentReport $accomplishmentReport): Response
    {
        return $accomplishmentReport->user()->is($user)?
        Response::allow(): 
        Response::deny($accomplishmentReport);
    }
    
    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, AccomplishmentReport $accomplishmentReport): bool
    {
        //
        return $this->update($user, $accomplishmentReport);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, AccomplishmentReport $accomplishmentReport): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, AccomplishmentReport $accomplishmentReport): bool
    {
        //
    }
}

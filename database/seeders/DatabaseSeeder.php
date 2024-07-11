<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'username' => 'Ron',
            'firstname' => 'Ron Neil',
            'lastname' => 'Castro',
            'address' => 'Blk3 Lot4 P1LL Sub Urban, San Isidro, Rizal',
            'email' => 'ron@example.com',
        ]);
    }
}

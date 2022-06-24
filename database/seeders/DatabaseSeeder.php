<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'first_name' => 'Admin',
            'second_name' => 'Tester',
            'email' => 'admin@test.com',
            'password' => Hash::make('admin'),
            'role' => 'admin',
        ]);

        DB::table('users')->insert([
            'first_name' => 'Manager',
            'second_name' => 'Tester',
            'email' => 'manager@test.com',
            'password' => Hash::make('manager'),
            'role' => 'manager',
        ]);
    }
}

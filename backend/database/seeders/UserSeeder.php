<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Faker::create();



        // create players and assign roles
        for ($i = 1; $i <= 50; $i++) {
            $player = \App\Models\User::create([
                'firstname' => $this->faker->firstName,
                'lastname' => $this->faker->lastName,
                'email' => 'player' . $i . '@gmail.com',
                'gender' => $this->faker->randomElement(['male', 'female']),
                'password' => bcrypt('123456789'),
                'birthdate' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
                'phone' => $this->faker->phoneNumber,
                'address' => $this->faker->address,
                'city' => $this->faker->city,
                'country' => $this->faker->country,
                'avatar' => 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg',
            ]);
            $player->assignRole('player');
        }

        // create coaches and assign roles
        for ($i = 1; $i <= 50; $i++) {
            $coach = \App\Models\User::create([
                'firstname' => $this->faker->firstName,
                'lastname' => $this->faker->lastName,
                'email' => 'coach' . $i . '@gmail.com',
                'gender' => $this->faker->randomElement(['male', 'female']),
                'password' => bcrypt('123456789'),
                'birthdate' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
                'phone' => $this->faker->phoneNumber,
                'address' => $this->faker->address,
                'city' => $this->faker->city,
                'country' => $this->faker->country,
                'matricule' => $this->faker->randomNumber($nbDigits = 8, $strict = false),
                'avatar' => 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg',
            ]);
            $coach->assignRole('coach');
        }

        // create admin and assign role
        $admin = \App\Models\User::create([
            'firstname' => $this->faker->firstName,
            'lastname' => $this->faker->lastName,
            'email' => 'admin@gmail.com',
            'gender' => $this->faker->randomElement(['male', 'female']),
            'password' => bcrypt('123456789'),
            'birthdate' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
            'phone' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'city' => $this->faker->city,
            'country' => $this->faker->country,
            'avatar' => 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg',
        ]);
        $admin->assignRole('admin');
    }
}

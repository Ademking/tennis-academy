<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Faker\Factory as Faker;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Faker::create();
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'create players']);
        Permission::create(['name' => 'read players']);
        Permission::create(['name' => 'update players']);
        Permission::create(['name' => 'delete players']);

        Permission::create(['name' => 'create courses']);
        Permission::create(['name' => 'read courses']);
        Permission::create(['name' => 'update courses']);
        Permission::create(['name' => 'delete courses']);

        Permission::create(['name' => 'create admins']);
        Permission::create(['name' => 'read admins']);
        Permission::create(['name' => 'update admins']);
        Permission::create(['name' => 'delete admins']);

        Permission::create(['name' => 'create coaches']);
        Permission::create(['name' => 'read coaches']);
        Permission::create(['name' => 'update coaches']);
        Permission::create(['name' => 'delete coaches']);

        Permission::create(['name' => 'create courts']);
        Permission::create(['name' => 'read courts']);
        Permission::create(['name' => 'update courts']);
        Permission::create(['name' => 'delete courts']);

        Permission::create(['name' => 'create reservations']);
        Permission::create(['name' => 'read reservations']);
        Permission::create(['name' => 'update reservations']);
        Permission::create(['name' => 'delete reservations']);

        Permission::create(['name' => 'create questions']);
        Permission::create(['name' => 'read questions']);
        Permission::create(['name' => 'update questions']);
        Permission::create(['name' => 'delete questions']);

        Permission::create(['name' => 'create answers']);
        Permission::create(['name' => 'read answers']);
        Permission::create(['name' => 'update answers']);
        Permission::create(['name' => 'delete answers']);


        // create roles and assign created permissions
        $adminRole = Role::create(['name' => 'admin']);
        $adminRole->givePermissionTo([
            'create players',
            'read players',
            'update players',
            'delete players',

            'create courses',
            'read courses',
            'update courses',
            'delete courses',

            'create admins',
            'read admins',
            'update admins',
            'delete admins',

            'create coaches',
            'read coaches',
            'update coaches',
            'delete coaches',

            'create courts',
            'read courts',
            'update courts',
            'delete courts',

            'create reservations',
            'read reservations',
            'update reservations',
            'delete reservations',

            'create questions',
            'read questions',
            'update questions',
            'delete questions',

            'create answers',
            'read answers',
            'update answers',
            'delete answers',
        ]);

        $coachRole = Role::create(['name' => 'coach']);
        $coachRole->givePermissionTo([
            'create courses',
            'read courses',
            'update courses',
            'delete courses',

            'create reservations',
            'read reservations',
            'update reservations',
            'delete reservations',

            'create answers',
            'read answers',
            'update answers',
            'delete answers',
        ]);

        $playerRole = Role::create(['name' => 'player']);
        $playerRole->givePermissionTo([
            'read courses',
            'read courts',

            'create reservations',
            'read reservations',
            'update reservations',
            'delete reservations',

            'create questions',
            'read questions',
            'update questions',
            'delete questions',

            'create answers',
            'read answers',
            'update answers',
            'delete answers',
        ]);

        // create players and assign roles
        for ($i = 1; $i <= 10; $i++) {
            $player = \App\Models\User::create([
                'firstname' => $this->faker->firstName,
                'lastname' => $this->faker->lastName,
                'email' => 'player' . $i . '@gmail.com',
                'password' => bcrypt('123456789'),
                'birthdate' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
                'phone' => $this->faker->phoneNumber,
                'address' => $this->faker->address,
                'city' => $this->faker->city,
                'country' => $this->faker->country,
            ]);
            $player->assignRole($playerRole);
        }

        // create coaches and assign roles
        for ($i = 1; $i <= 10; $i++) {
            $coach = \App\Models\User::create([
                'firstname' => $this->faker->firstName,
                'lastname' => $this->faker->lastName,
                'email' => 'coach' . $i . '@gmail.com',
                'password' => bcrypt('123456789'),
                'birthdate' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
                'phone' => $this->faker->phoneNumber,
                'address' => $this->faker->address,
                'city' => $this->faker->city,
                'country' => $this->faker->country,
                'matricule' => $this->faker->randomNumber($nbDigits = 8, $strict = false),
            ]);
            $coach->assignRole($coachRole);
        }

        // create admin and assign role
        $admin = \App\Models\User::create([
            'firstname' => $this->faker->firstName,
            'lastname' => $this->faker->lastName,
            'email' => 'admin@gmail.com',
            'password' => bcrypt('123456789'),
            'birthdate' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
            'phone' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'city' => $this->faker->city,
            'country' => $this->faker->country,
        ]);
        $admin->assignRole($adminRole);
    }
}

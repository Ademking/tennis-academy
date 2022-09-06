<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Faker\Factory as Faker;

class CourseSeeder extends Seeder
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

        // get list of coaches
        $coaches = \App\Models\User::role('coach')->get();
        // create courses
        for ($i = 0; $i < 10; $i++) {
            $course = \App\Models\Course::create([
                'name' => 'Tennis Course ' . $i,
                'description' => $this->faker->paragraph(10),
                'category' => $this->faker->text,
                'image' => $this->faker->text,
                'price' => $this->faker->numberBetween($min = 1000, $max = 9000),
                'start_date' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
                'end_date' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
                'coach_id' => $coaches->random()->id,
            ]);
        }
    }
}

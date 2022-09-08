<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Faker\Factory as Faker;


class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Faker::create();

        // get courses ids
        $courses_ids = \App\Models\Course::all()->pluck('id')->toArray();

        // get players ids
        $players_ids = \App\Models\User::role('player')->get()->pluck('id')->toArray();

        // create reviews
        for ($i = 1; $i <= 50; $i++) {
            $review = \App\Models\Review::create([
                'review' => $this->faker->text($maxNbChars = 200),
                'rating' => $this->faker->numberBetween($min = 1, $max = 5),
                'course_id' => $this->faker->randomElement($courses_ids),
                'reviewer_id' => $this->faker->randomElement($players_ids),
            ]);
        }
    }
}

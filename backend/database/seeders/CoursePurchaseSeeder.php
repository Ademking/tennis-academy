<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CoursePurchaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Faker::create();

        // get list of players ids
        $players_ids = \App\Models\User::role('player')->pluck('id')->toArray();

        // get list of courses ids
        $courses_ids = \App\Models\Course::pluck('id')->toArray();

        // create course purchases
        for ($i = 0; $i < 20; $i++) {
            $course_purchase = \App\Models\CoursePurchase::create([
                'card_number' => $this->faker->creditCardNumber,
                'card_holder_name' => $this->faker->name,
                'card_expiration_date' => $this->faker->creditCardExpirationDate,
                'card_cvv' => $this->faker->creditCardExpirationDateString,
                'start_date' => $this->faker->date,
                'buyer_id' => $this->faker->randomElement($players_ids),
                'course_id' => $this->faker->randomElement($courses_ids),
            ]);
        }
    }
}

<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\bed>
 */
class bedFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //bed_number daily_rent monthly_rent bed_status users_id
            'bed_number' => fake()->numberBetween(0,10000),
            'daily_rent' => fake()->numberBetween(2000,10000),
            'monthly_rent'=> fake()->numberBetween(2000,10000),
            'bed_status' => fake()->randomElement(["occupied","available"]),
            'user_id' => User::factory(),
        ];
    }
}

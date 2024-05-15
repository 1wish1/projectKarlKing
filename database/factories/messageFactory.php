<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\message>
 */
class messageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'from' => fake()->email(),
            'title' => fake()->sentence(),
            'date' => fake()->date(),
            'message' => fake()->paragraph(),
            'date' => fake()->date(),
            'to' => fake()->email()
        ];
    }
}

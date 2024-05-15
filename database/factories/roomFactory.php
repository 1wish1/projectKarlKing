<?php

namespace Database\Factories;

use App\Models\bed;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\room>
 */
class roomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'bed_id' => bed::factory(),
            'room_number' => fake()->unique()->numberBetween(0, 50),
            'description' => fake()->paragraph(3),
            'image' => fake()->imageUrl(),
            'rules' => fake()->paragraph(3)
        ];
    }
}

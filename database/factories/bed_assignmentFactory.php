<?php

namespace Database\Factories;

use App\Models\bed;
use App\Models\room;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\bed_assignment>
 */
class bed_assignmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //room_id bed_id date_started due_date
            'room_id' => room::factory(),
            'bed_id' => bed::factory(),
            'date_started' => fake()->dateTimeBetween("-5years","now"),
            'due_date' => fake()->dateTimeBetween("now", "+1 year"),
        ];
    }
}

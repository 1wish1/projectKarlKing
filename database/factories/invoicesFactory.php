<?php

namespace Database\Factories;

use App\Models\bed_assignment;
use App\Models\room;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\invoices>
 */
class invoicesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            ////water_Bill_rate electric_Bill_rate total_due due_date status remarks
            "room_id" => room::factory(),
            "user_id" => User::factory(),
            "bed_assignment_id" => bed_assignment::factory(),
            "water_Bill_rate" => fake()->numberBetween(1000, 2000),
            "electric_Bill_rate" => fake()->numberBetween(1000, 2000),
            "total_due" => fake()->numberBetween(1000, 2000),
            "due_date" => fake()->dateTimeBetween("now", "+5 years"),
            "remarks"=> fake()->randomElement(["paid", "unpaid"]),
            "status" => fake()->randomElement(["pending", "accept"]),

        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\payment>
 */
class paymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //users_id date payment_amount proof_payment remarks status
            "user_id" => User::factory(),
            "payment_amount" => fake()->numberBetween(1000, 2000),
            "proof_payment" => fake()->imageUrl(),
            "date" => fake()->dateTimeBetween("now","now"),
            "remarks"=> fake()->randomElement(["paid", "unpaid"]),
            "status" => fake()->randomElement(["pending", "accept"]),
        ];
    }
}

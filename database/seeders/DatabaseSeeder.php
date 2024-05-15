<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\bed;
use App\Models\bed_assignment;
use App\Models\invoices;
use App\Models\message;
use App\Models\payment;
use App\Models\requests;
use App\Models\room;
use GuzzleHttp\Promise\Create;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory(10)
        ->hasMessage(5)
        ->hasInvoices()
        ->hasPayment()
        ->hasRequests()
        ->hasBed()
        ->create();
        //room::factory()->create();
        //bed_assignment::factory()->create();
        //invoices::factory()->create();
        //message::factory()->create();
        //payment::factory()->create();
        //requests::factory()->create();
        bed::factory()
            ->hasRoom(5)
            ->create();

    }
}

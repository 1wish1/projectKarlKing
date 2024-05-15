<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId("room_id")->constrained('rooms');
            $table->foreignId("user_id")->constrained("users");
            $table->foreignId("bed_assignment_id")->constrained("bed_assignments");
            $table->integer("water_Bill_rate")->nullable();
            $table->integer("electric_Bill_rate")->nullable();
            $table->integer('total_due')->nullable();
            $table->date('due_date')->nullable();
            $table->string('status')->nullable();
            $table->string('remarks')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};

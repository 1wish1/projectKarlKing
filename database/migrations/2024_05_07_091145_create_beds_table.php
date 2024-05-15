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
        Schema::create('beds', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("bed_number")->unique()->unsigned();
            $table->integer("daily_rent")->unsigned()->default(10);
            $table->integer("monthly_rent")->unsigned()->default(10);
            $table->string("bed_status",10)->default("Available");
            $table->foreignId('user_id')->constrained("users");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beds');
    }
};

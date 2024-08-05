<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('weather_log', function (Blueprint $table) 
        {
                $table->id();
                $table->string('weather_condition');
                $table->float('temperature', 8, 4);
                $table->float('feels_like', 8, 4);
                $table->integer('humidity');
                $table->float('wind_speed', 8, 4);
                $table->unsignedBigInteger('location_id');
                $table->index('location_id');                
                $table->foreign('location_id')->references('id')->on('location');
                $table->timestamp('created_at');
                $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('weather_log');
    }
};

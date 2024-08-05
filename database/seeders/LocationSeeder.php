<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\LocationModel;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "country_code" => "UAE",
                "city" => "Abu Dhabi",
                "external_id" => 292968,
                "lon" => 54.3667,
                "lat" => 24.4667
            ],
            [
                "country_code" => "UAE",
                "city" => "Dubai",
                "external_id" => 292223,
                "lon" => 55.3047,
                "lat" => 25.2582        
            ],
            [
                "country_code" => "UAE",
                "city" => "Sharjah city",
                "external_id" => 292672,
                "lon" => 55.4033,
                "lat" => 25.3573
            ],
            [
                "country_code" => "UK",
                "city" => "London",
                "external_id" => 2643743,
                "lon" => -0.1257,
                "lat" => 51.5085
                    ],
            [
                "country_code" => "USA",
                "city" => "New York",
                "external_id" => 5128581,
                "lon" =>  -74.006,
                "lat" =>  40.7143
            ],
            [
                "country_code" => "Japan",
                "city" => "Tokyo",
                "external_id" => 1850147,
                "lon" =>  139.6917,
                "lat" =>  35.6895        
            ],
        ];
        LocationModel::insert($data);
    }
}

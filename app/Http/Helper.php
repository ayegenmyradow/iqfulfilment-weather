<?php

namespace App\Http;

use App\Models\LocationModel;
use Illuminate\Support\Facades\Http;

class Helper {

    public static function runJob()
    {
        $apiKey = env('WEATHER_API_KEY');
        $url = "https://api.openweathermap.org/data/2.5/group";
        $units = 'metric';
        // $currentHour = now()->hour;
        // $currentMinute = now()->minute;
        // $shouldInsert = ($currentHour % 2 === 0) && ($currentMinute < 10);
        
        $locations = LocationModel::all();
        $cityIds = $locations->pluck('external_id')->implode(',');

        $response = Http::get($url, [
            'id' => $cityIds,
            'appid' => $apiKey,
            'units' => $units,
        ]);
        if (!$response->successful()) {  
            error_log('Unable to fetch weather data');
            return;
        }
        $data = $response->json();
        foreach ($locations as $location) {
            foreach($data['list'] as $weatherData) {
                if ($location->external_id == $weatherData['id']) {
                    $location->weatherLogs()->create([
                        'weather_condition' => $weatherData['weather'][0]['main'],
                        'temperature' => $weatherData['main']['temp'],
                        'feels_like' => $weatherData['main']['feels_like'],
                        'humidity' => $weatherData['main']['humidity'],
                        'wind_speed' => $weatherData['wind']['speed'],
                        'created_at' => now()
                    ]);
                }
            }
        }
    }
}
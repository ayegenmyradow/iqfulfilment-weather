<?php

namespace App\Http\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WeatherLogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array {
        return [
            'id' => $this->id,
            'temperature' => $this->temperature,
            'feels_like' => $this->feels_like,
            'humidity' => $this->humidity,
            'wind_speed' => $this->wind_speed,
            'location_id' => $this->location_id,
            'created_at' => $this->created_at,
            'weather_condition' => $this->weather_condition
        ];
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class WeatherLogModel extends Model
{
    use HasFactory;
        /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'weather_log';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'weather_condition',
        'temperature',
        'feels_like',
        'humidity',
        'wind_speed',
        'location_id',
        'created_at',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'temperature' => 'float',
        'feels_like' => 'float',
        'humidity' => 'integer',
        'wind_speed' => 'float',
        'location_id' => 'integer',
        'created_at' => 'datetime',
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * Get the location that owns the weather log.
     */
    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public static function getLogsByDay($id){
        return self::where('location_id', $id)->get();
    }



    public static function weatherLogsForSpecificDateByEvenHours($location_id, $date, $comparingDate)
    {
        $dateStart = $date->format('Y-m-d');
        $dateEnd = $date->modify('+1 day')->format('Y-m-d');

        $logs = self::whereRaw('location_id='.$location_id.' AND created_at BETWEEN \'' . $dateStart . '\' AND \'' . $dateEnd . '\'')
                    ->orderBy('created_at', 'asc')
                    ->get();
        $logs = $logs->groupBy(function($logs){
            return date('H',strtotime($logs->created_at));
        });
        $data = [];
        foreach ($logs as $hour => $arr) {
            $count = count($arr);
            $temperature = 0;
            $humidity = 0;
            $wind_speed = 0;
            $obj = [];
            foreach ($arr as $log) {
                $temperature += $log->temperature;
                $humidity += $log->humidity;
                $wind_speed += $log->wind_speed;
            }
            $obj['temperature'] = $temperature / $count;
            $obj['humidity'] = $humidity / $count;
            $obj['wind_speed'] = $wind_speed / $count;
            $data[$hour] = $obj;
        }
        $compStart = $comparingDate->format('Y-m-d');
        $compEnd = $comparingDate->modify('+1 day')->format('Y-m-d');

        $tempAvg = self::whereRaw('location_id='.$location_id.' AND created_at BETWEEN \'' . $compStart . '\' AND \'' . $compEnd . '\'')
                    ->avg('temperature');
        $humidityAvg = self::whereRaw('location_id='.$location_id.' AND created_at BETWEEN \'' . $compStart . '\' AND \'' . $compEnd . '\'')
                    ->avg('humidity');
        $windSpeedAvg = self::whereRaw('location_id='.$location_id.' AND created_at BETWEEN \'' . $compStart . '\' AND \'' . $compEnd . '\'')
                    ->avg('wind_speed');
        return [
            'data' => $data,
            'comparing' => [
                'temperature' => $tempAvg,
                'humidity' => $humidityAvg,
                'wind_speed' => $windSpeedAvg,
            ]
        ];
    }
}

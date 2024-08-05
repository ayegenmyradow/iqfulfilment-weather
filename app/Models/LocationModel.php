<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LocationModel extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'location';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'country_code',
        'external_id',
        'city',
        'lat',
        'lon',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'lat' => 'float',
        'lon' => 'float',
    ];







    public function weatherLogs()
    {
        return $this->hasMany(WeatherLogModel::class, 'location_id', 'id');
    }

    public function weatherLogsFromLast24Hours()
    {
        return $this->hasMany(WeatherLogModel::class,'location_id', 'id')
            ->where('created_at', '>=', now()
            ->subDay())
            ->orderBy('created_at', 'desc');
    }


    public function latestWeatherLog()
    {
        return $this->hasOne(WeatherLogModel::class,'location_id', 'id')->latestOfMany('created_at');
    }
}

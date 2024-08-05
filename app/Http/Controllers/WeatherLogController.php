<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\StatsResource;
use App\Models\WeatherLogModel;
use Carbon\Carbon;

class WeatherLogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $r)
    {
        $id = $r->input('id');
        $date = $r->input('date');
        $current = date("Y-m-d");

        if (empty($id) || empty($date) || strtotime($date) > $current) {
            return response()->json(['error' => 'Invalid request'], 400);
        }
        $comparingDate = '';
        if (strtotime(date("Y-m-d"))==strtotime(date($date))){
            $comparingDate = Carbon::now()->modify('-1 day');
        } else {
            $comparingDate = Carbon::now();
        }
        $stats = WeatherLogModel::weatherLogsForSpecificDateByEvenHours($id, Carbon::parse($date), $comparingDate);
        return StatsResource::collection($stats);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

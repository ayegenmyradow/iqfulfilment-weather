<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\LocationResource;
use App\Models\LocationModel;

class DashboardController extends Controller {

    public function index()
    {
        $locations = LocationResource::collection(LocationModel::all());
        return view('dashboard', compact('locations'));
    }
}


<?php

namespace App\Console\Commands;
use Illuminate\Console\Command;

use App\Http\Helper;

class EveryTenMinuteCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:every-ten-minute-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Helper::runJob();
    }
}

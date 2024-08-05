<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>IQ Fulfilment - Wheather</title>
        <link rel="icon" href="{{ asset('/logo.svg') }}" sizes="any" type="image/svg+xml">

        <link href="{{ asset('/css/style.css') }}" rel="stylesheet">

    </head>
    <body>
        <div id="root"></div>
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        <script>
            window.__INITIAL_STATE__ = {
                locations: @json($locations),
            };
        </script>
    </body>
</html>

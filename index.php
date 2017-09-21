<?php
require "flight/Flight.php";

Flight::route ("/api", function(){

        $festival = [
                "name"=>"Electrobeach",
                "lat"=>1.5213,
                "long" => 2.563
        ];

        echo json_encode($festival); // transforme ne variable en Json
});

Flight::start();
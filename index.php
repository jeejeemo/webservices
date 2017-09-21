<?php
require "flight/Flight.php";

Flight::route ("/api", function(){
        $festival_id = $_GET["festival_id"];
        $festivals = [
                "0"=> [
                "name"=>"Electrobeach",
                "lat"=>1.5213,
                "long" => 2.563
                ],
                "1"=>[
                "name"=>"Hellfest",
                "lat"=>2.5213,
                "long" => 3.563
                ]
        ];

        echo json_encode($festivals[$festival_id]); 
});

Flight::start();
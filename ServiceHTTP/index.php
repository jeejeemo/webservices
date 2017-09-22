<?php
//Autorise certains sites (içi tous) à faire des requetes ross domain
header("Access-Control-Allow-Origin: * ");

require "flight/Flight.php";

Flight::route ("/api", function(){
        $festival_id = $_GET["festival_id"];
        $festivals = [
                "0"=> [
                "name"=>"Electrobeach",
                "lat"=>1.5213,
                "lng" => 2.563
                ],
              "1"=>[
                "name"=>"Hellfest",
                "lat"=>2.5213,
                "lng" => 3.563
                ]
        ];

        echo json_encode($festivals[$festival_id]); 
});

Flight::route ("/api/depfr", function(){
        $pdo = new PDO('mysql:host=localhost;dbname=villes;charset=UTF8','root','');
        $query = "SELECT DISTINCT ville_departement FROM villes_france_free";
        $result = $pdo->query($query);
      
        $departements = $result->fetchAll(PDO::FETCH_COLUMN);
        echo json_encode( $departements);

        


});

Flight::route ("/api/villesfr", function(){
        $departements_id = Flight::request()->query["departement_id"];
        //var_dump($departements_id);

        //$_GET
        $pdo = new PDO('mysql:host=localhost;dbname=villes;charset=UTF8','root','');
        $query = 
                "SELECT ville_id, ville_nom
                FROM villes_france_free
                WHERE ville_departement=:departement_id
                ORDER BY ville_nom_reel";
        
        $prep = $pdo -> prepare($query);
        $prep->execute(["departement_id" => $departements_id]);
        
        $result = $prep -> fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
});



Flight::start();
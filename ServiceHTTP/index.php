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
        
        $result = $prep -> fetchAll(PDO::FETCH_ASSOC);//false / []
        echo json_encode($result);
});

// Flight::route("/api/", function(){
        
//         $username = Flight :: request()->query["username"]; //$_GET["username"]
//         $password = Flight :: request()->query["password"];

//         $user = new User();
//         $user->setUsername ($username);
//         $user->setPassword ($password);

//         $repo = new UserRepository (new BddManager() );
//         $finderUser = $repo -> getUser ( $user );

//         $status = [
//                 "success"=>"",
//                 "error"=>"",
//                 "user"=>"",
//         ];
//         if ($finderUser == false){
//                 $status["success"] = false;
                
//         }

//         //echo json_encode ($user);
// });

// Flight::route("/api/formconnect", function(){
//         $pseudoconnect = $_GET["pseudo"];
//         $mdpconnect = $_GET["motdepasse"];
        
//         $pdo = new PDO('mysql:host=localhost;dbname=espace_membre;charset=UTF8','root','');
        
//         $query = "SELECT * FROM membres WHERE pseudo= ? AND motdepasse= ?";
//         $prep = $pdo->prepare($query);
//         $prep->execute(array($pseudoconnect, $mdpconnect));
//         $result = $prep->fetch(PDO::FETCH_ASSOC);//false / []

        


//         echo json_encode($result);

// });


Flight::route("POST /user/login", function(){
        $username = Flight::request()->data["pseudo"]; //$_POST["username"]
        $password = Flight::request()->data["password"]; //$_POST["password"]
        $pdo = new PDO( 
            "mysql:host=localhost;dbname=espace_membre",
            "root",
            ""
        );
        $query = "SELECT * FROM membres WHERE pseudo=:username";
        $prep = $pdo->prepare( $query );
        $prep->execute([
            "username" => $username
        ]);
        $result = $prep->fetch( PDO::FETCH_ASSOC );//soit tableau soit false
        
        $status = [
            "success" => false,
            "errors" => [],
            "user" => []
        ];
        if( $result == false ){
            $status["success"] = false;
            $status["errors"] = "Utilisateur non trouvé";
        }
        else if( $password != $result["password"]){
            $status["success"] = false;
            $status["errors"] = "Mot de passe incorrect";
        }
        else {
            $status["success"] = true;
            $status["user"] = $result;
        }
        echo json_encode( $status );
    });

Flight::route("/user/signup", function(){
    
        });





    Flight::start();
<?php

class User implements JsonSerializable{
    private $id;
    private $username;
    private $password;

    function __construct($datas){
        $this->hydrate( $datas );
    }

//Retourne les informations nécéssaires à l'encodage de la class en json (json_encode)
    function jsonSerialize() {
        return[
            "username" => $this->username, 
            "password" => $this->passwords
        ];
    }
}
<?php

class Connection {

    static $con;

    private function __construct(){

    }
    static function getConnection(){
        if(!self::$connection)
            self::$connection = new Connection();

            return 
    }
}
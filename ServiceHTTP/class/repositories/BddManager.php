<?php

class BddManager {
    private $con;

    function __construct(){
        $this -> pdo = Connection :: getConnection();
    }
    function get
}
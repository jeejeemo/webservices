<?php

class UserRepository extends Repository {
    function getUserByUsername(User $user){
        $query = "SELECT *FROM membres WHERE pseudo=?";
        
        $prep = $pdo -> prepare($query);
        $prep->execute(["pseudo" => $pseudo]);
        
        $result = $prep -> fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }
}
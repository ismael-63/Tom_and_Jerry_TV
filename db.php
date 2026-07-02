<?php

require 'env.php';

try {
    $mysqli = new mysqli($host, $user, $pass, $db, $port);

    if ($mysqli->connect_error) {
        throw new Exception("Error de conexión: " . $mysqli->connect_error);
    }

    //echo "Conectado correctamente";

    $result = $mysqli->query("SELECT * from videos");
    $videos = $result->fetch_all(MYSQLI_ASSOC);

    $final_json = [];
    for ($i=0; $i < sizeof($videos); $i++) { 
        $final_json[] = ["name" => $videos[$i]['name'], "url" => $videos[$i]['url']];     
    }

    header('Content-Type: application/json; charset=utf-8');
    header('Content-Disposition: inline');
    header('Cache-Control: no-cache, no-store, must-revalidate');
    header('Pragma: no-cache');
    header('Expires: 0');
    echo (json_encode($final_json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

    $mysqli->close();

} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
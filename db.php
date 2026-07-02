<?php

require 'env.php';

$dsn = "pgsql:host=$host;port=$port;dbname=$db";

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    //echo "Conectado correctamente";

    $stmt = $pdo->query("SELECT * from videos");
    $videos = ($stmt->fetchAll());

    for ($i=0; $i <sizeof($videos) ; $i++) { 
    $final_json[] = ["name" => $videos[$i]['name'], "url" => $videos[$i]['url']];     
    }

    header('Content-Type: application/json; charset=utf-8');
    header('Content-Disposition: inline');
    header('Cache-Control: no-cache, no-store, must-revalidate');
    header('Pragma: no-cache');
    header('Expires: 0');
    echo (json_encode($final_json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
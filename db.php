<?php

require 'env.php';

$dsn = "pgsql:host=$host;port=$port;dbname=$db";

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    echo "Conectado correctamente";

    $stmt = $pdo->query("SELECT NOW()");
    print_r($stmt->fetch());

} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
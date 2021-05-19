<?php
    $error = 'Error running result';
    $servername = 'localhost';
    $username = 'root';
    $password = 'helloworld';
    $database = 'project';
    $connect = mysqli_connect($servername, $username, $password, $database);
    if (!$connect) {
        die("Connection unsuccessful: " . mysqli_connect_error());
    } 
    $extra2;
    $query8 = "SELECT quantity FROM inventory WHERE id=2";
    $result8 = mysqli_query($connect, $query8) or die($error);
    while($data = mysqli_fetch_array($result8)) {
        $data['quantity'];
        $extra2 = $data['quantity'];
    }
    echo 'Only '.$extra2.' left in stock!';
?>
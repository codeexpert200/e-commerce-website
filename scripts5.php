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
    $extra3;
    $query9 = "SELECT quantity FROM inventory WHERE id=3";
    $result9 = mysqli_query($connect, $query9) or die($error);
    while($data = mysqli_fetch_array($result9)) {
        $data['quantity'];
        $extra3 = $data['quantity'];
    }
    echo 'Only '.$extra3.' left in stock!';
?>
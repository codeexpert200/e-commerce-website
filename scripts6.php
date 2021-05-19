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
    $extra4;
    $query10 = "SELECT quantity FROM inventory WHERE id=4";
    $result10 = mysqli_query($connect, $query10) or die($error);
    while($data = mysqli_fetch_array($result10)) {
        $data['quantity'];
        $extra4 = $data['quantity'];
    }
    echo 'Only '.$extra4.' left in stock!';
?>
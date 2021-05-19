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
    $extra1;
    $query7 = "SELECT quantity FROM inventory WHERE id=1";
    $result7 = mysqli_query($connect, $query7) or die($error);
    while($data = mysqli_fetch_array($result7)) {
        $data['quantity'];
        $extra1 = $data['quantity'];
    }
    echo 'Only '.$extra1.' left in stock!';
?>
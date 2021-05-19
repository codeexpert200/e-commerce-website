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
    $extra6;
    $query12 = "SELECT quantity FROM inventory WHERE id=6";
    $result12 = mysqli_query($connect, $query12) or die($error);
    while($data = mysqli_fetch_array($result12)) {
        $data['quantity'];
        $extra6 = $data['quantity'];
    }
    echo 'Only '.$extra6.' left in stock!';
?>
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
    $extra5;
    $query11 = "SELECT quantity FROM inventory WHERE id=5";
    $result11 = mysqli_query($connect, $query11) or die($error);
    while($data = mysqli_fetch_array($result11)) {
        $data['quantity'];
        $extra5 = $data['quantity'];
    }
    echo 'Only '.$extra5.' left in stock!';
?>
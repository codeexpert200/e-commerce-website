<?php
    session_start();
    $error = 'Error running result';
    $servername = 'localhost';
    $username = 'root';
    $password = 'helloworld';
    $database = 'project';
    $connect = mysqli_connect($servername, $username, $password, $database);
    if (!$connect) {
        die("Connection unsuccessful: " . mysqli_connect_error());
    } 
    $id = $_SESSION['id'];
    $username4 = $_SESSION['username'];
    $logtype = "Sign Out";
    $transfer19 = "INSERT INTO log (id, username, logtype) VALUES('$id','$username4','$logtype')";
    mysqli_query($connect, $transfer19) or die($error);
?>
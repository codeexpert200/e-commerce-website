<?php
    session_start();
    $q=$_GET["q"];
    $error = 'Error running result';
    $servername = 'localhost';
    $username = 'root';
    $password = 'helloworld';
    $database = 'project';
    $connect = mysqli_connect($servername, $username, $password, $database);
    if (!$connect) {
        die("Connection unsuccessful: " . mysqli_connect_error());
    } 
    $query16="SELECT * FROM signup WHERE username='".$q."'";
    $result16 = mysqli_query($connect,$query16) or die($error);
    while($row = mysqli_fetch_array($result16))
    {
        echo $row['username'];
    }
    mysqli_close($connect);
?>
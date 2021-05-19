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
    $query17="SELECT * FROM signup WHERE email='".$q."'";
    $result17 = mysqli_query($connect,$query17) or die($error);
    while($row = mysqli_fetch_array($result17))
    {
        echo $row['email'];
    }
    mysqli_close($connect);
?>
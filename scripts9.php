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
    $fullname = $_SESSION['fullname'];
    $totalcost = $_POST['totalcost'];
    $description1 = $_POST['description1'];
    $description2 = $_POST['description2'];
    $description3 = $_POST['description3'];
    $description4 = $_POST['description4'];
    $description5 = $_POST['description5'];
    $description6 = $_POST['description6'];
    $quantity1 = $_POST['quantity1'];
    $quantity2 = $_POST['quantity2'];
    $quantity3 = $_POST['quantity3'];
    $quantity4 = $_POST['quantity4'];
    $quantity5 = $_POST['quantity5'];
    $quantity6 = $_POST['quantity6'];
    $cost1 = $_POST['cost1'];
    $cost2 = $_POST['cost2'];
    $cost3 = $_POST['cost3'];
    $cost4 = $_POST['cost4'];
    $cost5 = $_POST['cost5'];
    $cost6 = $_POST['cost6'];
    $extra1;
    $extra2;
    $extra3;
    $extra4;
    $extra5;
    $extra6;
    $remove2 = "DELETE FROM cart WHERE id=$id";
    mysqli_query($connect, $remove2) or die ($error);
    $transfer10 = "INSERT INTO cart (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description1','$quantity1','$cost1')";
    mysqli_query($connect, $transfer10) or die($error);
    $transfer11 = "INSERT INTO cart (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description2','$quantity2','$cost2')";
    mysqli_query($connect, $transfer11) or die($error);
    $transfer12 = "INSERT INTO cart (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description3','$quantity3','$cost3')";
    mysqli_query($connect, $transfer12) or die($error);
    $transfer13 = "INSERT INTO cart (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description4','$quantity4','$cost4')";
    mysqli_query($connect, $transfer13) or die($error);
    $transfer14 = "INSERT INTO cart (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description5','$quantity5','$cost5')";
    mysqli_query($connect, $transfer14) or die($error);
    $transfer15 = "INSERT INTO cart (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description6','$quantity6','$cost6')";
    mysqli_query($connect, $transfer15) or die($error);
?>
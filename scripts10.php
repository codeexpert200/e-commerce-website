<?php
    session_start();
    $count = 0;
    $total = 0;
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
    $query13 = "SELECT descriptions, quantity, cost FROM cart WHERE id=$id";
    $result13 = mysqli_query($connect, $query13) or die($error);
    if (mysqli_num_rows($result13) > 0) {
        while ($row1 = mysqli_fetch_array($result13)) {
            $count = $count + 1;
            $query21 = "SELECT quantity, cost FROM inventory WHERE id=$count";
            $result21 = mysqli_query($connect, $query21) or die($error);
            if (mysqli_num_rows($result21) > 0) {
                while ($row3 = mysqli_fetch_array($result21)) {
                    if ($row1['quantity'] > $row3['quantity']) {
                        $row1['quantity'] = $row3['quantity'];
                        $row1['cost'] = $row3['cost'] * $row3['quantity'];
                    }
                }
            }
            $temp = $row1['descriptions'] . ", " . $row1['quantity'] . ", " . $row1['cost'] . ", ";
            echo $temp;
            $total = $total + $row1['cost'];
        }
        echo $total;
    }
    else {
        echo "00";
    }

?>
<script src="scripts.js"></script>
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
    $transfer3 = "INSERT INTO orders (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description1','$quantity1','$cost1')";
    mysqli_query($connect, $transfer3) or die($error);
    $transfer4 = "INSERT INTO orders (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description2','$quantity2','$cost2')";
    mysqli_query($connect, $transfer4) or die($error);
    $transfer5 = "INSERT INTO orders (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description3','$quantity3','$cost3')";
    mysqli_query($connect, $transfer5) or die($error);
    $transfer6 = "INSERT INTO orders (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description4','$quantity4','$cost4')";
    mysqli_query($connect, $transfer6) or die($error);
    $transfer7 = "INSERT INTO orders (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description5','$quantity5','$cost5')";
    mysqli_query($connect, $transfer7) or die($error);
    $transfer8 = "INSERT INTO orders (id, fullname, descriptions, quantity, cost) VALUES('$id','$fullname','$description6','$quantity6','$cost6')";
    mysqli_query($connect, $transfer8) or die($error);
    $transfer9 = "INSERT INTO orders (id, fullname, total) VALUES('$id','$fullname','$totalcost')";
    mysqli_query($connect, $transfer9) or die($error);
    $remove1 = "DELETE FROM orders WHERE cost='0.00'";
    mysqli_query($connect, $remove1) or die ($error);
    if ($cost1 !== "0.00") {
        $query1 = "SELECT quantity FROM inventory WHERE id=1";
        $result1 = mysqli_query($connect, $query1) or die($error);
        while($data = mysqli_fetch_array($result1)) {
            $data['quantity'];
            $quantity1 = $data['quantity'] - $quantity1;
        }
        $update1 = "UPDATE inventory SET quantity=$quantity1 WHERE id=1";
        mysqli_query($connect, $update1) or die($error);
    }
    if ($cost2 !== "0.00") {
        $query2 = "SELECT quantity FROM inventory WHERE id=2";
        $result2 = mysqli_query($connect, $query2) or die($error);
        while($data = mysqli_fetch_array($result2)) {
            $data['quantity'];
            $quantity2 = $data['quantity'] - $quantity2;
        }
        $update2 = "UPDATE inventory SET quantity=$quantity2 WHERE id=2";
        mysqli_query($connect, $update2) or die($error);
    }
    if ($cost3 !== "0.00") {
        $query3 = "SELECT quantity FROM inventory WHERE id=3";
        $result3 = mysqli_query($connect, $query3) or die($error);
        while($data = mysqli_fetch_array($result3)) {
            $data['quantity'];
            $quantity3 = $data['quantity'] - $quantity3;
        }
        $update3 = "UPDATE inventory SET quantity=$quantity3 WHERE id=3";
        mysqli_query($connect, $update3) or die($error);
    }
    if ($cost4 !== "0.00") {
        $query4 = "SELECT quantity FROM inventory WHERE id=4";
        $result4 = mysqli_query($connect, $query4) or die($error);
        while($data = mysqli_fetch_array($result4)) {
            $data['quantity'];
            $quantity4 = $data['quantity'] - $quantity4;
        }
        $update4 = "UPDATE inventory SET quantity=$quantity4 WHERE id=4";
        mysqli_query($connect, $update4) or die($error);
    }
    if ($cost5 !== "0.00") {
        $query5 = "SELECT quantity FROM inventory WHERE id=5";
        $result5 = mysqli_query($connect, $query5) or die($error);
        while($data = mysqli_fetch_array($result5)) {
            $data['quantity'];
            $quantity5 = $data['quantity'] - $quantity5;
        }
        $update5 = "UPDATE inventory SET quantity=$quantity5 WHERE id=5";
        mysqli_query($connect, $update5) or die($error);
    }
    if ($cost6 !== "0.00") {
        $query6 = "SELECT quantity FROM inventory WHERE id=6";
        $result6 = mysqli_query($connect, $query6) or die($error);
        while($data = mysqli_fetch_array($result6)) {
            $data['quantity'];
            $quantity6 = $data['quantity'] - $quantity6;
        }
        $update6 = "UPDATE inventory SET quantity=$quantity6 WHERE id=6";
        mysqli_query($connect, $update6) or die($error);
    }
?>
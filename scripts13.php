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
    $c;
    $email = $_GET['email'];
    $token = $_GET['token'];
    $query19="SELECT id, username, email FROM signup WHERE email='$email'";
    $result19 = mysqli_query($connect,$query19) or die($error);
    if(mysqli_num_rows($result19) > 0) {
        while($row4 = mysqli_fetch_array($result19))
        {
            $id = $row4['id'];
            $_SESSION['id1'] = $id;
            $username4 = $row4['username'];
            $_SESSION['username1'] = $username4;
            $email = $row4['email'];
            $_SESSION['email1'] = $email;
            $b = "correct";
        }
    }
    $query20="SELECT token FROM resets WHERE email='$email'";
    $result20 = mysqli_query($connect,$query20) or die($error);
    if(mysqli_num_rows($result20) > 0) {
        while($row5 = mysqli_fetch_array($result20))
        {
            $token1 = $row5['token'];
            if(password_verify($token,$token1)) {
                $c = "correct";
            }
            else {
                $c = "incorrect";
                echo '<script>','change4();','</script>';
                $page = "reset.html";
            }
        }
    }
    else {
        $c = "incorrect";
        echo '<script>','change4();','</script>';
        $page = "reset.html";
    }
    if($c == "correct") {
        $query20="SELECT expires FROM resets WHERE email='$email'";
        $result20 = mysqli_query($connect,$query20) or die($error);
        if(mysqli_num_rows($result20) > 0) {
            while($row6 = mysqli_fetch_array($result20))
            {
                $temp5 = $row6['expires'];
                $expires = strtotime($temp5);
                $now = time();
                if(($now-$expires)<=0) {
                    $page = "passwordreset.html";
                }
                else {
                    echo '<script>','change4();','</script>';
                    $page = "reset.html";
                }
            }
        }
        else {
            echo '<script>','change4();','</script>';
            $page = "reset.html";
        }
    }
?>
<script>
    var openpage = "<?php echo $page; ?>";
    window.open(openpage,"_self");
</script>
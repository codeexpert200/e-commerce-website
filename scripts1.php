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
    if (isset($_POST['send4'])) {
        $a;
        $b;
        $username2 = $_POST['username'];
        $password2 = $_POST['password'];
        $query18="SELECT id, username, firstname, lastname, email, password FROM signup WHERE username='$username2' OR email='$username2'";
        $result18 = mysqli_query($connect,$query18) or die($error);
        if(mysqli_num_rows($result18) > 0) {
            while($row3 = mysqli_fetch_array($result18))
            {
                $id = $row3['id'];
                $_SESSION['id'] = $id;
                $username3 = $row3['username'];
                $_SESSION['username'] = $username3;
                $firstname = $row3['firstname'];
                $lastname = $row3['lastname'];
                $fullname1 = $firstname . " " . $lastname;
                $_SESSION['fullname'] = $fullname1;
                $email = $row3['email'];
                $_SESSION['email2'] = $email;
                $password3 = $row3['password'];
                $_SESSION['password1'] = $password3;
                if(password_verify($password2,$password3)) {
                    $a = "correct";
                    echo '<script>','successful();','</script>';
                    $page = "index.html";
                }
                else {
                    $a = "incorrect";
                    echo '<script>','unsuccessful();','</script>';
                    echo '<script>','change1();','</script>';
                    $page = "signin.html";
                }
            }
            if($a == "correct") {
                $logtype = "Sign In";
                $transfer18 = "INSERT INTO log (id, username, logtype) VALUES('$id','$username3','$logtype')";
                mysqli_query($connect, $transfer18) or die($error);
            }
        }
        else {
            $fullname1 = "Sorry!";
            $a = "incorrect";
            echo '<script>','unsuccessful();','</script>';
            echo '<script>','change1();','</script>';
            $page = "signin.html";
        }
    }
?>
<script>
    var openpage = "<?php echo $page; ?>";
    var fullname = "<?php echo $fullname1; ?>"
    localStorage.setItem("key39",fullname);
    window.open(openpage,"_self");
</script>
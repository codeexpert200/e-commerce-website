<script src="scripts.js"></script>
<script src="https://smtpjs.com/v3/smtp.js"></script>
<?php
    use PHPMailer\PHPMailer\PHPMailer;
    require 'vendor/PHPMailer/src/Exception.php';
    require 'vendor/PHPMailer/src/PHPMailer.php';
    require 'vendor/PHPMailer/src/SMTP.php';
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
    if (isset($_POST['send1'])) {
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $country = $_POST['country'];
        $content = $_POST['content'];
        $transfer1 = "INSERT INTO contact (firstname, lastname, email, country, content) VALUES('$firstname','$lastname','$email','$country','$content')";
        mysqli_query($connect, $transfer1) or die($error);
        echo '<script>','change10();','</script>';
        $page = 'contact.html';
    }
    if (isset($_POST['send2'])) {
        $id = $_SESSION['id'];
        $remove3 = "DELETE FROM cart WHERE id=$id";
        mysqli_query($connect, $remove3) or die ($error);
        $fullname = $_POST['fullname'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $zip = $_POST['zip'];
        $nameoncard = $_POST['nameoncard'];
        $temp1 = $_POST['creditcardnumber'];
        $creditcardnumber = password_hash($temp1,PASSWORD_BCRYPT);
        $expmonth = $_POST['expmonth'];
        $expyear = $_POST['expyear'];
        $temp2 = $_POST['cvv'];
        $cvv = password_hash($temp2,PASSWORD_BCRYPT);
        $transfer2 = "INSERT INTO checkout (id, fullname, email, address, city, state, zip, nameoncard, creditcardnumber, expmonth, expyear, cvv) VALUES('$id','$fullname','$email','$address','$city','$state','$zip','$nameoncard','$creditcardnumber','$expmonth','$expyear','$cvv')";
        mysqli_query($connect, $transfer2) or die($error);
        $id = mysqli_insert_id($connect);
        echo '<script>','transfer();','</script>';
        echo '<script>','change11();','</script>';
        $page = "checkout.html";
    }
    if (isset($_POST['send3'])) {
        $username1 = $_POST['username'];
        $_SESSION['username3'] = $username1;
        $firstname = $_POST['firstname'];
        $_SESSION['firstname'] = $firstname;
        $lastname = $_POST['lastname'];
        $_SESSION['lastname'] = $lastname;
        $fullname = $firstname . " " . $lastname;
        $email = $_POST['email'];
        $_SESSION['email1'] = $email;
        $temp3 = $_POST['password'];
        $password1 = password_hash($temp3,PASSWORD_BCRYPT);
        $_SESSION['password'] = $password1;
        $token = bin2hex(random_bytes(25));
        $token1 = password_hash($token,PASSWORD_BCRYPT);
        $created = date("Y-m-d"." "."H:i:s", strtotime("now 2 hours"));
        $expires = date("Y-m-d"." "."H:i:s", strtotime("1 day 2 hours"));
        $expires1 = date("d-m-Y", strtotime("1 day 2 hours"));
        $expires2 = date("h:i A", strtotime("1 day 2 hours"));
        $message4 = '
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>Account Registration</title>
            </head>
            <body>
                <p>Hi '.$fullname.',</p>
                <br>
                <p>This is to inform you that a request was sent to register your account.</p>

                <p>If this was you, then please click on this <a href="http://www.eyes.com/scripts15.php?email='.$email.'&token='.$token.'">link</a> to register your account.</p>

                <p>Please note that the link above will expire on '.$expires1.' at '.$expires2.'.</p>

                <p>Please also note that if another account registration request was sent, then the link above will expire regardless of the date and time above.</p>

                <p>If this was not you, then please ignore this email.</p>
                
                <p>Your account will not be registered unless you click on the link above.</p>

                <p>Please do not reply to this automated email.</p>
                <br>
                <p>Thank you,</p>
                <p>The Eye Team</p>
            </body>
        </html>
        ';
        $mail = new PHPMailer(true); 
        $mail->isSMTP();                                     
        $mail->Host = 'smtp.gmail.com';                      
        $mail->SMTPAuth = true;                             
        $mail->Username = '';     
        $mail->Password = '';             
        $mail->SMTPOptions = array(
            'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
            )
        );                         
        $mail->SMTPSecure = 'ssl';                           
        $mail->Port = 465;                                   
        $mail->setFrom('eye.no.reply@gmail.com');
        $mail->addAddress($email);              
        $mail->isHTML(true);                                  
        $mail->Subject = 'Account Registration Request';
        $mail->Body = $message4;
        $mail->send(); 
        echo '<script>','change7();','</script>';
        $remove4 = "DELETE FROM registration WHERE email='$email'";
        mysqli_query($connect, $remove4) or die ($error);
        $transfer20 = "INSERT INTO registration (email, token, created, expires) VALUES('$email','$token1','$created','$expires')";
        mysqli_query($connect, $transfer20) or die($error); 
        $page = "signup.html";
    }
    if (isset($_POST['send5'])) {
        $username2 = $_POST['username'];
        $query19="SELECT firstname, lastname, email FROM signup WHERE username='$username2' OR email='$username2'";
        $result19 = mysqli_query($connect,$query19) or die($error);
        if(mysqli_num_rows($result19) > 0) {
            while($row4 = mysqli_fetch_array($result19))
            {
                $firstname = $row4['firstname'];
                $lastname = $row4['lastname'];
                $fullname = $firstname . " " . $lastname;
                $_SESSION['fullname1'] = $fullname;
                $email = $row4['email'];
                $_SESSION['email'] = $email;
                $b = "correct";
            }
        }
        else {
            $b = "incorrect";
            echo '<script>','change2();','</script>';
            $page = "reset.html";
        }
        if($b == "correct") {
            $token = bin2hex(random_bytes(25));
            $token1 = password_hash($token,PASSWORD_BCRYPT);
            $created = date("Y-m-d"." "."H:i:s", strtotime("now 2 hours"));
            $expires = date("Y-m-d"." "."H:i:s", strtotime("1 day 2 hours"));
            $expires1 = date("d-m-Y", strtotime("1 day 2 hours"));
            $expires2 = date("h:i A", strtotime("1 day 2 hours"));
            $email = $_SESSION['email'];
            $fullname = $_SESSION['fullname1'];
            $message1 = '
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <title>Password Reset Request</title>
                </head>
                <body>
                    <p>Hi '.$fullname.',</p>
                    <br>
                    <p>This is to inform you that a request was sent to reset the password of your account.</p>

                    <p>If this was you, then please click on this <a href="http://www.eyes.com/scripts13.php?email='.$email.'&token='.$token.'">link</a> to reset your password.</p>

                    <p>Please note that the link above will expire on '.$expires1.' at '.$expires2.'.</p>

                    <p>Please also note that if another password reset request was sent, then the link above will expire regardless of the date and time above.</p>

                    <p>If this was not you, then your account may be at risk. Please contact us immediately at eyemilitia@gmail.com. Or call us at +971-4-371-2021.</p>
                    
                    <p>Your password will not change unless you click on the link above.</p>

                    <p>Please do not reply to this automated email.</p>
                    <br>
                    <p>Thank you,</p>
                    <p>The Eye Team</p>
                </body>
            </html>
            ';
            $mail = new PHPMailer(true); 
            $mail->isSMTP();                                     
            $mail->Host = 'smtp.gmail.com';                      
            $mail->SMTPAuth = true;                             
            $mail->Username = '';     
            $mail->Password = '';             
            $mail->SMTPOptions = array(
                'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
                )
            );                         
            $mail->SMTPSecure = 'ssl';                           
            $mail->Port = 465;                                   
            $mail->setFrom('eye.no.reply@gmail.com');
            $mail->addAddress($email);              
            $mail->isHTML(true);                                  
            $mail->Subject = 'Account Password Reset Request';
            $mail->Body = $message1;
            $mail->send(); 
            echo '<script>','change3();','</script>';
            $remove4 = "DELETE FROM resets WHERE email='$email'";
            mysqli_query($connect, $remove4) or die ($error);
            $transfer20 = "INSERT INTO resets (email, token, created, expires) VALUES('$email','$token1','$created','$expires')";
            mysqli_query($connect, $transfer20) or die($error); 
            $page = "reset.html";
        }
    }
    if (isset($_POST['send6'])) {
        $id = $_SESSION['id1'];
        $temp4 = $_POST['password'];
        $password4 = password_hash($temp4,PASSWORD_BCRYPT);
        $email = $_SESSION['email1'];
        $username5 = $_SESSION['username1'];
        $message2 = '
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>Account Registration</title>
            </head>
            <body>
                <p>Hi '.$fullname.',</p>
                <br>
                <p>This is to inform you that the password of your account changed.</p>

                <p>If this was you, then you can ignore this email.</p> 

                <p>If this was not you, then your account may be at risk. Please contact us immediately at eyemilitia@gmail.com. Or call us at +971-4-371-2021.</p>

                <p>Please do not reply to this automated email.</p>
                <br>
                <p>Thank you,</p>
                <p>The Eye Team</p>
            </body>
        </html>
        ';
        $update7 = "UPDATE signup SET password='$password4' WHERE id='$id'";
        mysqli_query($connect, $update7) or die($connect);
        $logtype = "Reset";
        $transfer21 = "INSERT INTO log (id, username, logtype) VALUES('$id','$username5','$logtype')";
        mysqli_query($connect, $transfer21) or die($connect);
        $remove5 = "DELETE FROM resets WHERE email='$email'";
        mysqli_query($connect, $remove5) or die ($connect);
        $mail = new PHPMailer(true); 
        $mail->isSMTP();                                     
        $mail->Host = 'smtp.gmail.com';                      
        $mail->SMTPAuth = true;                             
        $mail->Username = '';     
        $mail->Password = '';             
        $mail->SMTPOptions = array(
            'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
            )
        );                         
        $mail->SMTPSecure = 'ssl';                           
        $mail->Port = 465;                                   
        $mail->setFrom('eye.no.reply@gmail.com');
        $mail->addAddress($email);              
        $mail->isHTML(true);                                  
        $mail->Subject = 'Account Password Reset Successful';
        $mail->Body = $message2;
        $mail->send(); 
        echo '<script>','change6();','</script>';
        $page = "signin.html";
    }
    if (isset($_POST['send7'])) {
        $id = $_SESSION['id'];
        $username4 = $_SESSION['username'];
        $password5 = $_POST['password1'];
        $password6 = $_SESSION['password1'];
        $password7 = $_POST['password'];
        if(password_verify($password5,$password6)) {
            $password8 = password_hash($password7,PASSWORD_BCRYPT);
            $update8 = "UPDATE signup SET password='$password8' WHERE id='$id'";
            mysqli_query($connect, $update8) or die($connect);
            $logtype = "Update";
            $transfer22 = "INSERT INTO log (id, username, logtype) VALUES('$id','$username4','$logtype')";
            mysqli_query($connect, $transfer22) or die($error);
            echo '<script>','change12();','</script>';
            $page = "passwordchange.html";
        }
        else {
            echo '<script>','change13();','</script>';
            $page = "passwordchange.html";
        }
    }
    if (isset($_POST['send8'])) {
        $password9 = $_POST['password2'];
        $password10 = $_SESSION['password1'];
        $fullname1 = $_SESSION['fullname'];
        $id = $_SESSION['id'];
        $email = $_SESSION['email2'];
        $message3 = '
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>Account Registration</title>
            </head>
            <body>
                <p>Hi '.$fullname1.',</p>
                <br>
                <p>This is to inform you that your account deleted successfully.</p>

                <p>If this was you, then we are sorry to see you leave. You will be missed.</p> 

                <p>If this was not you, then we are sorry to tell you this, but unfortunately your account cannot be recovered as it was deleted permanently. Your only option is to create a new account by signing up.</p>

                <p>Please do not reply to this automated email.</p>
                <br>
                <p>Thank you,</p>
                <p>The Eye Team</p>
            </body>
        </html>
        ';
        if(password_verify($password9,$password10)) {
            $a = "correct";
            $remove6 = "DELETE FROM signup WHERE id=$id";
            mysqli_query($connect, $remove6) or die ($error);
            $mail = new PHPMailer(true); 
            $mail->isSMTP();                                     
            $mail->Host = 'smtp.gmail.com';                      
            $mail->SMTPAuth = true;                             
            $mail->Username = '';     
            $mail->Password = '';             
            $mail->SMTPOptions = array(
                'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
                )
            );                         
            $mail->SMTPSecure = 'ssl';                           
            $mail->Port = 465;                                   
            $mail->setFrom('eye.no.reply@gmail.com');
            $mail->addAddress($email);              
            $mail->isHTML(true);                                  
            $mail->Subject = 'Account Delete Successful';
            $mail->Body = $message3;
            $mail->send(); 
            echo '<script>','unsuccessful();','</script>';
            echo '<script>','change15();','</script>';
            $page = "signin.html";
        }
        else {
            $a = "incorrect";
            echo '<script>','successful();','</script>';
            echo '<script>','change14();','</script>';
            $page = "accountdelete.html";
        }
    }
?>
<script>
    var openpage = "<?php echo $page; ?>";
    window.open(openpage,"_self");
</script>
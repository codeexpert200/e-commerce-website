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
    $c;
    $email = $_GET['email'];
    $token = $_GET['token'];
    $query20="SELECT token FROM registration WHERE email='$email'";
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
                echo '<script>','change8();','</script>';
                $page = "signup.html";
            }
        }
    }
    else {
        $c = "incorrect";
        echo '<script>','change8();','</script>';
        $page = "signup.html";
    }
    if($c == "correct") {
        $query20="SELECT expires FROM registration WHERE email='$email'";
        $result20 = mysqli_query($connect,$query20) or die($error);
        if(mysqli_num_rows($result20) > 0) {
            while($row6 = mysqli_fetch_array($result20))
            {
                $temp5 = $row6['expires'];
                $expires = strtotime($temp5);
                $now = time();
                if(($now-$expires)<=0) {
                    $username1 = $_SESSION['username3'];
                    $firstname = $_SESSION['firstname'];
                    $lastname = $_SESSION['lastname'];
                    $fullname = $firstname . " " . $lastname;
                    $email = $_SESSION['email1'];
                    $password1 = $_SESSION['password'];
                    $message5 = '
                    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                    <html xmlns="http://www.w3.org/1999/xhtml">
                        <head>
                            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                            <title>Account Registration</title>
                        </head>
                        <body>
                            <p>Hi '.$fullname.',</p>
                            <br>
                            <p>This is to inform you that your account registered successfully.</p>

                            <p>If this was you, then welcome to our website. You can now sign in to your account to purchase products and gain benefits!</p> 

                            <p>If this was not you, then your account may be at risk. Please contact us immediately at eyemilitia@gmail.com. Or call us at +971-4-371-2021.</p>

                            <p>Please do not reply to this automated email.</p>
                            <br>
                            <p>Thank you,</p>
                            <p>The Eye Team</p>
                        </body>
                    </html>
                    ';
                    $transfer17 = "INSERT INTO signup (username, firstname, lastname, email, password) VALUES('$username1','$firstname','$lastname','$email','$password1')";
                    mysqli_query($connect, $transfer17) or die($error);
                    $id = mysqli_insert_id($connect);
                    $query19 = "SELECT username FROM signup WHERE id=$id";
                    $result19 = mysqli_query($connect, $query19) or die($error);
                    while($data = mysqli_fetch_array($result19)) {
                        $data['username'];
                        $username5 = $data['username'];
                        $_SESSION['username2'] = $username5;
                    }
                    $username5 = $_SESSION['username2'];
                    $logtype = "Sign Up";
                    $transfer20 = "INSERT INTO log (id, username, logtype) VALUES('$id','$username5','$logtype')";
                    mysqli_query($connect, $transfer20) or die($error);
                    $remove5 = "DELETE FROM registration WHERE email='$email'";
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
                    $mail->Subject = 'Account Registration Successful';
                    $mail->Body = $message5;
                    $mail->send(); 
                    echo '<script>','unsuccessful();','</script>';
                    echo '<script>','change9();','</script>';
                    $page = "signin.html";
                }
                else {
                    echo '<script>','change8();','</script>';
                    $page = "signup.html";
                }
            }
        }
        else {
            echo '<script>','change8();','</script>';
            $page = "signup.html";
        }
    }
?>
<script>
    var openpage = "<?php echo $page; ?>";
    window.open(openpage,"_self");
</script>
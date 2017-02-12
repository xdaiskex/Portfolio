<?php 
    if(empty($_POST) === false){
        $errors = array();

        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $email = "nguyen.anthony@knights.ucf.edu";
        $message = $_POST['message'];

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        $headers .= 'From: '.$name . "\r\n";

        mail($email, $subject, $message, $headers);
        header('Location: contact.php?sent');
        exit();
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Haikyuu - Contact</title>

    <!-- CSS  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="css/materialize.css" type="text/css" rel="stylesheet"/>
    <link href="css/style.css" type="text/css" rel="stylesheet"/>
</head>
<body>
    <div class="navbar-fixed">
        <nav class="black activator">
            <div class="nav-wrapper container">
                <a id="logo-container" href="index.html" class="brand-logo">Haikyuu</a>
                <!-- Desktop Menu -->
                <ul class="right hide-on-med-and-down">
                    <li><a href="index.html" class="desktop-nav">Home</a></li>
                    <li><a href="team.html" class="desktop-nav">Team</a></li>
                    <li><a href="gallery.html" class="desktop-nav">Gallery</a></li>
                    <li><a href="contact.php" class="desktop-nav">Contact</a></li>
                </ul>
                <!-- Mobile Menu -->
                <ul id="nav-mobile" class="side-nav">
                    <li><a href="#" class="brand-logo-side center">Haikyuu</a><li>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
                <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
            </div>
        </nav>
    </div>

    <div class="container content">
        <h3 class="center">Contact Form</h3>
        <?php
        if(isset($_GET['sent']) === true){
            ?>
            <div class="row center content">
                <i class="material-icons done">done</i>
                <h4>Message sent!</h4>
                <h5>Thank you for your time.</h5>
                <br><br>
                <button class="btn-large home-btn waves-effect waves-light bold black-text" type="submit" name="action">
                    <i class="material-icons left">mode_edit</i>
                    <a href="contact.php" class="black-text">Back</a>
                </button>
            </div>
            <?php
        }
        else{
        ?>
        <form action="contact.php" method="post" class="col s12">
            <div class="row">
                <div class="input-field col s12 m8 offset-m2">
                    <i class="material-icons prefix">account_circle</i>
                    <input type="text" id="name" class="validate" name="name" required>
                    <label for="name">Name</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m8 offset-m2">
                    <i class="material-icons prefix">subject</i>
                    <input type="text" id="subject" class="validate" name="subject" required>
                    <label for="subject">Subject</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m8 offset-m2">
                    <i class="material-icons prefix">email</i>
                    <input id="email" type="email" class="validate" name="email" placeholder="nguyen.anthony@knights.ucf.edu" disabled>
                    <label for="email" data-error="Invalid Email Address" data-success="Valid Email Address">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m8 offset-m2">
                    <i class="material-icons prefix">comment</i>
                    <textarea id="message" class="materialize-textarea" name="message" required></textarea>
                    <label for="message">Message</label>
                </div>
            </div>
            <div class="row">
                <div class="center">
                    <button class="btn-large home-btn waves-effect waves-light black-text bold" type="submit" name="action">
                        Submit
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
        <?php
        }
        ?>
    </div>

    <footer class="page-footer black">
        <div class="footer-copyright">
            <div class="container">
                <p class="center">
                    Designed by 
                    <a class="text-lighten-3 anthony" href="http://anthonywin.com">Anthony Nguyen</a>
                </p>
                <p class="center">
                    <i class="material-icons">error_outline</i>
                    All Media used on this website is used for the purpose of entertainment and education.
                    Under the terms of fair use all footage and images belong to their respective owners.
                </p>
            </div>
        </div>
    </footer>

    <!--  Scripts-->
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="js/materialize.js"></script>
    <script src="js/init.js"></script>
    <script src="js/smoothscroll.js"></script>
    <script src="js/jquery.js"></script>
</body>
</html>

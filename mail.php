<?php 
    if(empty($_POST) === false){
        $errors = array();

        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $email = "anthonypn93@gmail.com";
        $message = $_POST['message'];

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        $headers .= 'From: '.$name . "\r\n";

        if(mail($email, $subject, $message, $headers))
        {
            echo "success";
        }else{
            echo "failure";
        }
        exit();
    }
?>
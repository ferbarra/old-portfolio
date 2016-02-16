<?php
    // Check for empty fields.
    if(empty($_POST['name'])    || 
       empty($_POST['email'])   || 
       empty($_POST['phone'])   || 
       empty($_POST['message']) ||
       !filter_var($_POST['email'], FILTER_VALIDETE_EMAIL))
       {
           echo "No arguments provided!";
           return false;
       }
       
    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    //Create the email and send the message
    $to = 'fernandobarra2207@gmail.com';
    $email_subject = "Website Contact Form: " .$name;
    $email_body = "New message from contact form.\n\n"."Details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: noreply@yourdomain.com\n";
    $headers .= "Reply-to: $email_address";
    mail($to, $email_subject, $email_body, $headers);
    true;
?>

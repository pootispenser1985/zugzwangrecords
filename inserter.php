<?php
$email = $_POST['email'];
$subject = "Thank you for your email address! Here's your DL code!";
$content = "blah blah blah content";

//get sql credentials. probably not how you're supposed to do it
include '/home/thrashca/etc/mailinglist.php';

//insert email address into  db. I made the field unique in mysql, is why
//I don't check to see if it already exists or not
$db = new mysqli('localhost', $SQLuser, $SQLpass, 'thrashca_mailinglist');
$query = "INSERT INTO users (`email`) VALUES ('".$email."');";
$db->query($query);

//send email to user with link to downloads
mail ($email, $subject, $content);
?>

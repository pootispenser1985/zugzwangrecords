<?php
$email = $_POST['email'];
$subject = "Thank you for your email address! Here's your DL code!";
$content = "blah blah blah content";

mail ($email, $subject, $content);
?>

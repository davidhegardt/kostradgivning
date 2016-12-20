<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['fname'];
$lastname = $_POST['lname'];
$phone = $_POST['phone'];
$datum = $_POST['datum'];
$visitor_email = $_POST['epost'];
$message = $_POST['message'];

$email_from = 'Kostrådgivare';//<== from email address
$email_subject = "New Form from $name";
$email_body = "Nytt meddelande ifrån $name $lastname\n".
    "Meddelande:\n $message\n\n".
    "Email : $visitor_email\n".
	"Telefon : $phone\n".
	"Datum : $datum\n\n".
$to = "david.hegardt@gmail.com, sandrafrench91@hotmail.com";//<== email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
header('Location: booking.html');



   
?> 
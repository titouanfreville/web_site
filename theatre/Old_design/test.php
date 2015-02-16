<?php
// Le message
$message = "Line 1\r\nLine 2\r\nLine 3";

// Dans le cas où nos lignes comportent plus de 70 caractères, nous les coupons en utilisant wordwrap()
$message = wordwrap($message, 70, "\r\n");

$headers = 'From: webmaster@example.com' . "\r\n" .
            'Reply-To: webmaster@example.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

// Envoi du mail
if (mail('titouanfreville@hotmail.fr', 'Mon Sujet', $message, $headers)) {
  $message = "foo";
  echo "<script type='text/javascript'>alert('$message');</script>";
};
?>

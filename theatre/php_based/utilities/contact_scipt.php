<?php
  if($_POST["Envoyer"]) {
    $sendern=$_POST["sendern"];
    $senderp=$_POST["senderp"];
    $senderEmail=$_POST["senderEmail"];
    $message= $_POST["message"];
    $message = wordwrap($message, 70, "\r\n");

    $headers = 'From: '. $senderEmail . "\r\n" .
            'Reply-To: '. $senderEmail . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

    $sender=$sendern.$senderp;

    $mailBody="Name: $sender\nEmail: $senderEmail\r\n$message";

    if (mail('contact@festival-saint-valery.fr', 'subject', $message, $headers)) {
      $thankYou="Merci $sendern $senderp,votre message a bien été envoyé.";
      echo "<script type='text/javascript'>alert('$thankYou');</script>";
    }
  }

<?php

  $recipient="titouanfreville@hotmail.fr";
  $subject="Mail contact auto";
  $sender=$_POST["sender"];
  $senderEmail=$_POST["senderEmail"];
  $message=$_POST["message"];

  $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

  mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

  $thankYou="<p>Merci, votre message a bien été envoyer</p>";


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

    if (mail('titouanfreville@hotmail.fr,contact@festival-saint-valery.fr', 'subject', $message, $headers)) {
      $thankYou="Thank you! Your message has been sent.";
      echo "<script type='text/javascript'>alert('$thankYou');</script>";
    }
}

?>
<!DOCTYPE html>

<html>
  <head>
      <meta charset="utf-8">
      <title>Formulaire de contact Theatre en Festival</title>
      <link href="./stylesheets/style.css" rel="stylesheet" type="text/css" title="style" />
  </head>

  <body>
    <form name="f" method="post" action="contact.php">
      <label>
        <span>Votre nom *</span><input type="text" name="sendern" value=""/>
      </label>
      <label>
       <span>Votre prénom *</span><input type="text" name="senderp" value=""/>
      </label>
      <label>
       <span>Votre e-mail *</span><input type="text" name="senderEmail" value=""/>
      </label>
      <label>
        <span>Votre message *</span><textarea name="message" rows="7" cols="35" value=""></textarea>
      </label>
      <span> * champs obligatoires </span>
      <input type="submit" name="Envoyer">
    </form>

  </body>

</html>
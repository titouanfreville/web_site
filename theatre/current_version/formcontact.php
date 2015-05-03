<?php
  include 'utilities/utilities.php';
  full_header(contact);

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

    if (mail('contact@festival-saint-valery.fr,titouanfreville@hotmail.fr', 'subject', $message, $headers)) {
      $thankYou="Merci $sendern $senderp,votre message a bien été envoyé.";
      echo "<script type='text/javascript'>alert('$thankYou');</script>";
    }
  }

?>
    <form name="f" method="post" action="contact.php">
      <label>
        <span>Votre nom *</span><input type="text" name="sendern" placeholder="Entrez votre nom"/>
      </label>
      <label>
       <span>Votre prénom *</span><input type="text" name="senderp" placeholder="Entrez votre prénom"/>
      </label>
      <label>
       <span>Votre e-mail *</span><input type="text" name="senderEmail" placeholder="Entrez une adresse mail valide"/>
      </label>
      <label>
        <span>Votre message *</span><textarea name="message" rows="7" cols="35" placeholder="Tapez votre message"></textarea>
      </label>
      <span> * champs obligatoires </span>
      <input type="submit" name="Envoyer">
    </form>
    <div class='cad'>
      Théâtre en Festival - Mairie<br />19, Place Saint Martin<br />80230 Saint Valery sur Somme
    </div>
<?php
  eof();
?>

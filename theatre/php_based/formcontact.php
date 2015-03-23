<?php
  include 'utilities/utilities.php';
  full_header(contact);
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

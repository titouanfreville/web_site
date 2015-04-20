<?php
  include 'utilities/utilities.php';
  include_once ('utilities/sponsoring.php');
  full_header(partenaires);
?>
      <header>
        <span><p>les </p> partenaires</span>
      </header>
      <span class='friends'>Ils nous soutiennent</span>
      <!-- Jardin en scene sponsoring -->
      <div class='jes'>
        <a href='http://www.jardinsenscene-picardie.com'>
          <div class='img'></div>
        </a>
        <div class='txt'>
          <a href='http://www.jardinsenscene-picardie.com'>
            jardins en scène, une saison culturelle aux jardins, est une initiative de la Région et du Comité Régional du Tourisme de Picardie.<br />http://www.jardinsenscene-picardie.com
          </a>
        </div>
      </div>   
<?php
  sp_slide();
  eof();
?>

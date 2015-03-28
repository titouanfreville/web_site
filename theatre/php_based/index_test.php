<?php
  include ('utilities/utilities.php');
  include ('utilities/overlay.php');
  include_once ('utilities/sponsoring.php');
  pheader(accueil);
  overlay();
  bheader();
?>
      <div class='espace'>
        <a href='./espacepresse.html'>ESPACE PRESSE</a>
        <span>&nbsp;| espace adhérents</span>
      </div>
      <div class='container'>
        <!-- Command for information slider -->
        <span class='command' id='sl_play'>&nbsp;</span>
        <span class='command' id='sl_pause'>&nbsp;</span>
        <span class='command i' id='sl_i1'>&nbsp;</span>
        <span class='command i' id='sl_i2'>&nbsp;</span>
        <span class='command i' id='sl_i3'>&nbsp;</span>
        <!-- Animate slider : informations -->
        <section class='mslide'>
          <a class='play_commands pause' href='#sl_pause' title='pause'>pause</a>
          <a class='play_commands play' href='#sl_play' title='play'>play</a>
          <div class='bar'>
            <div class='mslider animate'>
              <div class='box green'>
                <h1>Le 7<sup>ème</sup> festival s'annonce !</h1>
                <img height='200' src='./images/affiche-2015.jpg' width='137'>
                <br>
                <a href='./programme.html'>voir le programme</a>
              </div>
              <div class='box red'>
                <h1>PROGRAMME des stages</h1><img height='139' src='./images/im1-stage.png' width='300'><br>
                <a href='./stages.html'>présentation des stages 2014-2015</a>
              </div>
              <div class='box green'>
                <h1>SOUTENEZ LE FESTIVAL : adhérez à l'ASSOCIATION.</h1>
                <img alt='Toute l&amp;#39;équipe de Théâtre en festival prépare la cinquième édition de ce rendez-vous culturel, voulu populaire et festif.' height='163' src='./images/adhesion.jpg' width='420'>
                <p>
                  Rejoignez notre belle aventure. En adhérant,  vous aidez l'association mais vous pouvez aussi si vous le souhaitez participer activement à l'accomplissement de nos missions.
                </p>
                <a href='./association.html'>en savoir +</a>
              </div>
            </div>
            <!-- Controlled slider. As animation position isn't editable using css, we have to hack it using a second slider. -->
            <div class='dslider'>
              <div class='box green b1'>
                <h1>Le 7<sup>ème</sup> festival s'annonce !</h1>
                <img height='200' src='./images/affiche-2015.jpg' width='137'>
                <br>
                <a href='./programme.html'>voir le programme</a>
                <a href='./tarifs.html'>voir les tarifs</a>
              </div>
              <div class='box red b2'>
                <h1>PROGRAMME des stages</h1><img height='139' src='./images/im1-stage.png' width='300'><br>
                <a href='./stages.html'>présentation des stages 2014-2015</a>
              </div>
              <div class='box green b3'>
                <h1>SOUTENEZ LE FESTIVAL : adhérez à l'ASSOCIATION.</h1>
                <img alt='Toute l&amp;#39;équipe de Théâtre en festival prépare la cinquième édition de ce rendez-vous culturel, voulu populaire et festif.' height='163' src='./images/adhesion.jpg' width='420'>
                <p>
                  Rejoignez notre belle aventure. En adhérant,  vous aidez l'association mais vous pouvez aussi si vous le souhaitez participer activement à l'accomplissement de nos missions.
                </p>
                <a href='./association.html'>en savoir +</a>
              </div>
            </div>
          </div>
          <!-- Dots to control the animation position -->
          <ul class='dots_commands'><li>
            <a href='#sl_i1' title='Show slide 1'>Slide 1</a>
          </li><li>
            <a href='#sl_i2' title='Show slide 2'>Slide 2</a>
          </li><li>
            <a href='#sl_i3' title='Show slide 3'>Slide 3</a>
          </li></ul>
        </section>
        <div class='content'>
          <sep></sep>
          <div class='thanks'>
            <span>Un grand merci</span> aux comédiens, metteurs en scène, administrateurs, et techniciens du spectacle vivant qui font vivre ces jours de théâtre.
          </div>
          <sep></sep>
          <div class='thanks'>
            Merci aux bénévoles qui travaillent à ces rencontres et mettent au service de l’association, leur disponibilité, leurs compétences, leur dynamisme.
          </div>
          <sep></sep>
          <div class='thanks'>
            Merci aux collectivités territoriales et aux partenaires qui, par leur financement, rendent cette aventure possible.
            <br>
          </div>
          <sep></sep>
          <div class='red'>
            <a href='http://www.festival-saint-valery.fr/pdfs/theatre_en_festival_stage_2014_2015.pdf'>téléchargez les informations pour les stages au format PDF (24 Mo)</a>
          </div>
          <sep></sep>
          <span>
            <img height='96' src='./images/nouvel33.jpg' width='100'>
            <p>
              <strong>L'histoire du Festival c'est aussi celle de ses affiches.</strong> <br /> Depuis la première édition, le dessinateur Virgile Antoine invente chaque année un dessin mettant en scène le personnage Walric. Une rétrospective qui suit les étapes de l'aventure.
            </p>
            <a class='green d110' href='./affiches.html'>voir les affiches</a>
          </span>
        </div>
      </div>
      <?php
        sp_slide();
      ?>
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
        eof();
      ?>

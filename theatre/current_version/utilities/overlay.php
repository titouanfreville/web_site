<?php
  include_once 'sponsoring.php';
  function overlay()
  {
    echo "<input id='overlay_joke' name='overlay' type='radio'>";
    echo "<label for='overlay_joke'></label>\n";
    echo "<!-- Popup events -->\n";
    echo "<div class='overlay'>\n";
    echo "<div class='ocontent'>\n";
    echo "<div class='close'>\n";
    echo "Accéder au site\n";
    echo "</div>\n";
    sp_slide();
    echo "<a href='./programme.html'>\n";
    echo "<div class='img'></div>\n";
    echo "</a>\n";
    echo "<div class='txt'>\n";
    echo "<a href='./programme.html'>\n";
    echo "<i>\n";
    echo "Cliquez ici\n";
    echo "</i>\n";
    echo "pour rentrer dans le 7eme festival de théâtre de Saint Valery sur Somme, les 25, 26, 27et 28 juin 2015\n";
    echo "</a>\n";
    echo "<!-- Jardin en scene sponsoring -->\n";
    echo "<div class='jes'>\n";
    echo "<a href='http://www.jardinsenscene-picardie.com'>\n";
    echo "<div class='img'></div>\n";
    echo "</a>\n";
    echo "<div class='txt'>\n";
    echo "<a href='http://www.jardinsenscene-picardie.com'>\n";
    echo "<i>\n";
    echo "jardins en scène, une saison culturelle aux jardins, est une initiative de la Région et du Comité Régional du Tourisme de Picardie. <br />http://www.jardinsenscene-picardie.com\n";
    echo "</i>\n";
    echo "</a>\n";
    echo "</div>\n";
    echo "</div>\n";
    echo "</div>\n";
    echo "</div>\n";
    echo "</div>\n";
  }
?>
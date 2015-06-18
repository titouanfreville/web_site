<?php

  $now   = time();
  $birth = strtotime('1993-27-08 16:00:00');

  function head($page_name) {
    echo "<!DOCTYPE html>";
    echo "<html>";
    echo "<head>";
    echo "<meta charset='utf-8' />";
    echo "<meta name='viewport' content='initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width'>";
    echo "<title>Titouan FREVILLE - site perso : $page_name</title>";
    echo "<link rel='icon' href='favicon.ico' />";
    echo "<link rel='icon' type='image/gif' href='cactusgreen.gif' />";

    echo "<!-- loading CSS -->";
    echo "<link href='./css/stylesheets/style.css' rel='stylesheet'>";

    // echo "<!--laoding JS files -->";

    echo "</head>";
  }

 function age($date1, $date2){
    $diff = abs($date2 - $date1);

    $retour = array();

    $tmp = $diff;
    $retour['second'] = $tmp % 60;

    $tmp = floor( ($tmp - $retour['second']) /60 );
    $retour['minute'] = $tmp % 60;

    $tmp = floor( ($tmp - $retour['minute'])/60 );
    $retour['hour'] = $tmp % 24;

    $tmp = floor( ($tmp - $retour['hour'])  /24 );
    $retour['day'] = $tmp;

    $tmp = floor($retour['day']/365.242);

    return $tmp;
}

  function menu($birth,$now) {
    $age = age($birth,$now);
    echo "<body>";
    echo "<div class='header'>";
    echo "<presenter>";
    echo "<h1>FREVILLE Titouan</h1><h2>$age ans, né le 27 Août 1993 <span>à Abbeville, Somme, FRANCE</span></h2>";
    echo "<studies>Élèves à l'école d'ingénieur ENSIIE, formation continue</studies>";
    echo "</presenter>";
    echo "<menu>";
    echo "<ul>";
    echo "<li><a>Présentation - Accueil</a></li>";
    echo "<li><a>CV</a></li>";
    echo "<li><a>Projet personnel et contribution</a></li>";
    echo "</ul>";
    echo "<socialnetwork>";
    echo "<ul>";
    echo "<li><a href='https://fr.linkedin.com/pub/titouan-freville/9a/5b2/3' class='linkedin'></a></li>";
    echo "<li><a href='http://fr.viadeo.com/fr/profile/titouan.freville' class='viadeo'></a></li>";
    echo "<li><a href='https://twitter.com/TitouanFREVILLE' class='twitter'></a></li>";
    echo "</ul>";
    echo "</menu>";
    echo "</div>";
    echo "<div class='main'>";
  }

  function sstart($page_name,$birth,$now) {
    head($page_name);
    menu($birth,$now);
  }

  function eof() {
    echo "</div></body></html>";
  }
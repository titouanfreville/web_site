<?php

  if (substr_count($_SERVER[‘HTTP_ACCEPT_ENCODING’], ‘gzip’)) ob_start(“ob_gzhandler”); else ob_start();

  function pheader($title) {
    echo "<!-- @author: FREVILLE Titouan <titouanfreville@hotmail.fr, tfreville@nexway.com, titouan.freville@ensiie.fr > -->";
    echo "<!DOCTYPE html><html>";
    echo "<head>\n";
    echo "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n";
    echo "<title>Festival de Saint Valery sur Somme :: $title</title>\n";
    echo "<link href=\"./stylesheets/style.css\" rel=\"stylesheet\" type=\"text/css\" title=\"style\" />\n";
    echo "<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"./images/favicon.ico\" /><link rel=\"icon\" type=\"image/png\" href=\"./images/favicon.png\" /><!--[if IE]><link rel=\"shortcut icon\" href=\"./images/favicon.ico\"/><![endif]-->\n";
    echo "</head>\n\t<body>\n";
  }

  function bheader($class_part=null)
  {
    echo "<div class='header'>\n";
    echo "<div class='bandeau'>\n";
    echo "<div class='logo'></div>\n";
    echo "<div class='txt'><div class='name'>Théâtre en Festival</div>";
    echo "<div class='action'>Festival de Théâtre Saint Valery sur Somme</div>\n";
    echo"</div></div>\n";
    echo "<div class='menu'>\n";
    echo "<ul>\n";
    echo "<li><a style='link' href='./index.php'>ACCUEIL</a></li>\n";
    echo "<li><a style='link' href='./programme.php'>PROGRAMME</a></li>\n";
    echo "<li><a style='link' href='./infospratiques.php'>INFOS PRATIQUES</a></li>\n";
    echo "<li><a style='link' href='./tarifs.php'>TARIFS</a></li>\n";
    echo "<li><a style='link' href='./association.php'>L'ASSOCIATION</a></li>\n";
    echo "<li><a style='link' href='./stages.php'>LES STAGES</a></li>\n";
    echo "<li><a style='link' href='./partenaires.php'>PARTENAIRES</a></li>\n";
    echo "<li><a style='link' href='./contact.php'>CONTACT</a></li>\n";
    echo "</ul>\n";
    echo "</div>\n";
    echo "</div>\n";
    echo "<div class='main $class_part'>\n";
  }

  function full_header($title,$class_part=null){
    pheader($title);
    bheader($class_part);
  }

  // print eof
  function eof()
  {
    echo "<div class='mention visibility'>\n";
    echo "<a href='mentionslegales.php'>Mentions Légales</a>\n";
    echo "| Copyright © Théâtre en Festival. Tous droits réservés\n";
    echo "</div>\n";
    echo "</div>\n</body>\n</html>";
  }

?>
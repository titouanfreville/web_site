<?php

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

  function bheader($class_part)
  {
    echo "<div class=\"header\">\n";
    echo "<div class=\"bandeau\"></div>\n";
    echo "<div class=\"menu\">\n";
    echo "<ul>\n";
    echo "<li><a style=\"link\" href=\"./index.html\">ACCUEIL</a></li>\n";
    echo "<li><a style=\"link\" href=\"./programme.html\">PROGRAMME</a></li>\n";
    echo "<li><a style=\"link\" href=\"./infospratiques.html\">INFOS PRATIQUES</a></li>\n";
    echo "<li><a style=\"link\" href=\"./tarifs.html\">TARIFS</a></li>\n";
    echo "<li><a style=\"link\" href=\"./association.html\">L'ASSOCIATION</a></li>\n";
    echo "<li><a style=\"link\" href=\"./stages.html\">LES STAGES</a></li>\n";
    echo "<li><a style=\"link\" href=\"./partenaires.html\">PARTENAIRES</a></li>\n";
    echo "<li><a style=\"link\" href=\"./contact.html\">CONTACT</a></li>\n";
    echo "</ul>\n";
    echo "</div>\n";
    echo "</div>\n";
    echo "<div class=\"main $class_part\">\n";
  }

  function full_header($title,$class_part){
    pheader($title);
    bheader($class_part);
  }

  // print eof
  function eof()
  {
    echo "<div class='mention visibility'>\n";
    echo "<a href='mentionslegales.html'>Mentions Légales</a>\n";
    echo "| Copyright © Théâtre en Festival. Tous droits réservés\n";
    echo "</div>\n";
    echo "</div>\n</body>\n</html>";
  }

?>
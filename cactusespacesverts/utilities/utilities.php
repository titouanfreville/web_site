<?php

  function head($page_name) {
    echo "<!DOCTYPE html>";
    echo "<html>";
    echo "<head>";
    echo "<meta charset='utf-8' />";
    echo "<meta name='viewport' content='initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width'>";
    echo "<title>$page_name</title>";
    echo "<link rel='icon' href='favicon.ico' />";
    echo "<link rel='icon' type='image/gif' href='cactusgreen.gif' />";

    echo "<!-- loading CSS -->";
    echo "<link href='./css/stylesheets/style.css' rel='stylesheet'>";

    echo "<!--laoding JS files -->";

    echo "</head>";
  }

  function menu() {
    echo "<body>";
    echo "<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!! HEADER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->";
    echo "<div class='headercontainer cache'>";
    echo "<div class='header'>";
    echo "<div class='band'>";
    echo "<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! LOGO  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->";
    echo "<a href='/' class='logo'>";
    echo "</a>";
    echo "<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CIE NAME !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->";
    echo "<div class='ciename'>";
    echo "<h1>Cactus Espaces Verts</h1>";
    echo "<h2>Le jardin plus proche de la nature</h2>";
    echo "<span>... à votre service depuis plus de 20 ans</span>";
    echo "</div>";
    echo "</div>";
    echo "<div class='band'>";
    echo "<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!! BANNER CONTACT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->";
    echo "<div class='bannercontact'>";
    echo "<div class='phone'>";
    echo "<span class='img'></span>";
    echo "<span>03.22.26.62.82</span>";
    echo "</div>";
    echo "<div class='address'>";
    echo "<div class='street'>145, rue du Maréchal Foch</div>";
    echo "<div class='cp'> <span>80410</span> <span>Cayeux/mer</span></div>";
    echo "</div>";
    echo "</div>";
    echo "<!-- !!!!!!!!!!!!!!!!!!!!!!!!!! MENU !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->";
    echo "<div class='menu'>";
    echo "<div class='container'>";
    echo "<ul>";
    echo "<li>";
    echo "<a href='./creation.html'>Création</a>";
    echo "<ul>";
    echo "<li>";
    echo "<a href='./creation.html#terrasse'>Terrasse</a>";
    echo "<ul>";
    echo "<li><a ./creation.html#t_bois'>Bois</a></li>";
    echo "<li><a ./creation.html#t_pave'>Pavé</a></li>";
    echo "<li><a ./creation.html#t_min'>Minéral</a></li>";
    echo "</ul>";
    echo "</li>";
    echo "<li>";
    echo "<a>Végétal</a>";
    echo "<ul>";
    echo "<li><a>Massif</a></li>";
    echo "<li><a>Gazon</a></li>";
    echo "<li><a>Plantation</a></li>";
    echo "</ul>";
    echo "</li>";
    echo "<li>";
    echo "<a>Menuiserie paysagère</a>";
    echo "<ul>";
    echo "<li><a>Banc</a></li>";
    echo "<li><a>Bac</a></li>";
    echo "<li><a>Pergola</a></li>";
    echo "<li><a>Châlet</a></li>";
    echo "</ul></li>";
    echo "<li>";
    echo "<a>Allée, escalier ...</a>";
    echo "<ul>";
    echo "<li><a>Pavage</a></li>";
    echo "<li><a>Bois</a></li>";
    echo "<li><a>Mineral</a></li>";
    echo "</ul>";
    echo "</li>";
    echo "<li><a>Bassin</a></li>";
    echo "<li><a>Soutènement</a></li>";
    echo "</ul>";
    echo "</li>";
    echo "<li>";
    echo "<a>Entretien</a>";
    echo "<ul>";
    echo "<li><a>Contrat Annuel</a></li>";
    echo "<li><a>Intervention Ponctuelle</a></li>";
    echo "<li><a>Taille et soin aux arbres</a></li>";
    echo "</ul>";
    echo "</li>";
    echo "<li><a>Notre matériel</a></li>";
    echo "<li><a>Contact</a></li>";
    echo "</ul></div></div></div></div></div>";
    echo "<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! END HEADER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->";
    echo "<div class='main'>";
  }

  function sstart($page_name) {
    head($page_name);
    menu();
  }

  function eof() {
    echo "</div></body></html>";
  }
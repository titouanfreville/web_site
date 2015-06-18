<?php
  ini_set( 'error_reporting', E_ALL );
  ini_set( 'display_errors', true );
  include ('utilities/global.php');
  $now   = time();
  $birth = strtotime('1993-08-27 16:00:00');
  sstart('accueil',$birth,$now);
?>
<me>
  <span> Français interresser par la musique, la poésie, l'informatique et d'autres domaines autant scientifique que littéraire, c'est dans l'optique de rassembler mes poèmes en un seul endroit que j'ai fait mes prepier pas en informatique. J'ai depuis réaliser plusieur site en divers ocasion, scolaire ou autre. Je suis aujourd'hui étudiant à l'École National Supérieur d'Informatique pour l'Industrie et l'Entreprise. Suite à deux année de classe préparatoire aux grandes écoles, spécialité maths,physique, option informatique.
  </span>
  <summary>
    <h1>Quelques expériences professionnels</h1>
    <ul>
      <li>
        <info>
          <date>Décembre 2014 - Mai 2015</date>
          <role>Web Designer</role>
          <entreprise>Association Théâtre en Festival</entreprise>
        </info>
        <objectif>
          Maintenance du site internet de l'association.
        </objectif>
        <tasks>
          <ul>
            <li>
              <name>Maintenance du code</name>
              <description>
                <ul>
                  <li>Réécriture du code pour l'adapter aux nouvelles technologies</li>
                  <li>Simplification de la navigation</li>
                </ul>
              </description>
            </li>
            <li>
              <name>Refonte du site</name>
              <description>
                Le site ayant été créer en même temps que l'association en 2009, le designe était assez ancien. Nous avons donc décider de repenser le site.
                <a href="http://freville.iiens.net/theatre/">Vous pouvez trouver le projet tel que je l'ai proposer ici.</a>
              </description>
            </li>
            <li>
              <name>Création d'un éditeur WYSWYG en Ext JS</name>
              <description>
                Facilitation du travail designer en créant un éditeur adapter à l'IAB permettant de modifier facilement les paramètres adaptable.
              </description>
            </li>
          </ul>
        </tasks>
      </li>
      <li>
        <info>
          <date>25 juin 2014 - 12 septembre 2014</date>
          <role>Stagiaire</role>
          <entreprise class="nexway">Nexway</entreprise>
        </info>
        <objectif>
          Intégration d'une équipe de développement : développement d'une application de facturation intégrer pour plateforme portable.
        </objectif>

        <tasks>
          <ul>
            <li>
              <name>Création d'un set de test avec karma/jasmine</name>
              <description>
                Création de test de correction et de fonctionnalité des factory AngularJS, fonctions de convertion, fonctionnalité utilisateur, fonction de formatage, fonction de test.
              </description>
            </li>
            <li>
              <name>Réécriture et réorganisation des feuilles de style : CSS vers SASS/COMPASS</name>
              <description>
                Optimisation de la maintenance et facilitation de la modification de design de l'application : l'IAB est un outlis de facturation embarquer, ce faisant, il doit pouvoir s'adapter au design de la société l'utilisant tout en conservant une base constante. D'où la transformation des feuilles de style pour un format permettant l'utilisation de variables.
              </description>
            </li>
            <li>
              <name>Création d'un éditeur WYSWYG en Ext JS</name>
              <description>
                Facilitation du travail designer en créant un éditeur adapter à l'IAB permettant de modifier facilement les paramètres adaptable.
              </description>
            </li>
          </ul>
        </tasks>

      </li>
    </ul>
  </summary>
</me>
<?php
  eof();
?>
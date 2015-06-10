<?php
  include_once 'utilities/utilites.php';
  include_once 'utilities/presenter.php';
  sstart(Cactus Espaces Verts);
?>
<!-- Pres terrasse -->
<div id ='terrasse' class='anchor'></div>
<div class='type_box'>
  <h1>Terrasse</h1>
  <div id='t_bois' class='anchor'></div>
  <div class='part_box'>
    <h2>Bois</h2>
    <span>Description produit(?) </span>
    <?php presenter(tb1,tb2,tb3,tb4);?>
  </div>
  <div id='t_pave' class='anchor'></div>
  <div class='part_box'>
    <h2>Pavé</h2>
    <span>Description produit(?) </span>
    <?php presenter(tp1,tp2,tp3,tp4);?>
  </div>
  <div id='t_min' class='anchor'></div>
  <div class='part_box'>
    <h2>Minéral</h2>
    <span>Description produit(?) </span>
    <?php presenter(tm1,tm2,tm3,tm4);?>
  </div>
</div>
<!-- Pres végétal -->
<div id ='vegetal' class='anchor'></div>
<div class='type_box'>
  <h1>Création végétal</h1>
  <div id='v_massif' class='anchor'></div>
  <div class='part_box'>
    <h2>Massif</h2>
    <span>Description produit(?) </span>
    <?php presenter(vm1,vm2,vm3,vm4);?>
  </div>
  <div id='v_gazon' class='anchor'></div>
  <div class='part_box'>
    <h2>Gazon</h2>
    <span>Description produit(?) </span>
    <?php presenter(vg1,vg2,vg3,vg4);?>
  </div>
  <div id='v_plantation' class='anchor'></div>
  <div class='part_box'>
    <h2>Plantation</h2>
    <span>Description produit(?) </span>
    <?php presenter(vp1,vp2,vp3,vp4);?>
  </div>
</div>
<!-- Pres menuiserie paysagère -->
<div id ='menuiserie' class='anchor'></div>
<div class='type_box'>
  <h1>Menuiserie paysagère</h1>
  <div id='m_bois' class='anchor'></div>
  <div class='part_box'>
    <h2>Banc</h2>
    <span>Description produit(?) </span>
    <?php presenter(mb1,mb2,mb3,mb4);?>
  </div>
  <div id='m_bac' class='anchor'></div>
  <div class='part_box'>
    <h2>Bac</h2>
    <span>Description produit(?) </span>
    <?php presenter(mbac1,mbac2,mbac3,mbac4);?>
  </div>
  <div id='m_perg' class='anchor'></div>
  <div class='part_box'>
    <h2>Pergola</h2>
    <span>Description produit(?) </span>
    <?php presenter(mp1,mp2,mp3,mp4);?>
  </div>
  <div id='mc_chat' class='anchor'></div>
  <div class='part_box'>
    <h2>Châtelet</h2>
    <span>Description produit(?) </span>
    <?php presenter(tm1,tm2,tm3,tm4);?>
  </div>
</div>
<!-- Pres menuiserie paysagère -->
<div id ='menuiserie' class='anchor'></div>
<div class='type_box'>
  <h1>Menuiserie paysagère</h1>
  <div id='m_bois' class='anchor'></div>
  <div class='part_box'>
    <h2>Banc</h2>
    <span>Description produit(?) </span>
    <?php presenter(mb1,mb2,mb3,mb4);?>
  </div>
  <div id='m_bac' class='anchor'></div>
  <div class='part_box'>
    <h2>Bac</h2>
    <span>Description produit(?) </span>
    <?php presenter(mbac1,mbac2,mbac3,mbac4);?>
  </div>
  <div id='m_perg' class='anchor'></div>
  <div class='part_box'>
    <h2>Pergola</h2>
    <span>Description produit(?) </span>
    <?php presenter(mp1,mp2,mp3,mp4);?>
  </div>
  <div id='mc_chat' class='anchor'></div>
  <div class='part_box'>
    <h2>Châtelet</h2>
    <span>Description produit(?) </span>
    <?php presenter(tm1,tm2,tm3,tm4);?>
  </div>
</div>
<?php
  eof();
?>
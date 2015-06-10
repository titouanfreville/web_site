<?php
  function presenter( ...names) {
    echo "<presenter>";
    foreach($names as $n) {
      echo (<div class="diap $n"></div>);
    }
    echo "</presenter>";
  }

<?php
/*echo "Nom de l'auteur: "
.$_GET['nom'].": ".$_GET['message'];
$heur = date("H");
$min = date("i");
 echo " $heur h $min m";

 echo date(DATE_RFC2822);*/
 

 ?>

 <span><?php echo $_POST['nom'] ;?></span>
  <p><?php echo $_POST['message'] ;?></p>
<!-- <time><?php echo date(DATE_RFC2822);?></time>
 -->
 <time><?php echo date('\l\e d/m/y \à H\hi');?></time>



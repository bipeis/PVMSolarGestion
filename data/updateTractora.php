<?php

include("config.php");

  $id = $_POST["idTractora"];
  $matr = $_POST["matricula"];
  $marc = $_POST["marca"];
  $model = $_POST["modelo"];
  $cateur = $_POST["catEur"];
  $valorcompra = $_POST["valorCompra"];
  $itv1 = $_POST["Itv1"];
  $itv2 = $_POST["Itv2"];

  $conexion = mysql_connect($servidor,$usuario,$contrasena) or trigger_error(mysql_error(),E_USER_ERROR);
  $bd = mysql_select_db($bbdd,$conexion);


  $sql = "UPDATE Tractoras SET Matricula='$matr', Marca='$marc', Modelo='$model', CatEur='$cateur',
   ValorCompra='$valorcompra', ITV1='$itv1', ITV2='$itv2' WHERE IdTractora=$id";
  $resultado = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");

  $rows = array();
  while($r = mysql_fetch_assoc($resultado)) {
      $rows[] = $r;
  }
  print json_encode($rows);
?>
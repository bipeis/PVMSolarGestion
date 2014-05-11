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

  $sql = "INSERT INTO Tractoras (Matricula, Marca, Modelo, CatEur, ValorCompra, ITV1, ITV2) VALUES ('$matr', '$marc', '$model', '$cateur', '$valorcompra', '$itv1', '$itv2')";

  $resultado = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");

  $key =  mysql_insert_id();

  $sql = "SELECT * FROM Tractoras WHERE IdTractora=$key";
  $resultado = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");

  $rows = array();
  while($r = mysql_fetch_assoc($resultado)) {
      $rows[] = $r;
  }
  print json_encode($rows);
?>
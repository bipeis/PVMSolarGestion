<?php

  ////////////////////////////////////////////
  //BBDD

  $servidor = "localhost";
  $usuario = "root";
  $contrasena = "daw";
  $bbdd = "bdpvm";

  $id = $_POST["id"];

  $conexion = mysql_connect($servidor,$usuario,$contrasena) or trigger_error(mysql_error(),E_USER_ERROR);
  $bd = mysql_select_db($bbdd,$conexion);

  $sql = "SELECT * FROM Tractoras WHERE IdTractora=$id";
  $resultado = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");

  $rows = array();
  while($r = mysql_fetch_assoc($resultado)) {
      $rows[] = $r;
  }
  print json_encode($rows);
?>
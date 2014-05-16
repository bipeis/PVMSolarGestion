<?php

include("config.php");

  $id = $_POST["idTractora"];
  $matr = $_POST["matricula"];
  $ent = $_POST["entidad"];
  $contr = $_POST["contrato"];
  $finicio = $_POST["fechainicio"];
  $ffin = $_POST["fechafin"];
  $cmensual = $_POST["cuotamensual"];
  $cresidual = $_POST["cuotaresidual"];
  $segincluido = $_POST["seguroincluido"];

  $conexion = mysql_connect($servidor,$usuario,$contrasena) or trigger_error(mysql_error(),E_USER_ERROR);
  $bd = mysql_select_db($bbdd,$conexion);


  $sql = "UPDATE Tractoras SET Matricula='$matr', FinanciacionEntidad='$ent', FinanciacionContrato='$contr',
   FinanciacionFechaInicio='$finicio', FinanciacionFechaFin='$ffin', FinanciacionCuotaMensual='$cmensual', FInanciacionCuotaResidual='$cresidual', SeguroIncluido='$segincluido' WHERE IdTractora=$id";
  $resultado = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");

  $rows = array();
  while($r = mysql_fetch_assoc($resultado)) {
      $rows[] = $r;
  }
  print json_encode($rows);
?>
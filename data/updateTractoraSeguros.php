<?php

include("config.php");

  $id = $_POST["idTractora"];
  $aseg = $_POST["aseguradora"];
  $ag= $_POST["agencia"];
  $pol = $_POST["poliza"];
  $fco = $_POST["fcont"];
  $ff = $_POST["ffin"];
  $canu = $_POST["cuotanual"];
  $fpag = $_POST["fpago"];
  $asegt = $_POST["aseguradorat"];
  $agt = $_POST["agenciat"];
  $polt = $_POST["polizat"];
  $fct = $_POST["fcontt"];
  $fft = $_POST["ffint"];
  $canut = $_POST["cuotanualt"];
  $fpagt = $_POST["fpagot"];
  $asisten = $_POST["asist"];
  $cobert = $_POST["cober"];

  $conexion = mysql_connect($servidor,$usuario,$contrasena) or trigger_error(mysql_error(),E_USER_ERROR);
  $bd = mysql_select_db($bbdd,$conexion);


  $sql = "SELECT *
          FROM  CamionesSegurosObligatorios
          WHERE Camion=$id";

  $resultado = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");

  if (mysql_num_rows($resultado)>0)
  {
          $sql = "UPDATE CamionesSegurosObligatorios
          SET   Aseguradora='$aseg',
                Agencia='$ag',
                Poliza ='$pol',
                FechaContratacion='$fco',
                FechaFinalizacion='$ff',
                CuotaAnual='$canu',
                FormaPago='$fpag'
          WHERE Camion=$id";

  }
  else {
          $sql = "INSERT INTO CamionesSegurosObligatorios(Camion,Aseguradora,Agencia,Poliza,FechaContratacion,
                FechaFinalizacion,CuotaAnual,FormaPago)
          VALUES ('$id',
                  '$aseg',
                '$ag',
                '$pol',
                '$fco',
                '$ff',
                '$canu',
                '$fpag')";
  }

  $resultado1 = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");



  $sql = "SELECT *
          FROM  CamionesSegurosTodoRiesgo
          WHERE Camion=$id";

  $resultado2 = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");

  if (mysql_num_rows($resultado2)>0)
  {
          $sql = "UPDATE CamionesSegurosTodoRiesgo
          SET   Aseguradora='$asegt',
                Agencia='$agt',
                Poliza ='$polt',
                FechaContratacion='$fct',
                FechaFinalizacion='$fft',
                CuotaAnual='$canut',
                FormaPago='$fpagt',
                Asistencia='$asisten',
                Coberturas='$cobert'
          WHERE Camion=$id";

  }
  else {
          $sql = "INSERT INTO CamionesSegurosTodoRiesgo(Camion,Aseguradora,Agencia,Poliza,FechaContratacion,
                FechaFinalizacion,CuotaAnual,FormaPago,Asistencia,Coberturas)
          VALUES ('$id',
                  '$aseg',
                '$ag',
                '$pol',
                '$fco',
                '$ff',
                '$canu',
                '$fpag',
                '$asisten',
                '$cobert')";
  }

  $resultado2 = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");
  $rows = array();
  while($r = mysql_fetch_assoc($resultado)) {
      $rows[] = $r;
  }
  print json_encode($rows);
?>
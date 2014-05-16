<?php

include("config.php");

  $id = $_POST["idTractora"];
  $matr = $_POST["matricula"];
  $cont = $_POST["incluidoencontrato"];
  $motor = $_POST["coberaceitemotor"];
  $cambios = $_POST["coberaceitecambios"];
  $filtro = $_POST["filtro"];
  $coberotros = $_POST["coberotros"];
  $condicionescontrato = $_POST["condicionescontrato"];

  $conexion = mysql_connect($servidor,$usuario,$contrasena) or trigger_error(mysql_error(),E_USER_ERROR);
  $bd = mysql_select_db($bbdd,$conexion);


  $sql = "UPDATE Tractoras SET Matricula='$matr', MantIncluidoContrato='$cont', MantCoberturaAceiteMotor='$motor',
   MantCobertAceiteCambios='$cambios', MantCoberturaFiltros='$filtro', MantCoberturaOtros='$coberotros',
   MantCondicionesContrato='$condicionescontrato'
    WHERE IdTractora=$id";
  $resultado = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");

  $rows = array();
  while($r = mysql_fetch_assoc($resultado)) {
      $rows[] = $r;
  }
  print json_encode($rows);
?>
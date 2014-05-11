<?php


  $servidor = "tutextilhogar.com";
  $usuario = "tutextil_pvm";
  $contrasena = "bil3600p";
  $bbdd = "tutextil_pvm";

  $conexion = mysql_connect($servidor,$usuario,$contrasena) or trigger_error(mysql_error(),E_USER_ERROR);
  $bd = mysql_select_db($bbdd,$conexion);


  $user = $_POST["usuarioLogin"];
  $password = $_POST["passwordLogin"];

    $sql = "SELECT * FROM usuarios WHERE usuario = '$user' and password = '$password'";
    //$rec = mysql_query($sql);
    $rec = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");
    //$count = 0;

    //$result = 'vacio';
    //while($row = mysql_fetch_object($rec))
    //{
      //  $count++;
       // $result = $row;
    //}
  //print json_encode($result);

  $rows = array();
  while($r = mysql_fetch_assoc($rec)) {
      $rows[] = $r;
  }
  print json_encode($rows);

?>
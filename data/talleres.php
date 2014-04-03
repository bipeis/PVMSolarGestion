  <?php


        ////////////////////////////////////////////
        //BBDD
            $servidor = "localhost";
            $usuario = "root";
            $contrasena = "daw";
            $bbdd = "bdpvm";

            //$conexion = mysql_connect($servidor,$usuario,$contrasena) or trigger_error(mysql_error(),E_USER_ERROR);
            //mysql_select_db($bbdd,$conexion);

            $sql = "SELECT * FROM Tractoras";
            $resultado = mysql_query($sql,$conexion) or die(mysql_error()."<br>".$sql."<hr>");


        ////////////////////////////////////////////////

    $num_rows = $sql->num_rows();
    $val = $sql->row_array();

    $output = array();
foreach ($sql->result() as $row) {
  $output[] = $row->id . ' ' . $row->name;
}
/*echo json_encode($output);

foreach($provincias as $codigo => $nombre) {
  $elementos_json[] = "\"$codigo\": \"$nombre\"";
}
*/
echo "{".implode(",", $output)."}"

?>
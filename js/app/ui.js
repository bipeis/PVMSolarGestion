var APP = APP||{};
APP.UI = (function(lng, undefined) {
    "use strict";

    var createElement = function(descripcion){
          var $li = $('<li/>');

            $li.append(descripcion);

            return $li;

    };

    var borrarPantalla = function(mapa){
        var $divListado = $('#listado');
        $divListado.remove();
        var $divGeneral = $('#divGeneral');
        $divGeneral.remove();
        var $formFichaTractora = $('#formFichaTractora');
        $formFichaTractora.remove();
        var $divBusqueda = $('#formBusqueda');
        $divBusqueda.remove();
        var $divTabla = $('#divTabla');
        $divTabla.remove();

    };

    var mostrarTractoras = function(tractoras){
        console.log("Pintar tractoras");
        borrarPantalla();

        //Formulario de búsqueda de un camión del listado
        var formBuscarTractora = $("<div id='formBusqueda'><form id='formBuscarTractora' class='navbar-form navbar-left' " +
            "role='search'>  <div class='form-group'>  <input type='text' class='form-control' " +
            "placeholder='Matricula'> </div>" + " <button type='submit' class='btn btn-default'>Buscar</button></form></div>");
        formBuscarTractora.insertAfter("#listaDatos");

         //Listado de tractoras
         var stringTabla = "<div id='divTabla'><h1>Tractoras</h1> <table id='listadoTractoras' class='table table-striped'>" +
            "<thead> <tr> <th>ID</th> <th>Matricula</th> <th>Marca</th> <th>Actions</th> </tr> </thead>" +
            "<tbody>";
         for (var j = 0; j<=tractoras.length - 1; j++) {
             stringTabla+= "<tr> <td>"+ tractoras[j].IdTractora +
              "</td> <td>" + tractoras[j].Matricula + "</td> " +
              "<td>" + tractoras[j].Marca + "</td> <td>" +
               "</td> <td> <button data-id=" + tractoras[j].IdTractora + " " +
               "class='btn btn-mini'>Ficha</button>  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
         }
         stringTabla+="</tbody> </table></div>";
        var divTablaTractoras = $(stringTabla);
        divTablaTractoras.insertAfter($("#formBusqueda"));

    };

    var mostrarRemolques = function(remolques){
        console.log("Pintar remolques");
        console.log(remolques);
        borrarPantalla();

        //Formulario de búsqueda de un remolque del listado
        var formBuscarRemolque = $("<div id='formBusqueda'><form id='formBuscarRemolque' class='navbar-form navbar-left' " +
            "role='search'>  <div class='form-group'>  <input type='text' class='form-control' " +
            "placeholder='Matricula'> </div>" + " <button type='submit' class='btn btn-default'>Buscar</button></form></div>");
        formBuscarRemolque.insertAfter("#listaDatos");

         //Listado de remolques
         var stringTabla = "<div id='divTabla'><h1>Remolques</h1> <table id='listadoRemolques' class='table table-striped'>" +
            "<thead> <tr> <th>ID</th> <th>Matricula</th> <th>Seguro</th> <th>Actions</th> </tr> </thead>" +
            "<tbody>";
         for (var j = 0; j<=remolques.length - 1; j++) {
             stringTabla+= "<tr> <td>"+ remolques[j].IdRemolque +
              "</td> <td>" + remolques[j].Matricula + "</td> <td>" +
               "</td> <td> <button  data-id=" + remolques[j].IdRemolque + " " +
               "class='btn btn-mini'>Ficha</button>  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
         }
         stringTabla+="</tbody> </table></div>";
        var divTabla = $(stringTabla);
        divTabla.insertAfter($("#formBusqueda"));

    };

    var mostrarTalleres = function(talleres){
        console.log("Pintar talleres");
        borrarPantalla();

        //Formulario de búsqueda de un remolque del listado
        var formBuscarRemolque = $("<div id='formBusqueda'><form id='formBuscarRemolque' class='navbar-form navbar-left' " +
            "role='search'>  <div class='form-group'>  <input type='text' class='form-control' " +
            "placeholder='Matricula'> </div>" + " <button type='submit' class='btn btn-default'>Buscar</button></form></div>");
        formBuscarRemolque.insertAfter("#listaDatos");

         //Listado de talleres
         var stringTabla = "<div id='divTabla'><h1>Talleres</h1> <table id='listadoTalleres' class='table table-striped'>" +
            "<thead> <tr> <th>ID</th> <th>Nombre</th> <th>Direccion</th> <th>Actions</th> </tr> </thead>" +
            "<tbody>";
         for (var j = 0; j<=talleres.length - 1; j++) {
             stringTabla+= "<tr> <td>"+ talleres[j].IdTaller +
              "</td> <td>" + talleres[j].Nombre + "</td> <td>" +
               "</td> <td> <button data-id=" + talleres[j].IdTaller + " " +
               "class='btn btn-mini'>Ficha</button>  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
         }
         stringTabla+="</tbody> </table></div>";
        var divTabla = $(stringTabla);
        divTabla.insertAfter($("#formBusqueda"));

    };

    var mostrarAseguradoras = function(aseguradoras){
        borrarPantalla();

        //Formulario de búsqueda de una aseguradora del listado
        var formBuscarAseguradora = $("<div id='formBusqueda'><form id='formBuscarAseguradora' class='navbar-form navbar-left' " +
            "role='search'>  <div class='form-group'>  <input type='text' class='form-control' " +
            "placeholder='Nombre'> </div>" + " <button type='submit' class='btn btn-default'>Buscar</button></form></div>");
        formBuscarAseguradora.insertAfter("#listaDatos");

         //Listado de aseguradoras
         var stringTabla = "<div id='divTabla'><h1>Aseguradoras</h1> <table id='listadoAseguradoras' class='table table-striped'>" +
            "<thead> <tr> <th>ID</th> <th>Nombre</th> <th>Direccion</th> <th>Actions</th> </tr> </thead>" +
            "<tbody>";
         for (var j = 0; j<=aseguradoras.length - 1; j++) {
             stringTabla+= "<tr> <td>"+ aseguradoras[j].IdAseguradora +
              "</td> <td>" + aseguradoras[j].Nombre + "</td> <td>" +
               "</td> <td> <button data-id=" + aseguradoras[j].IdAseguradora + " " +
               "class='btn btn-mini'>Ficha</button>  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
         }
         stringTabla+="</tbody> </table></div>";
        var divTabla = $(stringTabla);
        divTabla.insertAfter($("#formBusqueda"));

    };

    var mostrarTractoraFichaDatosGenerales = function(tractora){
        console.log("Pintar tractora");
        console.log(tractora);

        borrarPantalla();

        //submenu tractora datos generales
        var stringMenu ="<div><ul id='menutractora' class='nav nav-tabs'> <li  class='active'>"+
        "<a data-id='0' href='#''>Datos Generales</a></li> <li ><a data-id='1' href='#'>Financiación</a></li>  <li><a   data-id='2' href='#'>Mantenimientos</a></li></ul></div>";
        var divMenu = $(stringMenu);
        divMenu.insertAfter($("#listaDatos"));

         //Ficha de tractora datos generales
         var stringForm = "<div id='divGeneral'><form id='formFichaTractora' class='form'>"+
                            "<div class='form-group'>   </div>";

            stringForm+="<label class='label label-default' for='idTractora'>IdTractora:</label>";
            stringForm+= "<input id='idTractora' type='text' class='form-control' placeholder='idTractora' value=" + tractora[0].IdTractora + " > " ;
            stringForm+="<label class='label label-default' for='matricula'>Matrícula:</label>";
            stringForm+= "<input id='matricula' type='text' class='form-control' placeholder='matricula' value=" + tractora[0].Matricula + " > " ;
            stringForm+="<label class='label label-default' for='marca'>Marca:</label>";
            stringForm+= "<input id='marca' type='text' class='form-control' placeholder='marca' value=" + tractora[0].Marca + " > " ;
            stringForm+="<label class='label label-default' for='modelo'>Modelo:</label>";
            stringForm+= "<input id='modelo' type='text' class='form-control' placeholder='modelo' value=" + tractora[0].Modelo + " > " ;
            stringForm+="<label class='label label-default' for='cateur'>Cat. Eur:</label>";
            stringForm+= "<input id='cateur' type='text' class='form-control' placeholder='cateur' value=" + tractora[0].CatEur + " > " ;
            stringForm+="<label class='label label-default' for='valorcompra'>Valor de compra:</label>";
            stringForm+= "<input id='valorcompra' type='text' class='form-control' placeholder='valorcompra' value=" + tractora[0].ValorCompra + " > " ;
            stringForm+="<label class='label label-default' for='itv1'>ITV - fecha 1ª revisión:</label>";
            stringForm+= "<input id='itv1' type='text' class='form-control' placeholder='itv1' value=" + tractora[0].itv1 + " > " ;
            stringForm+="<label class='label label-default' for='itv2'>ITV - fecha 2ª revisión:</label>";
            stringForm+= "<input id='itv2' type='text' class='form-control' placeholder='itv2' value=" + tractora[0].itv2 + " > " ;


            stringForm+="<button type='submit' class='btn btn-default'>Editar</button>";
            stringForm+="<button id='modificarTractoraBtn' class='btn btn-default'>Modificar datos</button>";
            stringForm+="<button id='mantenimientosTractoraBtn' data-id=" + tractora[0].IdTractora + " " +
            "class='btn btn-default'>Mantenimientos</button></form></div>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#menutractora"));
    };

    var mostrarTractoraFichaFinanciacion = function(tractora){
        console.log("Pintar tractora Financiación");
        console.log(tractora);

        borrarPantalla();

        //submenu tractora datos generales
        var stringMenu ="<div><ul id='menutractora' class='nav nav-tabs'> <li data-id='0'>"+
        "<a href='#''>Datos Generales</a></li> <li  data-id='1' class='active'><a href='#'>Financiación</a></li>  <li  data-id='2'><a href='#'>Mantenimientos</a></li></ul></div>";
        var divMenu = $(stringMenu);
        divMenu.insertAfter($("#listaDatos"));

         //Ficha de tractora datos generales
         var stringForm = "<div id='divGeneral'><form id='formFichaTractora' class='form'>"+
                            "<div class='form-group'>   </div>";

            stringForm+="<label class='label label-default' for='idTractora'>IdTractora:</label>";
            stringForm+= "<input id='idTractora' type='text' class='form-control' placeholder='idTractora' value=" + tractora[0].IdTractora + " > " ;
            stringForm+="<label class='label label-default' for='matricula'>Matrícula:</label>";
            stringForm+= "<input id='matricula' type='text' class='form-control' placeholder='matricula' value=" + tractora[0].Matricula + " > " ;
            stringForm+="<label class='label label-default' for='marca'>Marca:</label>";
            stringForm+= "<input id='marca' type='text' class='form-control' placeholder='marca' value=" + tractora[0].Marca + " > " ;
            stringForm+="<label class='label label-default' for='modelo'>Modelo:</label>";
            stringForm+= "<input id='modelo' type='text' class='form-control' placeholder='modelo' value=" + tractora[0].Modelo + " > " ;
            stringForm+="<label class='label label-default' for='cateur'>Cat. Eur:</label>";
            stringForm+= "<input id='cateur' type='text' class='form-control' placeholder='cateur' value=" + tractora[0].CatEur + " > " ;
            stringForm+="<label class='label label-default' for='valorcompra'>Valor de compra:</label>";
            stringForm+= "<input id='valorcompra' type='text' class='form-control' placeholder='valorcompra' value=" + tractora[0].ValorCompra + " > " ;
            stringForm+="<label class='label label-default' for='itv1'>ITV - fecha 1ª revisión:</label>";
            stringForm+= "<input id='itv1' type='text' class='form-control' placeholder='itv1' value=" + tractora[0].itv1 + " > " ;
            stringForm+="<label class='label label-default' for='itv2'>ITV - fecha 2ª revisión:</label>";
            stringForm+= "<input id='itv2' type='text' class='form-control' placeholder='itv2' value=" + tractora[0].itv2 + " > " ;


            stringForm+="<button type='submit' class='btn btn-default'>Editar</button>";
            stringForm+="<button id='modificarTractoraBtn' class='btn btn-default'>Modificar datos</button>";
            stringForm+="<button id='mantenimientosTractoraBtn' data-id=" + tractora[0].IdTractora + " " +
            "class='btn btn-default'>Mantenimientos</button></form></div>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#menutractora"));
    };

    var mostrarRemolqueFicha = function(remolque){
        console.log("Pintar remolque");
        console.log(remolque);
        borrarPantalla();

         //Ficha de remolque
         var stringForm = "<div id='divGeneral'><form id='formFichaTractora' class='form'>"+
                            "<div class='form-group'>   </div>";

            stringForm+="<label class='label label-default' for='IdRemolque'>IdRemolque:</label>";
            stringForm+= "<input id='IdRemolque' type='text' class='form-control' placeholder='IdRemolque' value=" + remolque[0].IdRemolque + " > " ;
            stringForm+="<label class='label label-default' for='matricula'>Matricula:</label>";
            stringForm+= "<input id='matricula' type='text' class='form-control' placeholder='Matricula' value=" + remolque[0].Matricula + " > " ;
            stringForm+="<label class='label label-default' for='seguro'>Seguro:</label>";
            stringForm+= "<input id='seguro' type='text' class='form-control' placeholder='Seguro' value=" + remolque[0].seguro + " > " ;
            stringForm+="<label class='label label-default' for='aseguradora'>Aseguradora:</label>";
            stringForm+= "<input id='aseguradora' type='text' class='form-control' placeholder='Aseguradora' value=" + remolque[0].aseguradora + " > " ;


            stringForm+="<button type='submit' class='btn btn-default'>Editar</button></form></div>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#listaDatos"));
    };

    var mostrarTallerFicha = function(taller){
        console.log("Pintar taller");
        borrarPantalla();

         //Ficha de taller
         var stringForm = "<div id='divGeneral'><form id='formFichaTaller' class='form'>"+
                            "<div class='form-group'>   </div>";

            stringForm+="<label class='label label-default' for='idTaller'>idTaller:</label>";
            stringForm+= "<input id='idTaller' type='text' class='form-control' placeholder='idTaller' value=" + taller[0].IdTaller + " > " ;
            stringForm+="<label class='label label-default' for='nombre'>Nombre:</label>";
            stringForm+= "<input id='nombre' type='text' class='form-control' placeholder='Nombre' value=" + taller[0].Nombre + " > " ;
            stringForm+="<label class='label label-default' for='direccion'>Direccion:</label>";
            stringForm+= "<input id='direccion' type='text' class='form-control' placeholder='Direccion' value=" + taller[0].direccion + " > " ;
            stringForm+="<label class='label label-default' for='telefono'>Telefono:<label>";
            //stringForm+= "<input id='telefono' type='text' class='form-control' placeholder='telefono' value=" + taller.telefono + " > " ;


            stringForm+="<button type='submit' class='btn btn-default'>Editar</button></form></div>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#listaDatos"));
    };

    var mostrarAseguradoraFicha = function(aseguradora){
        console.log("Pintar aseguradora");
        borrarPantalla();

         //Ficha de taller
         var stringForm = "<div id='divGeneral'><form id='formFichaAseguradora' class='form'>"+
                            "<div class='form-group'>   </div>";

            stringForm+="<label class='label label-default' for='idAseguradora'>idAseguradora:</label>";
            stringForm+= "<input id='idAseguradora' type='text' class='form-control' placeholder='idAseguradora' value=" + aseguradora[0].IdAseguradora + " > " ;
            stringForm+="<label class='label label-default' for='nombre'>Nombre:</label>";
            stringForm+= "<input id='nombre' type='text' class='form-control' placeholder='Nombre' value=" + aseguradora[0].Nombre + " > " ;
            stringForm+="<label class='label label-default' for='direccion'>Direccion:</label>";
            stringForm+= "<input id='direccion' type='text' class='form-control' placeholder='Direccion' value=" + aseguradora[0].direccion + " > " ;
            stringForm+="<label class='label label-default' for='telefono'>Telefono:<label>";
            //stringForm+= "<input id='telefono' type='text' class='form-control' placeholder='telefono' value=" + aseguradora.telefono + " > " ;


            stringForm+="<input type='submit' class=' form-control btn btn-default'>Editar</form></div>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#listaDatos"));
    };


    var mostrarRemolque = function(remolque){
        console.log("Pintar remolque");
        borrarPantalla();

        var divListaRemolque = $("<div id='listado' class='list-group'><a href='#'' class='list-group-item'>Identificador: " + remolque.idRemolque + "</a><a href='#'' id='listado' class='list-group-item'>Matricula: " + remolque.matricula + "</a></div>");
        divListaRemolque.insertAfter($("#listaDatos"));
    };

    var mostrarActivo = function(li){
        var $li = $(li);
        $li.addClass('active').siblings('.active').removeClass('active');
    };


    var mostrarTractoraFichaEditable = function(tractora){
        console.log("Pintar tractora");
        console.log(tractora);

        borrarPantalla();

         //Ficha de tractora
         var stringForm = "<div id='divGeneral'><form id='formFichaTractora' class='form'>"+
                            "<div class='form-group'>   </div>";

            stringForm+="<label class='label label-default' for='idTractora'>IdTractora:</label>";
            stringForm+= "<input id='idTractora' type='text' class='form-control' placeholder='idTractora' value=" + tractora[0].IdTractora + " > " ;
            stringForm+="<label class='label label-default' for='matricula'>matricula:</label>";
            stringForm+= "<input id='matricula' type='text' class='form-control' placeholder='matricula' value=" + tractora[0].Matricula + " > " ;
            stringForm+="<label class='label label-default' for='seguro'>seguro:</label>";
            stringForm+= "<input id='seguro' type='text' class='form-control' placeholder='seguro' value=" + tractora[0].seguro + " > " ;
            stringForm+="<label class='label label-default' for='aseguradora'>aseguradora:</label>";
            stringForm+= "<input id='aseguradora' type='text' class='form-control' placeholder='aseguradora' value=" + tractora[0].aseguradora + " > " ;


            stringForm+="<button type='submit' class='btn btn-default'>Editar</button>";
            stringForm+="<button id='modificarTractoraBtn' class='btn btn-default'>Modificar datos</button>";
            stringForm+="<button id='mantenimientosTractoraBtn' class='btn btn-default'>Mantenimientos</button></form></div>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#listaDatos"));
    };


    var mostrarMantenimientosTractora = function(mantenimientos){
        console.log("Pintar mantenimientos");
        console.log(mantenimientos);
        borrarPantalla();

        //Formulario de búsqueda de un mantenimiento del listado
        var formBuscarMantenimiento = $("<div id='formBusqueda'><form id='formBuscarMantenimiento' class='navbar-form navbar-left' " +
            "role='search'>  <div class='form-group'>  <input type='text' class='form-control' " +
            "placeholder='Matricula'> </div>" + " <button type='submit' class='btn btn-default'>Buscar</button></form></div>");
        formBuscarMantenimiento.insertAfter("#listaDatos");

         //Listado de mantenimientos
         var stringTabla = "<div id='divTabla'><h1>Mantenimientos de Tractora con Id " + mantenimientos[0].IdTractora + "</h1> <table id='listadoMantenimientos' class='table table-striped'>" +
            "<thead> <tr> <th>ID</th> <th>Fecha</th> <th>Tractora</th> <th>Actions</th> </tr> </thead>" +
            "<tbody>";
         for (var j = 0; j<=mantenimientos.length - 1; j++) {
             stringTabla+= "<tr> <td>"+ mantenimientos[j].IdMantenimiento +
              "</td> <td>" + mantenimientos[j].Fecha + "</td> <td>" +
               "</td> <td> <button data-id=" + mantenimientos[j].IdMantenimiento + " " +
               "class='btn btn-mini'>Ficha</button>  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
         }
         stringTabla+="</tbody> </table></div>";
        var divTablaTractoras = $(stringTabla);
        divTablaTractoras.insertAfter($("#formBusqueda"));


    };

    return {
        mostrarTractoras : mostrarTractoras,
        mostrarRemolque : mostrarRemolque,
        mostrarActivo : mostrarActivo,
        mostrarTractoraFichaDatosGenerales : mostrarTractoraFichaDatosGenerales,
        mostrarRemolqueFicha : mostrarRemolqueFicha,
        mostrarTallerFicha : mostrarTallerFicha,
        mostrarAseguradoraFicha : mostrarAseguradoraFicha,
        mostrarRemolques : mostrarRemolques,
        mostrarTalleres : mostrarTalleres,
        mostrarAseguradoras : mostrarAseguradoras,
        mostrarTractoraFichaEditable : mostrarTractoraFichaEditable,
        mostrarMantenimientosTractora : mostrarMantenimientosTractora
    };

})();
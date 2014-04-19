var APP = APP||{};
APP.UI = (function(lng, undefined) {
    'use strict';

    var borrarPantalla = function(){
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
        var $menutractora = $('#menutractora');
        $menutractora.remove();

    };

    var mostrarTractoras = function(tractoras){
        console.log('Pintar tractoras');
        borrarPantalla();

        //Formulario de búsqueda de una tractora del listado
        var formBuscarTractora = $('<section id=formBusqueda>' +
          '<form id=formBuscarTractora class=navbar-form navbar-left role=search>' +
          '<article class=form-group>  <input type=search class=form-control placeholder=Matricula> </article>' +
           ' <button type=submit class=btn btn-default>Buscar</button></form></section>');
        formBuscarTractora.insertAfter('#listaDatos');

         //Listado de tractoras
         var stringTabla = "<section id='divTabla' class='centrado'><h1>Tractoras</h1>" +
         "<table id='listadoTractoras' class='table table-striped'>" +
            "<thead> <tr> <th>ID</th> <th>Matricula</th> <th>Marca</th> <th>Acciones</th> </tr> </thead>" +
            "<tbody>";
         for (var j = 0; j<=tractoras.length - 1; j++) {
             stringTabla+= "<tr> <td>"+ tractoras[j].IdTractora +
              "</td> <td>" + tractoras[j].Matricula + "</td> " +
              "<td>" + tractoras[j].Marca + "</td>" +
              "<td> <button data-id=" + tractoras[j].IdTractora + " class='btn btn-mini'>Ficha</button>" +
              "  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
         }
         stringTabla+="</tbody> </table></section>";
        var divTablaTractoras = $(stringTabla);
        divTablaTractoras.insertAfter($("#formBusqueda"));

    };

    var mostrarRemolques = function(remolques){
        console.log("Pintar remolques");
        console.log(remolques);
        borrarPantalla();

        //Formulario de búsqueda de un remolque del listado
        var formBuscarRemolque = $("<section id='formBusqueda'>" +
          "<form id='formBuscarRemolque' class='navbar-form navbar-left' role='search'>" +
          "  <article class='form-group'>  <input type='text' class='form-control' placeholder='Matricula'> </article>" +
          " <button type='submit' class='btn btn-default'>Buscar</button></form></section>");
        formBuscarRemolque.insertAfter("#listaDatos");

         //Listado de remolques
         var stringTabla = "<section id='divTabla'><h1>Remolques</h1>" +
         " <table id='listadoRemolques' class='table table-striped'>" +
            "<thead> <tr> <th>ID</th> <th>Matricula</th> <th>Seguro</th> <th>Acciones</th> </tr> </thead>" +
            "<tbody>";
         for (var j = 0; j<=remolques.length - 1; j++) {
             stringTabla+= "<tr> <td>"+ remolques[j].IdRemolque +
              "</td> <td>" + remolques[j].Matricula + "</td>" +
              "<td></td>" +
              "<td> <button  data-id=" + remolques[j].IdRemolque + " class='btn btn-mini'>Ficha</button>" +
              " <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
         }
         stringTabla+="</tbody> </table></section>";
        var divTabla = $(stringTabla);
        divTabla.insertAfter($("#formBusqueda"));

    };

    var mostrarTalleres = function(talleres){
        console.log("Pintar talleres");
        console.log(talleres);
        borrarPantalla();

        //Formulario de búsqueda de un taller del listado
        var formBuscarRemolque = $("<section id='formBusqueda'>" +
          "<form id='formBuscarRemolque' class='navbar-form navbar-left' role='search'>" +
          " <article class='form-group'>  <input type='text' class='form-control' placeholder='Matricula'> </article>" +
           " <button type='submit' class='btn btn-default'>Buscar</button></form></section>");
        formBuscarRemolque.insertAfter("#listaDatos");

         //Listado de talleres
         var stringTabla = "<section id='divTabla'><h1>Talleres</h1>" +
         " <table id='listadoTalleres' class='table table-striped'>" +
            "<thead> <tr> <th>ID</th> <th>Nombre</th> <th>Direccion</th> <th>Acciones</th> </tr> </thead>" +
            "<tbody>";
         for (var j = 0; j<=talleres.length - 1; j++) {
             stringTabla+= "<tr> <td>"+ talleres[j].IdTaller +
              "</td> <td>" + talleres[j].Nombre + "</td>"+
              " <td>" + talleres[j].Direccion + "</td>" +
              " <td> <button data-id=" + talleres[j].IdTaller + " class='btn btn-mini'>Ficha</button>" +
              "  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
         }
         stringTabla+="</tbody> </table></section>";
        var divTabla = $(stringTabla);
        divTabla.insertAfter($("#formBusqueda"));

    };

    var mostrarAseguradoras = function(aseguradoras){
        borrarPantalla();

        //Formulario de búsqueda de una aseguradora del listado
        var formBuscarAseguradora = $("<section id='formBusqueda'>" +
          "<form id='formBuscarAseguradora' class='navbar-form navbar-left' role='search'>" +
          "  <article class='form-group'>  <input type='text' class='form-control' placeholder='Nombre'> </article>" +
           " <button type='submit' class='btn btn-default'>Buscar</button></form></section>");
        formBuscarAseguradora.insertAfter("#listaDatos");

         //Listado de aseguradoras
         var stringTabla = "<div id='divTabla'><h1>Aseguradoras</h1>" +
         " <table id='listadoAseguradoras' class='table table-striped'>" +
            "<thead> <tr> <th>ID</th> <th>Nombre</th> <th>Direccion</th> <th>Acciones</th> </tr> </thead>" +
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
        var stringMenu ="<section class='centrado'><ul id='menutractora' class='nav nav-tabs'>" +
        " <li  class='active'> <a data-id='0' data-tractora='" + tractora[0].IdTractora + "' href='#''>Datos Generales</a></li>" +
        " <li> <a data-id='1' data-tractora='" + tractora[0].IdTractora + "' href='#'>Financiación</a></li>" +
        " <li> <a data-id='2' data-tractora='" + tractora[0].IdTractora + "' href='#'>Mantenimientos</a></li>" +
        "</ul></section>";
        var divMenu = $(stringMenu);
        divMenu.insertAfter($("#listaDatos"));

         //Ficha de tractora datos generales
         var stringForm = "<section id='divGeneral'>" +
                              "<form id='formFichaTractora' class='form' action=''>"+
                                "<article class='form-group'>   ";

            stringForm+="<label class='label label-default' for='idTractora'>IdTractora:</label>";
            stringForm+= "<input id='idTractora' type='number' class='form-control' placeholder='idTractora' required value=" + tractora[0].IdTractora + " > " ;
            stringForm+="<label class='label label-default' for='matricula'>Matrícula:</label>";
            stringForm+= "<input id='matricula' type='text' class='form-control' placeholder='matricula' required value=" + tractora[0].Matricula + " > " ;
            stringForm+="<label class='label label-default' for='marca'>Marca:</label>";
            stringForm+= "<input id='marca' type='text' class='form-control' placeholder='marca' list='listamarcas' value=" + tractora[0].Marca + " > " ;
            stringForm+= "<datalist id='listamarcas'><option label='Seat' value='Seat'><option label='Scania' value='Scania'><option label='Mercedes' value='Mercedes'></datalist>";
            stringForm+="<label class='label label-default' for='modelo'>Modelo:</label>";
            stringForm+= "<input id='modelo' type='text' class='form-control' placeholder='modelo' value=" + tractora[0].Modelo + " > " ;
            stringForm+="<label class='label label-default' for='cateur'>Cat. Eur:</label>";
            stringForm+= "<input id='cateur' type='text' class='form-control' placeholder='cateur' value=" + tractora[0].CatEur + " > " ;
            stringForm+="<label class='label label-default' for='valorcompra'>Valor de compra:</label>";
            stringForm+= "<input id='valorcompra' type='text' class='form-control' placeholder='valorcompra' value=" + tractora[0].ValorCompra + " > " ;
            stringForm+="<label class='label label-default' for='itv1'>ITV - fecha 1ª revisión:</label>";
            stringForm+= "<input id='itv1' type='date' class='form-control' placeholder='itv1' value=" + tractora[0].itv1 + " > " ;
            stringForm+="<label class='label label-default' for='itv2'>ITV - fecha 2ª revisión:</label>";
            stringForm+= "<input id='itv2' type='date' class='form-control' placeholder='itv2' value=" + tractora[0].itv2 + " > " ;

            stringForm+="</article>";

            stringForm+="<input type='submit' value='Enviar' class='btn btn-default'>";
            stringForm+="<button id='modificarTractoraBtn' class='btn btn-default'>Modificar datos</button>";
            stringForm+="<button id='mantenimientosTractoraBtn' data-id=" + tractora[0].IdTractora + " " +
            "class='btn btn-default'>Mantenimientos</button></form></section>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#menutractora"));
    };

    var mostrarTractoraFichaFinanciacion = function(tractora){
        console.log("Pintar tractora Financiación");
        console.log(tractora);

        borrarPantalla();

        //submenu tractora datos generales
        var stringMenu ="<section><ul id='menutractora' class='nav nav-tabs'>" +
        " <li> <a data-id='0' data-tractora='" + tractora[0].IdTractora + "' href='#''>Datos Generales</a></li>" +
        " <li class='active'><a data-id='1' data-tractora='" + tractora[0].IdTractora + "' href='#'>Financiación</a></li>" +
        " <li><a data-id='2' data-tractora='" + tractora[0].IdTractora + "' href='#'>Mantenimientos</a></li></ul></section>";
        var divMenu = $(stringMenu);
        divMenu.insertAfter($("#listaDatos"));

         //Ficha de tractora datos generales
         var stringForm = "<section id='divGeneral'>" +
                            "<form id='formFichaTractora' class='form'>"+
                              "<article class='form-group'>";

            stringForm+="<label class='label label-default' for='idTractora'>IdTractora:</label>";
            stringForm+= "<input id='idTractora' type='text' class='form-control' placeholder='idTractora' value=" + tractora[0].IdTractora + " > " ;
            stringForm+="<label class='label label-default' for='matricula'>Matrícula:</label>";
            stringForm+= "<input id='matricula' type='text' class='form-control' placeholder='matricula' value=" + tractora[0].Matricula + " > " ;
            stringForm+="<label class='label label-default' for='entidad'>Entidad:</label>";
            stringForm+= "<input id='entidad' type='text' class='form-control' placeholder='entidad' value=" + tractora[0].FinanciacionEntidad + " > " ;
            stringForm+="<label class='label label-default' for='contrato'>Contrato:</label>";
            stringForm+= "<input id='contrato' type='text' class='form-control' placeholder='contrato' value=" + tractora[0].FinanciacionContrato + " > " ;
            stringForm+="<label class='label label-default' for='fechainicio'>Fecha Inicio Contrato:</label>";
            stringForm+= "<input id='fechainicio' type='date' class='form-control' placeholder='fechainicio' value=" + tractora[0].FinanciacionFechaInicio + " > " ;
            stringForm+="<label class='label label-default' for='fechafin'>Fecha Fin:</label>";
            stringForm+= "<input id='fechafin' type='date' class='form-control' placeholder='fechafin' value=" + tractora[0].FinanciacionFechaFin + " > " ;
            stringForm+="<label class='label label-default' for='cuotamensual'>Cuota mensual:</label>";
            stringForm+= "<input id='cuotamensual' type='text' class='form-control' placeholder='cuotamensual' value=" + tractora[0].FinanciacionCuotaMensual + " > " ;
            stringForm+="<label class='label label-default' for='cuotaresidual'>Cuota residual:</label>";
            stringForm+= "<input id='cuotaresidual' type='text' class='form-control' placeholder='cuotaresidual' value=" + tractora[0].FinanciacionCutotaResidual + " > " ;

            stringForm+="</article>";

            stringForm+="<button type='submit' class='btn btn-default'>Editar</button>";
            stringForm+="<button id='modificarTractoraBtn' class='btn btn-default'>Modificar datos</button>";
            stringForm+="<button id='mantenimientosTractoraBtn' data-id=" + tractora[0].IdTractora + " " +
            "class='btn btn-default'>Mantenimientos</button></form></section>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#menutractora"));
    };

    var mostrarRemolqueFicha = function(remolque){
        console.log("Pintar remolque");
        console.log(remolque);
        borrarPantalla();

         //Ficha de remolque
         var stringForm = "<section id='divGeneral'>" +
                          "<form id='formFichaTractora' class='form'>"+
                            "<article class='form-group'>";

            stringForm+="<label class='label label-default' for='IdRemolque'>IdRemolque:</label>";
            stringForm+= "<input id='IdRemolque' type='text' class='form-control' placeholder='IdRemolque' value=" + remolque[0].IdRemolque + " > " ;
            stringForm+="<label class='label label-default' for='matricula'>Matricula:</label>";
            stringForm+= "<input id='matricula' type='text' class='form-control' placeholder='Matricula' value=" + remolque[0].Matricula + " > " ;
            stringForm+="<label class='label label-default' for='seguro'>Seguro:</label>";
            stringForm+= "<input id='seguro' type='text' class='form-control' placeholder='Seguro' value=" + remolque[0].seguro + " > " ;
            stringForm+="<label class='label label-default' for='aseguradora'>Aseguradora:</label>";
            stringForm+= "<input id='aseguradora' type='text' class='form-control' placeholder='Aseguradora' value=" + remolque[0].aseguradora + " > " ;

            stringForm+="</article>";

            stringForm+="<button type='submit' class='btn btn-default'>Editar</button></form></section>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#listaDatos"));
    };

    var mostrarTallerFicha = function(taller){
        console.log("Pintar taller");
        borrarPantalla();

         //Ficha de taller
         var stringForm = "<section id='divGeneral'>" +
                            "<form id='formFichaTaller' class='form'>"+
                            "<article class='form-group'>";

            stringForm+="<label class='label label-default' for='idTaller'>idTaller:</label>";
            stringForm+= "<input id='idTaller' type='text' class='form-control' placeholder='idTaller' value=" + taller[0].IdTaller + " > " ;
            stringForm+="<label class='label label-default' for='nombre'>Nombre:</label>";
            stringForm+= "<input id='nombre' type='text' class='form-control' placeholder='Nombre' value=" + taller[0].Nombre + " > " ;
            stringForm+="<label class='label label-default' for='direccion'>Direccion:</label>";
            stringForm+= "<input id='direccion' type='text' class='form-control' placeholder='Direccion' value=" + taller[0].Direccion + " > " ;
            stringForm+="<label class='label label-default' for='telefono'>Telefono:</label>";
            stringForm+= "<input id='telefono' type='tel' class='form-control' placeholder='telefono' value=" + taller.telefono + " > " ;

            stringForm+="</article>";

            stringForm+="<button type='submit' class='btn btn-default'>Editar</button></form></section>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#listaDatos"));

        //mapa
        var mapa = $(" <div id='map-canvas' style='width: 320px; height: 480px;'></div>" +
                      "<div>" +
                        "<input id='address' type='textbox' value='" + taller[0].Direccion + "'>" +
                        "<input type='button' value='Encode' onclick='APP.Map.codeAddress()'>" +
                        "</div>");
        mapa.insertAfter("#divGeneral");

        APP.Map.initialize();

    };

    var mostrarAseguradoraFicha = function(aseguradora){
        console.log("Pintar aseguradora");
        borrarPantalla();

         //Ficha de taller
         var stringForm = "<section id='divGeneral'>" +
                            "<form id='formFichaAseguradora' class='form'>"+
                            "<article class='form-group'>";

            stringForm+="<label class='label label-default' for='idAseguradora'>idAseguradora:</label>";
            stringForm+= "<input id='idAseguradora' type='text' class='form-control' placeholder='idAseguradora' value=" + aseguradora[0].IdAseguradora + " > " ;
            stringForm+="<label class='label label-default' for='nombre'>Nombre:</label>";
            stringForm+= "<input id='nombre' type='text' class='form-control' placeholder='Nombre' value=" + aseguradora[0].Nombre + " > " ;
            stringForm+="<label class='label label-default' for='direccion'>Direccion:</label>";
            stringForm+= "<input id='direccion' type='text' class='form-control' placeholder='Direccion' value=" + aseguradora[0].direccion + " > " ;
            stringForm+="<label class='label label-default' for='telefono'>Telefono:<label>";
            stringForm+= "<input id='telefono' type='tel' class='form-control' placeholder='telefono' value=" + aseguradora.telefono + " > " ;

            stringForm+="</article>";

            stringForm+="<input type='submit' class=' form-control btn btn-default'>Editar</form></section>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#listaDatos"));
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
         var stringForm = "<section id='divGeneral'>" +
                            "<form id='formFichaTractora' class='form'>"+
                            "<article class='form-group'>";

            stringForm+="<label class='label label-default' for='idTractora'>IdTractora:</label>";
            stringForm+= "<input id='idTractora' type='text' class='form-control' placeholder='idTractora' value=" + tractora[0].IdTractora + " > " ;
            stringForm+="<label class='label label-default' for='matricula'>matricula:</label>";
            stringForm+= "<input id='matricula' type='text' class='form-control' placeholder='matricula' value=" + tractora[0].Matricula + " > " ;
            stringForm+="<label class='label label-default' for='seguro'>seguro:</label>";
            stringForm+= "<input id='seguro' type='text' class='form-control' placeholder='seguro' value=" + tractora[0].seguro + " > " ;
            stringForm+="<label class='label label-default' for='aseguradora'>aseguradora:</label>";
            stringForm+= "<input id='aseguradora' type='text' class='form-control' placeholder='aseguradora' value=" + tractora[0].aseguradora + " > " ;

            stringForm+="</article>";

            stringForm+="<button type='submit' class='btn btn-default'>Editar</button>";
            stringForm+="<button id='modificarTractoraBtn' class='btn btn-default'>Modificar datos</button>";
            stringForm+="<button id='mantenimientosTractoraBtn' class='btn btn-default'>Mantenimientos</button></form></section>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#listaDatos"));
    };


    var mostrarMantenimientosTractora = function(mantenimientos){
        console.log("Pintar mantenimientos");
        console.log(mantenimientos);
        borrarPantalla();

        //submenu tractora
        var stringMenu ="<section><ul id='menutractora' class='nav nav-tabs'>" +
        " <li> <a data-id='0' data-tractora='" + mantenimientos[0].IdTractora + "' href='#''>Datos Generales</a></li>" +
        " <li><a data-id='1' data-tractora='" + mantenimientos[0].IdTractora + "' href='#'>Financiación</a></li>" +
        " <li  class='active'><a data-id='2' data-tractora='" + mantenimientos[0].IdTractora + "' href='#'>Mantenimientos</a></li></ul></section>";
        var divMenu = $(stringMenu);
        divMenu.insertAfter($("#listaDatos"));

        //Formulario de búsqueda de un mantenimiento del listado
        var formBuscarMantenimiento = $("<section id='formBusqueda'>" +
              "<form id='formBuscarMantenimiento' class='navbar-form navbar-left' role='search'>" +
              " <article class='form-group'><input type='text' class='form-control' placeholder='Mantenimiento'> </article>" +
               " <button type='submit' class='btn btn-default'>Buscar</button></form></section>");
        formBuscarMantenimiento.insertAfter("#menutractora");

         //Listado de mantenimientos
         var stringTabla = "<section id='divTabla'>" +
         "<h1>Mantenimientos de Tractora con Id " + mantenimientos[0].IdTractora + "</h1>" +
         " <table id='listadoMantenimientos' class='table table-striped'>" +
            "<thead> <tr> <th>ID</th> <th>Fecha</th> <th>Tractora</th> <th>Acciones</th> </tr> </thead>" +
            "<tbody>";
         for (var j = 0; j<=mantenimientos.length - 1; j++) {
             stringTabla+= "<tr> <td>"+ mantenimientos[j].IdMantenimiento +
              "</td> <td>" + mantenimientos[j].Fecha + "</td>" +
              "<td>" + mantenimientos[j].IdTractora + "</td>" +
              " <td> <button data-id=" + mantenimientos[j].IdMantenimiento + "class='btn btn-mini'>Ficha</button>" +
              "  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
         }
         stringTabla+="</tbody> </table></section>";
        var divTablaTractoras = $(stringTabla);
        divTablaTractoras.insertAfter($("#formBusqueda"));


    };

    return {
        mostrarTractoras : mostrarTractoras,
        mostrarActivo : mostrarActivo,
        mostrarTractoraFichaDatosGenerales : mostrarTractoraFichaDatosGenerales,
        mostrarTractoraFichaFinanciacion : mostrarTractoraFichaFinanciacion,
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
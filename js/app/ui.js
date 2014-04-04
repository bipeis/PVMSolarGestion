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
            "<thead> <tr> <th>ID</th> <th>Matricula</th> <th>Seguro</th> <th>Actions</th> </tr> </thead>" +
            "<tbody>";
         for (var j = 0; j<=tractoras.length - 1; j++) {
             stringTabla+= "<tr> <td>"+ tractoras[j].IdTractora +
              "</td> <td>" + tractoras[j].Matricula + "</td> <td>" +
               "</td> <td> <button data-id=" + tractoras[j].IdTractora + " " +
               "class='btn btn-mini'>Ficha</button>  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
         }
         stringTabla+="</tbody> </table></div>";
        var divTablaTractoras = $(stringTabla);
        divTablaTractoras.insertAfter($("#formBusqueda"));


    };

    var mostrarRemolques = function(remolques){
        console.log("Pintar remolques");
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
               "</td> <td> <button class='btn btn-mini'>Ficha</button>  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
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
               "</td> <td> <button class='btn btn-mini'>Ficha</button>  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
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
               "</td> <td> <button class='btn btn-mini'>Ficha</button>  <button class='btn btn-mini btn-danger'>Borrar</button></td></tr> ";
         }
         stringTabla+="</tbody> </table></div>";
        var divTabla = $(stringTabla);
        divTabla.insertAfter($("#formBusqueda"));

    };

    var mostrarTractoraFicha = function(tractora){
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


            stringForm+="<button type='submit' class='btn btn-default'>Submit</button></form></div>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#listaDatos"));
    };

    var mostrarRemolqueFicha = function(remolque){
        console.log("Pintar remolque");
        borrarPantalla();

         //Ficha de remolque
         var stringForm = "<div id='divGeneral'><form id='formFichaTractora' class='form'>"+
                            "<div class='form-group'>   </div>";

            stringForm+="<label class='label label-default' for='idTractora'>IdRemolque:</label>";
            stringForm+= "<input id='idTractora' type='text' class='form-control' placeholder='IdRemolque' value=" + remolque.idRemolque + " > " ;
            stringForm+="<label class='label label-default' for='matricula'>Matricula:</label>";
            stringForm+= "<input id='matricula' type='text' class='form-control' placeholder='Matricula' value=" + remolque.matricula + " > " ;
            stringForm+="<label class='label label-default' for='seguro'>Seguro:</label>";
            stringForm+= "<input id='seguro' type='text' class='form-control' placeholder='Seguro' value=" + remolque.seguro + " > " ;
            stringForm+="<label class='label label-default' for='aseguradora'>Aseguradora:</label>";
            stringForm+= "<input id='aseguradora' type='text' class='form-control' placeholder='Aseguradora' value=" + remolque.aseguradora + " > " ;


            stringForm+="<button type='submit' class='btn btn-default'>Submit</button></form></div>";
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
            stringForm+= "<input id='idTaller' type='text' class='form-control' placeholder='idTaller' value=" + taller.idTaller + " > " ;
            stringForm+="<label class='label label-default' for='nombre'>Nombre:</label>";
            stringForm+= "<input id='nombre' type='text' class='form-control' placeholder='Nombre' value=" + taller.nombre + " > " ;
            stringForm+="<label class='label label-default' for='direccion'>Direccion:</label>";
            stringForm+= "<input id='direccion' type='text' class='form-control' placeholder='Direccion' value=" + taller.direccion + " > " ;
            stringForm+="<label class='label label-default' for='telefono'>Telefono:<label>";
            //stringForm+= "<input id='telefono' type='text' class='form-control' placeholder='telefono' value=" + taller.telefono + " > " ;


            stringForm+="<button type='submit' class='btn btn-default'>Submit</button></form></div>";
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

    return {
        mostrarTractoras : mostrarTractoras,
        mostrarRemolque : mostrarRemolque,
        mostrarActivo : mostrarActivo,
        mostrarTractoraFicha : mostrarTractoraFicha,
        mostrarRemolqueFicha : mostrarRemolqueFicha,
        mostrarTallerFicha : mostrarTallerFicha,
        mostrarRemolques : mostrarRemolques,
        mostrarTalleres : mostrarTalleres,
        mostrarAseguradoras : mostrarAseguradoras
    };

})();
var APP = APP||{};
APP.UI = (function(lng, undefined) {
    "use strict";

    var createElement = function(descripcion){
          var $li = $('<li/>');

            $li.append(descripcion);

            return $li;

    };

    var mostrarTractoras = function(tractoras){
        console.log("Pintar tractoras");
        borrarPantalla(0);

        //Formulario de búsqueda de un camión del listado
        var formBuscarTractora = $("<form id='formBuscarTractora' class='navbar-form navbar-left' " +
            "role='search'>  <div class='form-group'>  <input type='text' class='form-control' " +
            "placeholder='Matricula'> </div>" + " <button type='submit' class='btn btn-default'>Buscar</button></form>");
        formBuscarTractora.insertAfter("#listaDatos");

         //Listado de tractoras
         var stringListado = "<ul id='listado' class='list-group'>";
         for (var i = tractoras.length - 1; i >= 0; i--) {
             stringListado+= "<li id='listadoTractoras' class='list-group-item'>Identificador: " + tractoras[i].idTractora + "     Matricula: " + tractoras[i].matricula + "<button class='btn btn-default'>Ficha</button>" + "</li>";
         }
         stringListado+="</ul>";
        var divListaCamion = $(stringListado);
        divListaCamion.insertAfter($("#listaDatos"));


    };

    var mostrarRemolques = function(remolques){
        console.log("Pintar remolques");
        borrarPantalla(0);

        //Formulario de búsqueda de un camión del listado
        var formBuscarRemolque = $("<form id='formBuscarRemolque' class='navbar-form navbar-left' " +
            "role='search'>  <div class='form-group'>  <input type='text' class='form-control' " +
            "placeholder='Matricula'> </div>" + " <button type='submit' class='btn btn-default'>Buscar</button></form>");
        formBuscarRemolque.insertAfter("#listaDatos");

         //Listado de remolques
         var stringListado = "<ul id='listado' class='list-group'>";
         for (var i = remolques.length - 1; i >= 0; i--) {
             stringListado+= "<li id='listadoTractoras' class='list-group-item'>Identificador: " + remolques[i].idRemolque + "     Matricula: " + remolques[i].matricula + "<button class='btn btn-default'>Ficha</button>" + "</li>";
         }
         stringListado+="</ul>";
        var divListaCamion = $(stringListado);
        divListaCamion.insertAfter($("#listaDatos"));


    };

    var mostrarTractoraFicha = function(tractora){
        console.log("Pintar tractora");
        borrarPantalla(0);

         //Ficha de tractora
         var stringForm = "<div id='divGeneral'><form id='formFichaTractora' class='form'>"+
                            "<div class='form-group'>   </div>";

            stringForm+="<label class='label label-default' for='idTractora'>IdTractora:</label>";
            stringForm+= "<input id='idTractora' type='text' class='form-control' placeholder='idTractora' value=" + tractora.idTractora + " > " ;
            stringForm+="<label class='label label-default' for='matricula'>matricula:</label>";
            stringForm+= "<input id='matricula' type='text' class='form-control' placeholder='matricula' value=" + tractora.matricula + " > " ;
            stringForm+="<label class='label label-default' for='seguro'>seguro:</label>";
            stringForm+= "<input id='seguro' type='text' class='form-control' placeholder='seguro' value=" + tractora.seguro + " > " ;
            stringForm+="<label class='label label-default' for='aseguradora'>aseguradora:</label>";
            stringForm+= "<input id='aseguradora' type='text' class='form-control' placeholder='aseguradora' value=" + tractora.aseguradora + " > " ;


            stringForm+="<button type='submit' class='btn btn-default'>Submit</button></form></div>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#listaDatos"));
    };

    var mostrarRemolqueFicha = function(tractora){
        console.log("Pintar tractora");
        borrarPantalla(0);

         //Ficha de tractora
         var stringForm = "<div id='divGeneral'><form id='formFichaTractora' class='form'>"+
                            "<div class='form-group'>   </div>";

            stringForm+="<label class='label label-default' for='idTractora'>IdTractora:</label>";
            stringForm+= "<input id='idTractora' type='text' class='form-control' placeholder='idTractora' value=" + tractora.idTractora + " > " ;
            stringForm+="<label class='label label-default' for='matricula'>matricula:</label>";
            stringForm+= "<input id='matricula' type='text' class='form-control' placeholder='matricula' value=" + tractora.matricula + " > " ;
            stringForm+="<label class='label label-default' for='seguro'>seguro:</label>";
            stringForm+= "<input id='seguro' type='text' class='form-control' placeholder='seguro' value=" + tractora.seguro + " > " ;
            stringForm+="<label class='label label-default' for='aseguradora'>aseguradora:</label>";
            stringForm+= "<input id='aseguradora' type='text' class='form-control' placeholder='aseguradora' value=" + tractora.aseguradora + " > " ;


            stringForm+="<button type='submit' class='btn btn-default'>Submit</button></form></div>";
        var divGeneral = $(stringForm);
        divGeneral.insertAfter($("#listaDatos"));
    };

    var borrarPantalla = function(mapa){
        var $divListado = $('#listado');
        $divListado.remove();
        var $divGeneral = $('#divGeneral');
        $divGeneral.remove();
        var $formFichaTractora = $('#formFichaTractora');
        $formFichaTractora.remove();
        var $divBusqueda = $('#formBuscarTractora');
        $divBusqueda.remove();

    };

    var mostrarRemolque = function(remolque){
        console.log("Pintar remolque");
        borrarPantalla(0);

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
        mostrarRemolques : mostrarRemolques
    };

})();
var APP = APP||{};
APP.UI = (function(lng, undefined) {
    "use strict";

    var createElement = function(descripcion){
          var $li = $('<li/>');

            $li.append(descripcion);

            return $li;

    };

    var mostrarRuta = function(ruta){

        console.log("Pintar ruta");
        borrarPantalla(1);

        var latOrigen = ruta[0].lng;
        var lngOrigen = ruta[0].lat;
        var latDestino = ruta[50].lng;
        var lngDestino = ruta[50].lat;
        var origen = new google.maps.LatLng(latOrigen, lngOrigen);
        var destin = new google.maps.LatLng(latDestino, lngDestino);

        console.log("origen");
        console.log(origen);
        console.log("destino");
        console.log(destin);

        var waypts = [];
        for (var i = 1; i <= 8; i++)
        {
            var lat = ruta[i].lng;
            var lngtemp = ruta[i].lat;
            var coord = new google.maps.LatLng(lat, lngtemp);
            waypts.push({
                location:  coord,
                stopover:true
            });
        }
        console.log(waypts);

        var divMap = $("<div id='map'></div>");
        divMap.insertAfter($("#navbar"));

        $("#map").gmap3({
          getroute:{
            options:{
                origin:origen,
                destination:destin,
                travelMode: google.maps.DirectionsTravelMode.DRIVING,
                waypoints:waypts
            },
            callback: function(results){
              if (!results){
                console.log("fallo del callback de la ruta");
            return;
        }
              $(this).gmap3({
                map:{
                  options:{
                    zoom: 13,
                    center: [latOrigen,lngOrigen]
                  }
                },
                directionsrenderer:{
                    container: $(document.createElement("div")).addClass("googlemap").insertAfter($("#map")),
                  options:{
                    directions:results
                  }
                }
              });
            }
          }
        });

        //$ul.empty();
        /*var lis = [];
        for (var i = 0; i < ruta.length-1; i++) {
            lis.push('<li>Lat: ' + ruta[i].lat + ', Lng: ' + ruta[i].lng + '</li>');
        }
        $ul.append(lis);
    */
    };

    var eliminarMapa = function(){
        $('#map').gmap3();
        setTimeout(function(){
            $('#map').gmap3('destroy').remove();
            $('.googlemap').remove();
        }, 100);
    };

 /*   var mostrarCamion = function(camion){
        console.log("Pintar camion");
        borrarPantalla(0);

        //Formulario de búsqueda de un camión del listado
        var formBuscarCamion = $("<form id='formBuscarCamion' class='navbar-form navbar-left' " +
            "role='search'>  <div class='form-group'>  <input type='text' class='form-control' " +
            "placeholder='Matricula'> </div>" + " <button type='submit' class='btn btn-default'>Buscar</button></form>");
        formBuscarCamion.insertAfter("#listaDatos");
        var divListaCamion = $("<div id='listado' class='list-group'><a href='#'' class='list-group-item'>Identificador: " + camion.idCamion + "</a><a href='#'' id='listado' class='list-group-item'>Matricula: " + camion.matricula + "</a></div>");
        divListaCamion.insertAfter($("#listaDatos"));

        //Listado de camiones
        var listaCamiones;

        APP.Ruta.getRuta(function(camiones){
            listaCamiones = camiones;


        });
*/
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
             stringListado+= "<li class='list-group-item'>Identificador: " + tractoras[i].idCamion + "     Matricula: " + tractoras[i].matricula + "</li>";
         }
         stringListado+="</ul>";
        var divListaCamion = $(stringListado);
        divListaCamion.insertAfter($("#listaDatos"));


    };

    var borrarPantalla = function(mapa){
        //var $ul = $('#listaDatos');
        //$ul.empty();
        var $divListado = $('#listado');
        $divListado.remove();
        var $divBusqueda = $('#formBuscarTractora');
        $divBusqueda.remove();

        if(mapa===0){eliminarMapa();}

    };

    var mostrarRemolque = function(remolque){
        console.log("Pintar remolque");
        borrarPantalla(0);

        var divListaRemolque = $("<div id='listado' class='list-group'><a href='#'' class='list-group-item'>Identificador: " + remolque.idRemolque + "</a><a href='#'' id='listado' class='list-group-item'>Matricula: " + remolque.matricula + "</a></div>");
        divListaRemolque.insertAfter($("#listaDatos"));
    };

    var mostrarAlertas = function(alertas) {
        borrarPantalla(0);

        var divListadoAlertas ="";
        divListadoAlertas+="<div id='listado' class='list-group'>";
        for (var j = 0; j < alertas.length; j++) {
            var $lin = "<a href='#'' class='list-group-item list-group-item-danger'>" + alertas[j].descripcion;
            divListadoAlertas+= $lin;
        }
        divListadoAlertas+="</div>";
        var listadoObjeto = $(divListadoAlertas);
        console.log(listadoObjeto);
        listadoObjeto.insertAfter($("#listaDatos"));
    };

    var mostrarConductor = function(conductor){
        borrarPantalla(0);

        var divListaCamion = $("<div id='listado' class='list-group'>"+
            "<a href='#'' class='list-group-item'>Identificador: " + conductor.idConductor +
            "</a><a href='#'' id='listado' class='list-group-item'>Nombre: " + conductor.nombre +
            "</a><a href='#'' class='list-group-item'>Apellido: " + conductor.apellido + "</a></div>");
        divListaCamion.insertAfter($("#listaDatos"));
        //$ul.empty();
    };

    var esconderAlertas = function(alertas) {
        //var $ul = $('#listaDatos');
        //$ul.empty();
    };

    var avisoAlertas = function(nuevasAlertas) {
        var alerta;
        for (alerta in nuevasAlertas){
            alert(nuevasAlertas[alerta].descripcion);
        }
    };

    var avisoTiempo = function(tiempo) {

        console.log("estadoTiempo : " + tiempo);
    };

    var mostrarActivo = function(li){
        var $li = $(li);
        $li.addClass('active').siblings('.active').removeClass('active');
    };

    return {
        mostrarAlertas : mostrarAlertas,
        esconderAlertas : esconderAlertas,
        mostrarConductor : mostrarConductor,
        mostrarRuta : mostrarRuta,
        mostrarTractoras : mostrarTractoras,
        mostrarRemolque : mostrarRemolque,
        avisoAlertas : avisoAlertas,
        mostrarActivo : mostrarActivo
    };

})();
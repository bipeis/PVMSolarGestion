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
        var $loginSection = $('#loginsection');
        $loginSection.remove();
        var $menucentral = $('#menucentral');
        $menucentral.remove();

    };

    Handlebars.getTemplate = function(name){
        if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
            var response = $.ajax({
                url : 'views/' + name + '.hbs',
                // success : function(data) {
                //     console.log('[UI template ' + name + ' loaded]');
                //     if (Handlebars.templates === undefined) {
                //         Handlebars.templates = {};
                //     }
                //     Handlebars.templates[name] = Handlebars.compile(data);
                // },
                error : function(xhr, type) {
                    console.error('[UI error loading template ' + name + ']');
                    console.error(xhr, type);
                },
                dataType: 'html',
                async : false
            });

            if (Handlebars.templates === undefined) {
                Handlebars.templates = {};
            }
            //console.log(response.responseText);
            //Handlebars.templates[name] = Handlebars.compile(response.responseText);
            var template = Handlebars.compile(response.responseText);

            //console.log(template);

            // var script = document.createElement('script');
            // script.type  = 'text/javascript';
            // script.text = response;
            // document.body.appendChild(script);
        }

        return template;
    };


    var borrarNav = function(){
      console.log('borrarNav');
        var $menutractora = $('#navbar');
        $menutractora.remove();

    };

    var mostrarTractoras = function(tractoras){
        console.log('Pintar tractoras');
        borrarPantalla();

        //Formulario de búsqueda de una tractora del listado
        var template = Handlebars.getTemplate('busqueda');

        console.log(template);
        var data  = { placeholde : 'Matrícula'};

        var html  = template(data);
        console.log(html);

        $(html).insertAfter('#navbar');

         //Listado de tractoras
        var template = Handlebars.getTemplate('listado-tractoras');

        console.log(template);
        var data  = { listado : tractoras};

        var html  = template(data);
        console.log(html);

        $(html).insertAfter('#busqueda');

    };

    var mostrarRemolques = function(remolques){
        console.log("Pintar remolques");
        console.log(remolques);
        borrarPantalla();

        //Formulario de búsqueda de un remolque del listado
        var template = Handlebars.getTemplate('busqueda');

        console.log(template);
        var data  = { placeholde : 'Matrícula'};

        var html  = template(data);
        console.log(html);

        $(html).insertAfter('#navbar');

         //Listado de remolques
        var template = Handlebars.getTemplate('listado-remolques');

        console.log(template);
        var data  = { listado : remolques};

        var html  = template(data);
        console.log(html);

        $(html).insertAfter('#formBusqueda');

    };

    var mostrarTalleres = function(talleres){
        console.log("Pintar talleres");
        console.log(talleres);
        borrarPantalla();

        //Formulario de búsqueda de un taller del listado
        var template = Handlebars.getTemplate('busqueda');

        console.log(template);
        var data  = {
          placeholde : 'Nombre'
        };

        var html  = template(data);
        console.log(html);

        $(html).insertAfter('#navbar');

         //Listado de talleres
        var template = Handlebars.getTemplate('listado-talleres');

        console.log(template);
        var data  = { listado : talleres};

        var html  = template(data);
        console.log(html);

        $(html).insertAfter('#formBusqueda');

    };


    var mostrarAseguradoras = function(aseguradoras){
        borrarPantalla();

        //Formulario de búsqueda de una aseguradora del listado
       var template = Handlebars.getTemplate('busqueda');

        console.log(template);
        var data  = {
          placeholde : 'Nombre'
        };

        var html  = template(data);
        console.log(html);

        $(html).insertAfter('#navbar');

         //Listado de aseguradoras
        var template = Handlebars.getTemplate('listado-aseguradoras');

        console.log(template);
        var data  = { listado : aseguradoras};

        var html  = template(data);
        console.log(html);

        $(html).insertAfter('#formBusqueda');

    };


    var mostrarTractoraFichaDatosGenerales = function(tractora,plantilla,editando){
        console.log("Pintar tractora");
        console.log(tractora);
        console.log(plantilla);

        borrarPantalla();

        //submenu tractora datos generales
        var template = Handlebars.getTemplate('menupestanas-tractora');

        var data  = {
            IdTractora : tractora[0].IdTractora,
            editing : editando
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

        mostrarActivo($('#datosgenerales'));


         //Ficha de tractora datos generales
       var template = Handlebars.getTemplate(plantilla);

        var data  = {
            IdTractora : tractora[0].IdTractora,
            Matricula : tractora[0].Matricula,
            Marca : tractora[0].Marca,
            Modelo : tractora[0].Modelo,
            CatEur : tractora[0].CatEur,
            ValorCompra : tractora[0].ValorCompra,
            itv1 : tractora[0].itv1,
            itv2 : tractora[0].itv2,
          };

        sessionStorage.setItem('IdTractora', tractora[0].IdTractora);
        sessionStorage.setItem('Matricula', tractora[0].Matricula);
        sessionStorage.setItem('Marca', tractora[0].Marca);
        sessionStorage.setItem('Modelo', tractora[0].Modelo);
        sessionStorage.setItem('CatEur', tractora[0].CatEur);
        sessionStorage.setItem('ValorCompra', tractora[0].ValorCompra);
        sessionStorage.setItem('itv1', tractora[0].itv1);
        sessionStorage.setItem('itv2', tractora[0].itv2);

        var html  = template(data);

        $(html).insertAfter('#menutractora');

    };

    var mostrarTractoraFichaFinanciacion = function(tractora,plantilla,editando){
        console.log("Pintar tractora Financiación");
        console.log(tractora);

        borrarPantalla();

        //submenu tractora datos generales
        var template = Handlebars.getTemplate('menupestanas-tractora');

        var data  = {
            IdTractora : tractora[0].IdTractora,
            editing : editando
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

        mostrarActivo($('#financiacion'));


       var template = Handlebars.getTemplate(plantilla);

        var data  = {
            IdTractora : tractora[0].IdTractora,
            Matricula : tractora[0].Matricula,
            FinanciacionEntidad : tractora[0].FinanciacionEntidad,
            FinanciacionContrato : tractora[0].FinanciacionContrato,
            FinanciacionFechaInicio : tractora[0].FinanciacionFechaInicio,
            FinanciacionFechaFin : tractora[0].FinanciacionFechaFin,
            FinanciacionCuotaMensual : tractora[0].FinanciacionCuotaMensual,
            FinanciacionCutotaResidual : tractora[0].FinanciacionCutotaResidual,
            SeguroIncluido : tractora[0].SeguroIncluido
          };

        var html  = template(data);

        $(html).insertAfter('#menutractora');

    };


    var mostrarTractoraFichaEditable = function(tractora){
        console.log("Pintar tractora editable");
        console.log(tractora);

        borrarPantalla();

         //Ficha de tractora
        var template = Handlebars.getTemplate('ficha-tractora-editable');

        var data  = {
            IdTractora : mantenimientos[0].IdTractora,
            Matricula : mantenimientos[0].Matricula,
            seguro : mantenimientos[0].seguro,
            aseguradora : mantenimientos[0].aseguradora
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

    };


    var mostrarMantenimientosTractora = function(mantenimientos){
        console.log("Pintar mantenimientos");
        console.log(mantenimientos);
        borrarPantalla();

        //submenu tractora
        var template = Handlebars.getTemplate('menupestanas-tractora');

        var data  = {
            IdTractora : mantenimientos[0].IdTractora
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');


        //Formulario de búsqueda de un mantenimiento del listado
        var template = Handlebars.getTemplate('formbusqueda-mantenimientos');

        var html  = template();

        $(html).insertAfter('#menutractora');

         //Listado de mantenimientos
        var template = Handlebars.getTemplate('listado-mantenimientos');

        var data  = {
            IdTractora : mantenimientos[0].IdTractora,
            listado : mantenimientos
          };

        var html  = template(data);

        $(html).insertAfter('#formBusqueda');

    };

    var mostrarRemolqueFicha = function(remolque){
        console.log("Pintar remolque");
        console.log(remolque);
        borrarPantalla();

         //Ficha de remolque
        var template = Handlebars.getTemplate('ficha-remolque');

        var data  = {
            IdRemolque : remolque[0].IdRemolque,
            Matricula : remolque[0].Matricula,
            seguro : remolque[0].seguro,
            aseguradora : remolque[0].aseguradora
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

    };

    var mostrarTallerFicha = function(taller){
        console.log("Pintar taller");
        borrarPantalla();

         //Ficha de taller
        var template = Handlebars.getTemplate('ficha-taller');

        var data  = {
            IdTaller : taller[0].IdTaller,
            Nombre : taller[0].Nombre,
            Direccion : taller[0].Direccion,
            telefono : taller[0].telefono
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

        //mapa
        var template = Handlebars.getTemplate('map');

        var data  = {
            Direccion : taller[0].Direccion
          };

        var html  = template(data);

        $(html).insertAfter('#divGeneral');

        APP.Map.initialize();

    };

    var mostrarAseguradoraFicha = function(aseguradora){
        console.log("Pintar aseguradora");
        borrarPantalla();

        //template nav
        var template = Handlebars.getTemplate('ficha-aseguradora');

        var data  = {
            IdAseguradora : aseguradora[0].IdAseguradora,
            Nombre : aseguradora[0].Nombre,
            direccion : aseguradora[0].direccion,
            telefono : aseguradora[0].telefono
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

    };


    var mostrarActivo = function(li){
        var $li = $(li);
        $li.addClass('active').siblings('.active').removeClass('active');
    };

    var mostrarLogin = function(){
        console.log("Pintar login");
        borrarPantalla();

        borrarNav();

        //Empty nav
        mostrarNav('Sin conectar');

        //template nav
        var template = Handlebars.getTemplate('loginsection');

        var html  = template();

        $(html).insertAfter('#navbar');


        //drawList();
    };


    var mostrarMenuInicio = function (usuario) {
        console.log("Pintar menu");
        borrarPantalla();
        borrarNav();

        mostrarNav(usuario);

        //template menu inicio
        var template = Handlebars.getTemplate('menuinicio');

        var html  = template();

        $(html).insertAfter('#navbar');

    };

    var mostrarNav = function(usuario){

      console.log('mostrarNav');

      //template nav
      var template = Handlebars.getTemplate('menu');

      var data  = { user : usuario};

      var html  = template(data);

      $(html).insertAfter('#listaDatos');

    };

    var mostrarNuevaTractora = function(){

      console.log('mostrarNuevaTractora');

      //template nav
      var template = Handlebars.getTemplate('nueva-tractora');

      var html  = template();

      $(html).insertAfter('#listaDatos');

    };

    return {
        mostrarTractoras : mostrarTractoras,
        mostrarRemolques : mostrarRemolques,
        mostrarTalleres : mostrarTalleres,
        mostrarAseguradoras : mostrarAseguradoras,
        mostrarTractoraFichaDatosGenerales : mostrarTractoraFichaDatosGenerales,
        mostrarTractoraFichaFinanciacion : mostrarTractoraFichaFinanciacion,
        mostrarTractoraFichaEditable : mostrarTractoraFichaEditable,
        mostrarMantenimientosTractora : mostrarMantenimientosTractora,
        mostrarRemolqueFicha : mostrarRemolqueFicha,
        mostrarTallerFicha : mostrarTallerFicha,
        mostrarAseguradoraFicha : mostrarAseguradoraFicha,
        mostrarActivo : mostrarActivo,
        mostrarLogin : mostrarLogin,
        mostrarMenuInicio : mostrarMenuInicio,
        mostrarNav : mostrarNav,
        mostrarNuevaTractora : mostrarNuevaTractora
    };

})();
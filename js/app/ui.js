var APP = APP||{};
APP.UI = (function(lng, undefined) {
    'use strict';


    var borrarPantalla = function(){
        var $divListado = $('#listado');
        $divListado.remove();
        var $divGeneral = $('#divGeneral');
        $divGeneral.remove();
        var $divGeneral = $('#divGeneral');
        $divGeneral.remove();
        var $divGeneral = $('#divGeneral');
        var $divGeneral = $('#divGeneral');
        $divGeneral.remove();
        var $divGeneral = $('#divGeneral');
        $divGeneral.remove();
        var $divGeneral = $('#divGeneral');
        var $divGeneral = $('#divGeneral');
        $divGeneral.remove();
        var $divGeneral = $('#divGeneral');
        $divGeneral.remove();
        var $divGeneral = $('#divGeneral');
        var $divGeneral = $('#divGeneral');
        $divGeneral.remove();
        var $divGeneral = $('#divGeneral');
        $divGeneral.remove();
        var $formFichaTractora = $('#formFichaTractora');
        $formFichaTractora.remove();
        var $divBusqueda = $('#busqueda');
        $divBusqueda.remove();
        var $divTabla = $('#divTabla');
        $divTabla.remove();
        var $menutractora = $('#sectionFicha');
        $menutractora.remove();
        var $loginSection = $('#loginsection');
        $loginSection.remove();
        var $menucentral = $('#menucentral');
        $menucentral.remove();
        var $menucentral = $('#map');
        $menucentral.remove();

    };

    var borrarNav = function(){
      console.log('borrarNav');
        var $menutractora = $('#navbar');
        $menutractora.remove();

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

    var mostrarTractoraMantenimientoRuedas = function(mantenimiento){
        console.log('mostrarTractoraMantenimientoRuedas');
        borrarPantalla();

        //Ficha de tractora datos generales
        var template = Handlebars.getTemplate('mantenimiento-ruedas');

        var data  = {
            Id : mantenimiento[0].Id,
            Tractora : mantenimiento[0].Tractora,
            Mantenimiento : mantenimiento[0].Mantenimiento,
            Taller : mantenimiento[0].Taller,
            DireccionTraccion : mantenimiento[0].DireccionTraccion,
            FechaCambio : mantenimiento[0].FechaCambio,
            MarcaRueda : mantenimiento[0].MarcaRueda,
            Medida : mantenimiento[0].Medida,
            Precio : mantenimiento[0].Precio,
            Posicion : mantenimiento[0].Posicion,
            TipoRueda : mantenimiento[0].TipoRueda,
            KilometrosCambio : mantenimiento[0].KilometrosCambio,
            KilometrosDuracion : mantenimiento[0].KilometrosDuracion,
            MotivosCambio : mantenimiento[0].MotivosCambio,
            GastosTotales : mantenimiento[0].GastosTotales
          };
        /*
        sessionStorage.setItem('IdTractora', tractora[0].IdTractora);
        sessionStorage.setItem('Matricula', tractora[0].Matricula);
        sessionStorage.setItem('Marca', tractora[0].Marca);
        sessionStorage.setItem('Modelo', tractora[0].Modelo);
        sessionStorage.setItem('CatEur', tractora[0].CatEur);
        sessionStorage.setItem('ValorCompra', tractora[0].ValorCompra);
        sessionStorage.setItem('itv1', tractora[0].itv1);
        sessionStorage.setItem('itv2', tractora[0].itv2);
        */
        var html  = template(data);

        $(html).insertAfter('#navbar');

    };

    var mostrarTractoraMantenimientoCarroceria = function(mantenimiento,plantilla){
        console.log('mostrarTractoraMantenimientoCarroceria');
        console.log(mantenimiento);
        borrarPantalla();

        //Ficha de tractora datos generales
       var template = Handlebars.getTemplate(plantilla);

        var data  = {
            Id : mantenimiento[0].Id,
            Tractora : mantenimiento[0].Tractora,
            Mantenimiento : mantenimiento[0].Mantenimiento,
            Taller : mantenimiento[0].Taller,
            Pieza : mantenimiento[0].Pieza,
            Fecha : mantenimiento[0].Fecha,
            Importe : mantenimiento[0].Importe,
            AccPropioTerceros : mantenimiento[0].AccPropioTerceros,
            AccAsegurado : mantenimiento[0].AccAsegurado,
            AccImputableConductor : mantenimiento[0].AccImputableConductor,
            Posicion : mantenimiento[0].Posicion,
            Zona : mantenimiento[0].Zona,
            GastoTotal : mantenimiento[0].GastoTotal
          };
        /*
        sessionStorage.setItem('IdTractora', tractora[0].IdTractora);
        sessionStorage.setItem('Matricula', tractora[0].Matricula);
        sessionStorage.setItem('Marca', tractora[0].Marca);
        sessionStorage.setItem('Modelo', tractora[0].Modelo);
        sessionStorage.setItem('CatEur', tractora[0].CatEur);
        sessionStorage.setItem('ValorCompra', tractora[0].ValorCompra);
        sessionStorage.setItem('itv1', tractora[0].itv1);
        sessionStorage.setItem('itv2', tractora[0].itv2);
        */
        var html  = template(data);

        $(html).insertAfter('#navbar');

    };

    var mostrarTractoraMantenimientoOtros = function(mantenimiento){
        console.log('mostrarTractoraMantenimientoOtros');
        borrarPantalla();

        //Ficha de tractora datos generales
        var template = Handlebars.getTemplate('mantenimiento-otros');

        var data  = {
            Id : mantenimiento[0].Id,
            Tractora : mantenimiento[0].Tractora,
            Mantenimiento : mantenimiento[0].Mantenimiento,
            Taller : mantenimiento[0].Taller,
            Tipo : mantenimiento[0].Tipo,
            FechaEntrega : mantenimiento[0].FechaEntrega,
            MotivoCambio : mantenimiento[0].MotivoCambio
          };
        /*
        sessionStorage.setItem('IdTractora', tractora[0].IdTractora);
        sessionStorage.setItem('Matricula', tractora[0].Matricula);
        sessionStorage.setItem('Marca', tractora[0].Marca);
        sessionStorage.setItem('Modelo', tractora[0].Modelo);
        sessionStorage.setItem('CatEur', tractora[0].CatEur);
        sessionStorage.setItem('ValorCompra', tractora[0].ValorCompra);
        sessionStorage.setItem('itv1', tractora[0].itv1);
        sessionStorage.setItem('itv2', tractora[0].itv2);
        */
        var html  = template(data);

        $(html).insertAfter('#navbar');

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
            itv1 : tractora[0].ITV1,
            itv2 : tractora[0].ITV2,
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


    var mostrarSegurosTractora = function(idTractora,aseguradoras,segurosObligatorios,segurosTodoRiesgo,plantilla,editando){
        console.log("mostrarSegurosTractora");
        console.log(segurosObligatorios);
        console.log(segurosTodoRiesgo);
        console.log(plantilla);
        console.log('idTractora');
        console.log(idTractora);
        console.log('aseguradoras');
        console.log(aseguradoras);

        borrarPantalla();

        //submenu tractora datos generales
        var template = Handlebars.getTemplate('menupestanas-tractora');

        var data  = {
            Id : idTractora,
            editing : editando
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

        mostrarActivo($('#seguros-pestana'));


         //Ficha de tractora datos generales
       var template = Handlebars.getTemplate(plantilla);

       if (segurosObligatorios[0] == undefined) {
           if (segurosTodoRiesgo[0] == undefined) {
                var data  = {
                   Id : idTractora,
                   aseguradoras : aseguradoras,
                   Tipo : 'Camión'
                };
            }
            else{
                var data  = {
                    Id : idTractora,
                    aseguradoras : aseguradoras,
                    Tipo : 'Camión',
                    AseguradoraTodo : segurosTodoRiesgo[0].Aseguradora,
                    Marca : segurosTodoRiesgo[0].Marca,
                    Modelo : segurosTodoRiesgo[0].Modelo,
                    CatEur : segurosTodoRiesgo[0].CatEur,
                    ValorCompra : segurosTodoRiesgo[0].ValorCompra,
                    itv1 : segurosTodoRiesgo[0].itv1,
                    itv2 : segurosTodoRiesgo[0].itv2
                  };

            }

            } else{
            if (segurosTodoRiesgo[0] == undefined) {
                var data  = {
                    Id : idTractora,
                    aseguradoras : aseguradoras,
                    Tipo : 'Camión',
                    Aseguradora : segurosObligatorios[0].Aseguradora,
                    Agencia : segurosObligatorios[0].Agencia,
                    Poliza : segurosObligatorios[0].Poliza,
                    FechaContratacion : segurosObligatorios[0].FechaContratacion,
                    FechaFinalizacion : segurosObligatorios[0].FechaFinalizacion,
                    CuotaAnual : segurosObligatorios[0].CuotaAnual,
                    FormaPago : segurosObligatorios[0].FormaPago
                  };
            }
            else{

                var data  = {
                    Id : idTractora,
                    aseguradoras : aseguradoras,
                    Tipo : 'Camión',
                    Aseguradora : segurosObligatorios[0].Aseguradora,
                    Agencia : segurosObligatorios[0].Agencia,
                    Poliza : segurosObligatorios[0].Poliza,
                    FechaContratacion : segurosObligatorios[0].FechaContratacion,
                    FechaFinalizacion : segurosObligatorios[0].FechaFinalizacion,
                    CuotaAnual : segurosObligatorios[0].CuotaAnual,
                    FormaPago : segurosObligatorios[0].FormaPago,
                    AseguradoraTodo : segurosTodoRiesgo[0].Aseguradora,
                    AgenciaTodo : segurosTodoRiesgo[0].Agencia,
                    PolizaTodo : segurosTodoRiesgo[0].Poliza,
                    FechaContratacionTodo : segurosTodoRiesgo[0].FechaContratacion,
                    FechaFinalizacionTodo : segurosTodoRiesgo[0].FechaFinalizacion,
                    CuotaAnualTodo : segurosTodoRiesgo[0].CuotaAnual,
                    FormaPagoTodo : segurosTodoRiesgo[0].FormaPago,
                    Asistencia : segurosTodoRiesgo[0].Asistencia,
                    Coberturas : segurosTodoRiesgo[0].Coberturas
                  };
              }
            }



        /*sessionStorage.setItem('IdTractora', tractora[0].IdTractora);
        sessionStorage.setItem('Matricula', tractora[0].Matricula);
        sessionStorage.setItem('Marca', tractora[0].Marca);
        sessionStorage.setItem('Modelo', tractora[0].Modelo);
        sessionStorage.setItem('CatEur', tractora[0].CatEur);
        sessionStorage.setItem('ValorCompra', tractora[0].ValorCompra);
        sessionStorage.setItem('itv1', tractora[0].itv1);
        sessionStorage.setItem('itv2', tractora[0].itv2);
        */
        var html  = template(data);

        $(html).insertAfter('#menutractora');

        $("#Aseguradora").val(segurosObligatorios[0].Aseguradora)

    };


    var mostrarSegurosRemolque = function(segurosObligatorios,segurosTodoRiesgo,plantilla,editando){
        console.log("Pintar tractora");
        console.log(segurosObligatorios);
        console.log(segurosTodoRiesgo);
        console.log(plantilla);

        borrarPantalla();

        //submenu tractora datos generales
        var template = Handlebars.getTemplate('menupestanas-tractora');

        var data  = {
            IdTractora : segurosObligatorios[0].Camion,
            editing : editando
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

        mostrarActivo($('#seguros-pestana'));


         //Ficha de tractora datos generales
       var template = Handlebars.getTemplate(plantilla);

        var data  = {
            IdTractora : segurosObligatorios[0].Camion,
            Aseguradora : segurosObligatorios[0].Aseguradora,
            Agencia : segurosObligatorios[0].Marca,
            Poliza : segurosObligatorios[0].Modelo,
            FechaContratacion : segurosObligatorios[0].CatEur,
            FechaFinalizacion : segurosObligatorios[0].ValorCompra,
            CuotaAnual : segurosObligatorios[0].itv1,
            FormaPago : segurosObligatorios[0].itv2,
            AseguradoraTodo : segurosTodoRiesgo[0].Aseguradora,
            Marca : segurosTodoRiesgo[0].Marca,
            Modelo : segurosTodoRiesgo[0].Modelo,
            CatEur : segurosTodoRiesgo[0].CatEur,
            ValorCompra : segurosTodoRiesgo[0].ValorCompra,
            itv1 : segurosTodoRiesgo[0].ITV1,
            itv2 : segurosTodoRiesgo[0].ITV2,
          };

        /*sessionStorage.setItem('IdTractora', tractora[0].IdTractora);
        sessionStorage.setItem('Matricula', tractora[0].Matricula);
        sessionStorage.setItem('Marca', tractora[0].Marca);
        sessionStorage.setItem('Modelo', tractora[0].Modelo);
        sessionStorage.setItem('CatEur', tractora[0].CatEur);
        sessionStorage.setItem('ValorCompra', tractora[0].ValorCompra);
        sessionStorage.setItem('itv1', tractora[0].itv1);
        sessionStorage.setItem('itv2', tractora[0].itv2);
        */
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
            FinanciacionCutotaResidual : tractora[0].FInanciacionCuotaResidual,
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

    var mostrarMantenimientosTractora = function(tractora,mantenimientos,plantilla,editando){
        console.log("Pintar mantenimientos");
        console.log(mantenimientos);
        borrarPantalla();

        //submenu tractora
        var template = Handlebars.getTemplate('menupestanas-tractora');

        var data  = {
            IdTractora : mantenimientos[0].IdTractora,
            editing : editando
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

        mostrarActivo($('#mantenimientos-pestana'));

         //Datos de mantenimientos
        var template = Handlebars.getTemplate(plantilla);

        var data  = {
            IdTractora : tractora[0].IdTractora,
            Matricula : tractora[0].Matricula,
            IncluidoEnContrato : tractora[0].MantIncluidoContrato,
            CoberAceiteMotor : tractora[0].MantCoberturaAceiteMotor,
            CoberAceiteCambios : tractora[0].MantCoberturaAceiteCambios,
            CoberFiltros : tractora[0].MantCoberturaFiltros,
            CoberOtros : tractora[0].MantCoberturaOtros,
            CondicionesContrato : tractora[0].MantCondicionesContrato
          };
        var html  = template(data);
        $(html).insertAfter('#menutractora');

        //Formulario de búsqueda de un mantenimiento del listado
        var template = Handlebars.getTemplate('formbusqueda-mantenimientos');

        var html  = template();

        $(html).insertAfter('#divGeneral');


         //Listado de mantenimientos
        var template = Handlebars.getTemplate('listado-mantenimientos');

        var data  = {
            IdTractora : mantenimientos[0].IdTractora,
            listado : mantenimientos,
            tractremolq : 'Tractora'
          };

        var html  = template(data);

        $(html).insertAfter('#formBusqueda');

    };

    var mostrarNuevaTractora = function(){

      console.log('mostrarNuevaTractora');

      //template nav
      var template = Handlebars.getTemplate('nueva-tractora');

      var html  = template();

      $(html).insertAfter('#listaDatos');

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

    var mostrarRemolqueFichaDatosGenerales = function(remolque,plantilla,editando){
        console.log("Pintar remolque");
        console.log(remolque);
        borrarPantalla();

        //submenu tractora datos generales
        var template = Handlebars.getTemplate('menu-pestanas-remolque');

        var data  = {
            IdRemolque : remolque[0].IdRemolque,
            editing : editando
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

        mostrarActivo($('#datosgenerales'));

         //Ficha de remolque
        var template = Handlebars.getTemplate(plantilla);

        var data  = {
            IdRemolque : remolque[0].IdRemolque,
            Matricula : remolque[0].Matricula,
            Marca : remolque[0].Marca,
            Modelo : remolque[0].Modelo,
            FechaMatriculacion : remolque[0].FechaMatriculacion,
            Itv1 : remolque[0].Itv1,
            Itv2 : remolque[0].Itv2,
            Itv3 : remolque[0].Itv3,
            Itv4 : remolque[0].Itv4
          };

        var html  = template(data);

        $(html).insertAfter('#menuremolque');

    };

    var mostrarRemolqueFichaFinanciacion = function(remolque,plantilla,editando){
        console.log("Pintar remolque");
        console.log(remolque);
        borrarPantalla();

        //submenu tractora datos generales
        var template = Handlebars.getTemplate('menu-pestanas-remolque');

        var data  = {
            IdRemolque : remolque[0].IdRemolque,
            editing : editando
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

        mostrarActivo($('#financiacion'));

         //Ficha de remolque
        var template = Handlebars.getTemplate(plantilla);

        var data  = {
            IdRemolque : remolque[0].IdRemolque,
            Matricula : remolque[0].Matricula,
            FinanciacionEntidad : remolque[0].FinanciacionEntidad,
            FinanciacionContrato : remolque[0].FinanciacionContrato,
            FinanciacionFechaInicio : remolque[0].FinanciacionFechaInicio,
            FinanciacionFechaFin : remolque[0].FinanciacionFechaFin,
            FinanciacionCuotaMensual : remolque[0].FinanciacionCuotaMensual,
            FinanciacionCutotaResidual : remolque[0].FinanciacionCutotaResidual,
            SeguroIncluido : remolque[0].SeguroIncluido
          };

        var html  = template(data);

        $(html).insertAfter('#menuremolque');

    };

    var mostrarMantenimientosRemolque = function(mantenimientos,plantilla,editando){
        console.log("Pintar mantenimientos");
        console.log(mantenimientos);
        borrarPantalla();

        //submenu tractora
        var template = Handlebars.getTemplate('menu-pestanas-remolque');

        var data  = {
            IdRemolque : mantenimientos[0].Remolque,
            editing : editando
          };

        var html  = template(data);

        $(html).insertAfter('#navbar');

        mostrarActivo($('#mantenimientos-pestana'));

        //Formulario de búsqueda de un mantenimiento del listado
        var template = Handlebars.getTemplate('formbusqueda-mantenimientos');

        var html  = template();

        $(html).insertAfter('#menuremolque');


         //Listado de mantenimientos
        var template = Handlebars.getTemplate('listado-mantenimientos');

        var data  = {
            IdRemolque : mantenimientos[0].IdRemolque,
            tractremolq : 'Remolque',
            listado : mantenimientos
          };

        var html  = template(data);

        $(html).insertAfter('#formBusqueda');

    };


    var mostrarRemolqueMantenimientoRuedas = function(mantenimiento){
        console.log('mostrarRemolqueMantenimientoRuedas');
        borrarPantalla();

        console.log(mantenimiento);

        for (var i = mantenimiento.length - 1; i >= 0; i--) {
            //Ficha de tractora datos generales
            var template = Handlebars.getTemplate('mantenimiento-remolque-ruedas');

            var data  = {
                Id : mantenimiento[i].Id,
                Remolque : mantenimiento[i].Remolque,
                Mantenimiento : mantenimiento[i].Mantenimiento,
                Taller : mantenimiento[i].Taller,
                Eje : mantenimiento[i].Eje,
                FechaCambio : mantenimiento[i].FechaCambio,
                MarcaRueda : mantenimiento[i].MarcaRueda,
                Medida : mantenimiento[i].Medida,
                Precio : mantenimiento[i].Precio,
                Posicion : mantenimiento[i].Posicion,
                TipoRueda : mantenimiento[i].TipoRueda,
                KilometrosCambio : mantenimiento[i].KilometrosCambio,
                KilometrosDuracion : mantenimiento[i].KilometrosDuracion,
                MotivosCambio : mantenimiento[i].MotivosCambio,
                GastosTotales : mantenimiento[i].GastosTotales
              };
            /*
            sessionStorage.setItem('IdTractora', tractora[0].IdTractora);
            sessionStorage.setItem('Matricula', tractora[0].Matricula);
            sessionStorage.setItem('Marca', tractora[0].Marca);
            sessionStorage.setItem('Modelo', tractora[0].Modelo);
            sessionStorage.setItem('CatEur', tractora[0].CatEur);
            sessionStorage.setItem('ValorCompra', tractora[0].ValorCompra);
            sessionStorage.setItem('itv1', tractora[0].itv1);
            sessionStorage.setItem('itv2', tractora[0].itv2);
            */
            var html  = template(data);

            $(html).insertAfter('#navbar');
        };
    };

    var mostrarRemolqueMantenimientoCarroceria = function(mantenimiento,plantilla){
        console.log('mostrarRemolqueMantenimientoCarroceria');
        console.log(mantenimiento);
        borrarPantalla();

        for (var i = mantenimiento.length - 1; i >= 0; i--) {
            //Ficha de tractora datos generales
           var template = Handlebars.getTemplate(plantilla);

            var data  = {
                Id : mantenimiento[i].Id,
                Remolque : mantenimiento[i].Remolque,
                Mantenimiento : mantenimiento[i].Mantenimiento,
                Taller : mantenimiento[i].Taller,
                Importe : mantenimiento[i].Importe,
                Tipo : mantenimiento[i].Tipo
              };
            /*
            sessionStorage.setItem('IdTractora', tractora[0].IdTractora);
            sessionStorage.setItem('Matricula', tractora[0].Matricula);
            sessionStorage.setItem('Marca', tractora[0].Marca);
            sessionStorage.setItem('Modelo', tractora[0].Modelo);
            sessionStorage.setItem('CatEur', tractora[0].CatEur);
            sessionStorage.setItem('ValorCompra', tractora[0].ValorCompra);
            sessionStorage.setItem('itv1', tractora[0].itv1);
            sessionStorage.setItem('itv2', tractora[0].itv2);
            */
            var html  = template(data);

            $(html).insertAfter('#navbar');
        };


    };

    var mostrarRemolqueMantenimientoLonas = function(mantenimiento){
        console.log('mostrarRemolqueMantenimientoLonas');
        borrarPantalla();

        //Ficha de tractora datos generales
        var template = Handlebars.getTemplate('mantenimiento-remolque-lonas');

        var data  = {
            Id : mantenimiento[0].Id,
            Remolque : mantenimiento[0].Remolque,
            MantenimientoTotal : mantenimiento[0].MantenimientoTotal,
            Taller : mantenimiento[0].Taller,
            Tipo : mantenimiento[0].Tipo,
            FechaReparacion : mantenimiento[0].FechaReparacion,
            GastosTotales : mantenimiento[0].GastosTotales
          };
        /*
        sessionStorage.setItem('IdTractora', tractora[0].IdTractora);
        sessionStorage.setItem('Matricula', tractora[0].Matricula);
        sessionStorage.setItem('Marca', tractora[0].Marca);
        sessionStorage.setItem('Modelo', tractora[0].Modelo);
        sessionStorage.setItem('CatEur', tractora[0].CatEur);
        sessionStorage.setItem('ValorCompra', tractora[0].ValorCompra);
        sessionStorage.setItem('itv1', tractora[0].itv1);
        sessionStorage.setItem('itv2', tractora[0].itv2);
        */
        var html  = template(data);

        $(html).insertAfter('#navbar');

    };

    var mostrarRemolqueMantenimientoFrenos = function(mantenimiento,plantilla){
        console.log('mostrarRemolqueMantenimientoFrenos');
        console.log(mantenimiento);
        borrarPantalla();

        for (var i = mantenimiento.length - 1; i >= 0; i--) {
        //Ficha de tractora datos generales
           var template = Handlebars.getTemplate(plantilla);

            var data  = {
                Id : mantenimiento[i].Id,
                Remolque : mantenimiento[i].Remolque,
                Mantenimiento : mantenimiento[i].Mantenimiento,
                Taller : mantenimiento[i].Taller,
                Fecha : mantenimiento[i].Fecha,
                Tipo : mantenimiento[i].Tipo,
                Eje1 : mantenimiento[i].Eje1,
                Eje2 : mantenimiento[i].Eje2,
                Eje3 : mantenimiento[i].Eje3,
                GastoAcumulado : mantenimiento[i].GastoAcumulado
              };
            /*
            sessionStorage.setItem('IdTractora', tractora[0].IdTractora);
            sessionStorage.setItem('Matricula', tractora[0].Matricula);
            sessionStorage.setItem('Marca', tractora[0].Marca);
            sessionStorage.setItem('Modelo', tractora[0].Modelo);
            sessionStorage.setItem('CatEur', tractora[0].CatEur);
            sessionStorage.setItem('ValorCompra', tractora[0].ValorCompra);
            sessionStorage.setItem('itv1', tractora[0].itv1);
            sessionStorage.setItem('itv2', tractora[0].itv2);
            */
            var html  = template(data);

            $(html).insertAfter('#navbar');        };


    };

    var mostrarRemolqueMantenimientoEquipamiento = function(mantenimiento){
        console.log('mostrarRemolqueMantenimientoEquipamiento');
        borrarPantalla();

        for (var i = mantenimiento.length - 1; i >= 0; i--) {

        //Ficha de tractora datos generales
            var template = Handlebars.getTemplate('mantenimiento-remolque-equipamiento');

            var data  = {
                Id : mantenimiento[i].Id,
                Remolque : mantenimiento[i].Remolque,
                Mantenimiento : mantenimiento[i].Mantenimiento,
                Taller : mantenimiento[i].Taller,
                Tipo : mantenimiento[i].Tipo,
                Fecha : mantenimiento[i].Fecha,
                Importe : mantenimiento[i].Importe
              };
            /*
            sessionStorage.setItem('IdTractora', tractora[0].IdTractora);
            sessionStorage.setItem('Matricula', tractora[0].Matricula);
            sessionStorage.setItem('Marca', tractora[0].Marca);
            sessionStorage.setItem('Modelo', tractora[0].Modelo);
            sessionStorage.setItem('CatEur', tractora[0].CatEur);
            sessionStorage.setItem('ValorCompra', tractora[0].ValorCompra);
            sessionStorage.setItem('itv1', tractora[0].itv1);
            sessionStorage.setItem('itv2', tractora[0].itv2);
            */
            var html  = template(data);

            $(html).insertAfter('#navbar');
        };

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



    var mostrarActivo = function(li){
        var $li = $(li);
        $li.addClass('active').siblings('.active').removeClass('active');
    };

    var mostrarLogin = function(){
        console.log("Pintar login");
        borrarPantalla();

        borrarNav();

        //Empty nav
        mostrarNav('Sin conectar','menu-sin-conexion');

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

        mostrarNav(usuario,'menu');

        //template menu inicio
        var template = Handlebars.getTemplate('menuinicio','');

        var html  = template();

        $(html).insertAfter('#navbar');

    };

    var mostrarNav = function(usuario,plantilla){

      console.log('mostrarNav');

      //template nav
      var template = Handlebars.getTemplate(plantilla);

      var data  = { user : usuario};

      var html  = template(data);

      $(html).insertAfter('#listaDatos');

    };


    var mostrarError = function(plantilla){

      console.log('mostrarError');

      borrarPantalla();

      //template nav
      var template = Handlebars.getTemplate(plantilla);

      var html  = template();

      $(html).insertAfter('#navbar');

    };

    return {
        mostrarTractoras : mostrarTractoras,
        mostrarTractoraFichaDatosGenerales : mostrarTractoraFichaDatosGenerales,
        mostrarTractoraFichaFinanciacion : mostrarTractoraFichaFinanciacion,
        mostrarTractoraFichaEditable : mostrarTractoraFichaEditable,
        mostrarMantenimientosTractora : mostrarMantenimientosTractora,
        mostrarNuevaTractora : mostrarNuevaTractora,
        mostrarTractoraMantenimientoRuedas : mostrarTractoraMantenimientoRuedas,
        mostrarTractoraMantenimientoCarroceria : mostrarTractoraMantenimientoCarroceria,
        mostrarTractoraMantenimientoOtros : mostrarTractoraMantenimientoOtros,
        mostrarSegurosTractora : mostrarSegurosTractora,

        mostrarRemolques : mostrarRemolques,
        mostrarMantenimientosRemolque : mostrarMantenimientosRemolque,
        mostrarRemolqueFichaDatosGenerales : mostrarRemolqueFichaDatosGenerales,
        mostrarRemolqueFichaFinanciacion : mostrarRemolqueFichaFinanciacion,
        mostrarRemolqueMantenimientoRuedas : mostrarRemolqueMantenimientoRuedas,
        mostrarRemolqueMantenimientoLonas : mostrarRemolqueMantenimientoLonas,
        mostrarRemolqueMantenimientoCarroceria : mostrarRemolqueMantenimientoCarroceria,
        mostrarRemolqueMantenimientoFrenos : mostrarRemolqueMantenimientoFrenos,
        mostrarRemolqueMantenimientoEquipamiento : mostrarRemolqueMantenimientoEquipamiento,
        mostrarSegurosRemolque : mostrarSegurosRemolque,

        mostrarTalleres : mostrarTalleres,
        mostrarTallerFicha : mostrarTallerFicha,

        mostrarAseguradoras : mostrarAseguradoras,
        mostrarAseguradoraFicha : mostrarAseguradoraFicha,

        mostrarActivo : mostrarActivo,
        mostrarLogin : mostrarLogin,
        mostrarMenuInicio : mostrarMenuInicio,
        mostrarNav : mostrarNav,


        mostrarError : mostrarError
    };

})();
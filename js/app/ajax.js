var APP = APP||{};
APP.Pedir = (function(){
    "use strict";

    var errorAjax = function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
        console.log(errorThrown);
    };




    var getTractorasPHP = function(devolverTractoras){
        console.log("getTractorasPHP");

        $.ajax({
                url : 'data/tractoras.php',
                cache : false,
                contentType: "application/json",
                success : devolverTractoras,
                error : errorAjax
        });
    };

    var getTractora = function(devolverTractoraDatos, tractoraId){
        console.log('getTractora');
        console.log("ID" + tractoraId);
        $.ajax({
                url : 'data/tractora.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : tractoraId },
                success : devolverTractoraDatos,
                error : errorAjax
        });
    };

    var getSegurosObligatoriosTractora = function(devolverTractoraDatos, tractoraId){
        console.log('getTractora');
        console.log("ID" + tractoraId);
        $.ajax({
                url : 'data/getSegurosObligatoriosTractora.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : tractoraId },
                success : devolverTractoraDatos,
                error : errorAjax
        });
    };

    var getSegurosTodoRiesgoTractora = function(devolverTractoraDatos, tractoraId){
        console.log('getSegurosTodoRiesgoTractora');
        console.log("ID" + tractoraId);
        $.ajax({
                url : 'data/getTractoraSeguroTodoRiesgo.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : tractoraId },
                success : devolverTractoraDatos,
                error : errorAjax
        });
    };

    var getSegurosObligatoriosRemolque = function(devolverTractoraDatos, tractoraId){
        console.log('getSegurosObligatoriosRemolque');
        console.log("ID" + tractoraId);
        $.ajax({
                url : 'data/getRemolqueSeguroObligatorio.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : tractoraId },
                success : devolverTractoraDatos,
                error : errorAjax
        });
    };

    var getSegurosTodoRiesgoRemolque = function(devolverTractoraDatos, tractoraId){
        console.log('getSegurosTodoRiesgoRemolque');
        console.log("ID" + tractoraId);
        $.ajax({
                url : 'data/getRemolqueSeguroTodoRiesgo.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : tractoraId },
                success : devolverTractoraDatos,
                error : errorAjax
        });
    };

    var getMantenimientosTractora = function(devolverMantenimientos,tractoraId){
        console.log("getMantenimientosTractora");
        console.log(tractoraId);
        $.ajax({
                url : 'data/mantenimientos.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id: tractoraId },
                success : devolverMantenimientos,
                error : errorAjax
        });
    };

    var getMantenimientoTractoraRuedas = function(devolverMantenimiento, mantenimientoId){
        console.log('getMantenimientoTractoraRuedas');
        console.log("ID" + mantenimientoId);
        $.ajax({
                url : 'data/mantenimientoRuedas.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : mantenimientoId },
                success : devolverMantenimiento,
                error : errorAjax
        });
    };

    var getMantenimientoTractoraCarroceria = function(devolverMantenimiento, mantenimientoId){
        console.log('getMantenimientoTractoraCarroceria');
        console.log("ID" + mantenimientoId);
        $.ajax({
                url : 'data/mantenimientoCarroceria.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : mantenimientoId },
                success : devolverMantenimiento,
                error : errorAjax
        });
    };

    var getMantenimientoTractoraOtros = function(devolverMantenimiento, mantenimientoId){
        console.log('getMantenimientoTractoraOtros');
        console.log("ID" + mantenimientoId);
        $.ajax({
                url : 'data/mantenimientoOtros.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : mantenimientoId },
                success : devolverMantenimiento,
                error : errorAjax
        });
    };

    var updateTractora = function(devolverTractora){
        console.log('updateTractora');

        var idTr = document.getElementById('idTractora').value;
        var matr = document.getElementById('matricula').value;
        var marc = document.getElementById('marca').value;
        var model = document.getElementById('modelo').value;
        var cateur = document.getElementById('cateur').value;
        var valorcompra = document.getElementById('valorcompra').value;
        var itv1 = document.getElementById('itv1').value;
        var itv2 = document.getElementById('itv2').value;

        $.ajax({
                url : 'data/updateTractora.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : {
                 idTractora: idTr,
                 matricula : matr,
                 marca : marc,
                 modelo : model,
                 catEur : cateur,
                 valorCompra : valorcompra,
                 Itv1 : itv1,
                 Itv2 : itv2 },
                success : devolverTractora,
                error : errorAjax
        });
    };

    var updateTractoraFinanciacion = function(devolverTractora){
        console.log('<updateTractoraFinanciacion></updateTractoraFinanciacion>');

        var idTr = document.getElementById('idTractora').value;
        var matr = document.getElementById('matricula').value;
        var entid = document.getElementById('entidad').value;
        var contrat = document.getElementById('contrato').value;
        var finicio = document.getElementById('fechainicio').value;
        var ffin = document.getElementById('fechafin').value;
        var cmensual = document.getElementById('cuotamensual').value;
        var cresidual = document.getElementById('cuotaresidual').value;
        var segincluido = document.getElementById('seguroincluido').value;

        $.ajax({
                url : 'data/updateTractoraFinanciacion.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : {
                 idTractora: idTr,
                 matricula : matr,
                 entidad : entid,
                 contrato : contrat,
                 fechainicio : finicio,
                 fechafin : ffin,
                 cuotamensual : cmensual,
                 cuotaresidual : cresidual,
                 seguroincluido : segincluido },
                success : devolverTractora,
                error : errorAjax
        });
    };

    var updateTractoraMantenimiento = function(devolverTractora){
        console.log('updateTractoraMantenimiento');

        var idTr = document.getElementById('idTractora').value;
        var matr = document.getElementById('matricula').value;
        var inclcontrato = document.getElementById('incluidoencontrato').value;
        var aceitemotor = document.getElementById('coberaceitemotor').value;
        var aceitecambios = document.getElementById('coberaceitecambios').value;
        var filtros = document.getElementById('filtros').value;
        var coberotros = document.getElementById('coberotros').value;
        var condicionescontrato = document.getElementById('condicionescontrato').value;

        $.ajax({
                url : 'data/updateTractoraMantenimiento.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : {
                 idTractora: idTr,
                 matricula : matr,
                 incluidoencontrato : inclcontrato,
                 coberaceitemotor : aceitemotor,
                 coberaceitecambios : aceitecambios,
                 filtro : filtros,
                 coberotros : coberotros,
                 condicionescontrato : condicionescontrato
                },
                success : devolverTractora,
                error : errorAjax
        });
    };

    var updateTractoraSeguros = function(devolverTractora){
        console.log('updateTractoraSeguros');

        var idTr = document.getElementById('Id').value;
        var aseg = document.getElementById('Aseguradora').value;
        var agencia = document.getElementById('Agencia').value;
        var poliza = document.getElementById('Poliza').value;
        var fcont = document.getElementById('FechaContratacion').value;
        var ffin = document.getElementById('FechaFinalizacion').value;
        var cuotanual = document.getElementById('CuotaAnual').value;
        var fpago = document.getElementById('FormaPago').value;

        var asegt = document.getElementById('AseguradoraT').value;
        var agenciat = document.getElementById('AgenciaT').value;
        var polizat = document.getElementById('PolizaT').value;
        var fcontt = document.getElementById('FechaContratacionT').value;
        var ffint = document.getElementById('FechaFinalizacionT').value;
        var cuotanualt = document.getElementById('CuotaAnualT').value;
        var fpagot = document.getElementById('FormaPagoT').value;
        var asist = document.getElementById('Asistencia').value;
        var cober = document.getElementById('Coberturas').value;

        $.ajax({
                url : 'data/updateTractoraSeguros.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : {
                 idTractora: idTr,
                 aseguradora : aseg,
                 agencia : agencia,
                 poliza : poliza,
                 fcont : fcont,
                 ffin : ffin,
                 cuotanual : cuotanual,
                 fpago : fpago,
                 aseguradorat : asegt,
                 agenciat : agenciat,
                 polizat : polizat,
                 fcontt : fcontt,
                 ffint : ffint,
                 cuotanualt : cuotanualt,
                 fpagot : fpagot,
                 asist : asist,
                 cober : cober
                },
                success : devolverTractora,
                error : errorAjax
        });
    };

    var deleteTractora = function(devolverTractoras,tractoraId){
        console.log('deleteTractora');

        $.ajax({
                url : 'data/tractoraDelete.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : tractoraId },
                success : devolverTractoras,
                error : errorAjax
        });
    };

    var crearTractora = function(devolverTractora){
        console.log('crearTractora');

        var idTr = document.getElementById('idTractora').value;
        var matr = document.getElementById('matricula').value;
        var marc = document.getElementById('marca').value;
        var model = document.getElementById('modelo').value;
        var cateur = document.getElementById('cateur').value;
        var valorcompra = document.getElementById('valorcompra').value;
        var itv1 = document.getElementById('itv1').value;
        var itv2 = document.getElementById('itv2').value;

        $.ajax({
                url : 'data/tractoraNueva.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : {
                 idTractora: idTr,
                 matricula : matr,
                 marca : marc,
                 modelo : model,
                 catEur : cateur,
                 valorCompra : valorcompra,
                 Itv1 : itv1,
                 Itv2 : itv2 },
                success : devolverTractora,
                error : errorAjax
        });
    };







    var getRemolquesPHP = function(devolverRemolques){
        console.log("getRemolquesPHP");

        $.ajax({
                url : 'data/remolques.php',
                cache : false,
                contentType: "application/json",
                success : devolverRemolques,
                error : errorAjax
        });
    };

    var getRemolque = function(devolverRemolqueDatos, remolqueId){
        console.log('getRemolque');
        console.log("ID" + remolqueId);
        $.ajax({
                url : 'data/remolque.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : remolqueId },
                success : devolverRemolqueDatos,
                error : errorAjax
        });
    };

    var getMantenimientosRemolque = function(devolverMantenimientos,remolqueId){
        console.log("getMantenimientosRemolque");
        console.log(remolqueId);
        $.ajax({
                url : 'data/remolquesMantenimientos.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id: remolqueId },
                success : devolverMantenimientos,
                error : errorAjax
        });
    };


    var getMantenimientoRemolqueRuedas = function(devolverMantenimiento, mantenimientoId){
        console.log('mantenimientoRemolqueRuedas');
        console.log("ID :" + mantenimientoId);
        $.ajax({
                url : 'data/mantenimientoRemolqueRuedas.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : mantenimientoId },
                success : devolverMantenimiento,
                error : errorAjax
        });
    };

    var getMantenimientoRemolqueCarroceria = function(devolverMantenimiento, mantenimientoId){
        console.log('getMantenimientoRemolqueCarroceria');
        console.log("ID" + mantenimientoId);
        $.ajax({
                url : 'data/mantenimientoRemolqueCarroceria.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : mantenimientoId },
                success : devolverMantenimiento,
                error : errorAjax
        });
    };

    var getMantenimientoRemolqueLonas = function(devolverMantenimiento, mantenimientoId){
        console.log('getMantenimientoRemolqueLonas');
        console.log("ID" + mantenimientoId);
        $.ajax({
                url : 'data/mantenimientoRemolqueLonas.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : mantenimientoId },
                success : devolverMantenimiento,
                error : errorAjax
        });
    };

    var getMantenimientoRemolqueFrenos = function(devolverMantenimiento, mantenimientoId){
        console.log('getMantenimientoRemolqueFrenos');
        console.log("ID" + mantenimientoId);
        $.ajax({
                url : 'data/mantenimientoRemolqueFrenos.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : mantenimientoId },
                success : devolverMantenimiento,
                error : errorAjax
        });
    };

    var getMantenimientoRemolqueEquipamiento = function(devolverMantenimiento, mantenimientoId){
        console.log('getMantenimientoRemolqueEquipamiento');
        console.log("ID" + mantenimientoId);
        $.ajax({
                url : 'data/mantenimientoRemolqueEquipamiento.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : mantenimientoId },
                success : devolverMantenimiento,
                error : errorAjax
        });
    };







    var getTalleresPHP = function(devolverTalleres){
        $.ajax({
                url : 'data/talleres.php',
                cache : false,
                contentType: "application/json",
                success : devolverTalleres,
                error : errorAjax
        });
    };

    var getTaller = function(devolverTallerDatos, tallerId){
        $.ajax({
                url : 'data/taller.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : tallerId },
                success : devolverTallerDatos,
                error : errorAjax
        });
    };




    var getAseguradorasPHP = function(devolverAseguradoras,campos){
        $.ajax({
                url : 'data/aseguradoras.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { campos : campos },
                success : devolverAseguradoras,
                error : errorAjax
        });
    };

    var getAseguradora = function(devolverAseguradoraDatos, aseguradoraId){
        $.ajax({
                url : 'data/aseguradora.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id : aseguradoraId },
                success : devolverAseguradoraDatos,
                error : errorAjax
        });
    };





    var getLogin = function(result,usuario, password){
        console.log("getLogin");

        $.ajax({
                url : 'data/login.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { usuarioLogin: usuario, passwordLogin : password },
                success : result,
                error : errorAjax
        });
    };



    return{
        getTractora : getTractora,
        getMantenimientosTractora : getMantenimientosTractora,
        getTractorasPHP : getTractorasPHP,
        updateTractora : updateTractora,
        updateTractoraFinanciacion : updateTractoraFinanciacion,
        updateTractoraMantenimiento : updateTractoraMantenimiento,
        updateTractoraSeguros : updateTractoraSeguros,
        deleteTractora : deleteTractora,
        crearTractora : crearTractora,
        getMantenimientoTractoraRuedas : getMantenimientoTractoraRuedas,
        getMantenimientoTractoraCarroceria : getMantenimientoTractoraCarroceria,
        getMantenimientoTractoraOtros : getMantenimientoTractoraOtros,
        getSegurosObligatoriosTractora : getSegurosObligatoriosTractora,
        getSegurosTodoRiesgoTractora : getSegurosTodoRiesgoTractora,

        getRemolque : getRemolque,
        getRemolquesPHP : getRemolquesPHP,
        getMantenimientosRemolque : getMantenimientosRemolque,
        getMantenimientoRemolqueRuedas : getMantenimientoRemolqueRuedas,
        getMantenimientoRemolqueFrenos : getMantenimientoRemolqueFrenos,
        getMantenimientoRemolqueEquipamiento : getMantenimientoRemolqueEquipamiento,
        getMantenimientoRemolqueLonas : getMantenimientoRemolqueLonas,
        getMantenimientoRemolqueCarroceria : getMantenimientoRemolqueCarroceria,
        getSegurosObligatoriosRemolque : getSegurosObligatoriosRemolque,
        getSegurosTodoRiesgoRemolque : getSegurosTodoRiesgoRemolque,

        getTalleresPHP : getTalleresPHP,
        getTaller : getTaller,

        getAseguradora : getAseguradora,
        getAseguradorasPHP : getAseguradorasPHP,

        getLogin : getLogin
    };

})();
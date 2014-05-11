var APP = APP||{};
APP.Pedir = (function(){
    "use strict";

    var getInfo = function(devolverInfo, remolqueInfo){
        $.ajax({
                url : remolqueInfo,
                cache : false,
                dataType : 'json',
                success : devolverInfo,
                error : errorAjax
        });
    };

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

    var getTalleresPHP = function(devolverTalleres){
        $.ajax({
                url : 'data/talleres.php',
                cache : false,
                contentType: "application/json",
                success : devolverTalleres,
                error : errorAjax
        });
    };

    var getAseguradorasPHP = function(devolverAseguradoras){
        $.ajax({
                url : 'data/aseguradoras.php',
                cache : false,
                contentType: "application/json",
                success : devolverAseguradoras,
                error : errorAjax
        });
    };

    var getTractora = function(devolverTractoraDatos, tractoraId){
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

    var getRemolque = function(devolverRemolqueDatos, remolqueId){
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
        console.log('updateTractora');

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
                 Matricula : matr,
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

    return{
        getInfo : getInfo,
        getTractora : getTractora,
        getRemolque : getRemolque,
        getRemolquesPHP : getRemolquesPHP,
        getTractorasPHP : getTractorasPHP,
        getTalleresPHP : getTalleresPHP,
        getTaller : getTaller,
        getAseguradora : getAseguradora,
        getAseguradorasPHP : getAseguradorasPHP,
        getMantenimientosTractora : getMantenimientosTractora,
        getLogin : getLogin,
        updateTractora : updateTractora,
        updateTractoraFinanciacion : updateTractoraFinanciacion,
        deleteTractora : deleteTractora
    };

})();
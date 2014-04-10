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
        $.ajax({
                url : 'data/tractoras.php',
                cache : false,
                contentType: "application/json",
                success : devolverTractoras,
                error : errorAjax
        });
    };

    var getRemolquesPHP = function(devolverRemolques){
        $.ajax({
                url : 'data/remolques.php',
                cache : false,
                dataType : 'json',
                success : devolverRemolques,
                error : errorAjax
        });
    };

    var getTalleresPHP = function(devolverTalleres){
        $.ajax({
                url : 'data/talleres.php',
                cache : false,
                dataType : 'json',
                success : devolverTalleres,
                error : errorAjax
        });
    };

    var getAseguradorasPHP = function(devolverAseguradoras){
        $.ajax({
                url : 'data/aseguradoras.php',
                cache : false,
                dataType : 'json',
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


    var getMantenimientosTractora = function(devolverMantenimientos,mantenimientoId){
        console.log("mantenimientoId");
        console.log(mantenimientoId);
        $.ajax({
                url : 'data/mantenimientos.php',
                cache : false,
                dataType : 'json',
                type : 'POST',
                data : { id: mantenimientoId },
                success : devolverMantenimientos,
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
        getMantenimientosTractora : getMantenimientosTractora
    };

})();
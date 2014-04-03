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

    var getTractoras = function(devolverTractoras, tractorasLista){
        $.ajax({
                url : tractorasLista,
                cache : false,
                dataType : 'json',
                success : devolverTractoras,
                error : errorAjax
        });
    };

    var getRemolques = function(devolverRemolques, remolquesLista){
        $.ajax({
                url : remolquesLista,
                cache : false,
                dataType : 'json',
                success : devolverRemolques,
                error : errorAjax
        });
    };

    var getTalleres = function(devolverTalleres, talleresLista){
        $.ajax({
                url : talleresLista,
                cache : false,
                dataType : 'json',
                success : devolverTalleres,
                error : errorAjax
        });
    };

    var getTractora = function(devolverTractoraDatos, tractoraDatos){
        $.ajax({
                url : tractoraDatos,
                cache : false,
                dataType : 'json',
                success : devolverTractoraDatos,
                error : errorAjax
        });
    };

    var getRemolque = function(devolverRemolqueDatos, remolqueDatos){
        $.ajax({
                url : remolqueDatos,
                cache : false,
                dataType : 'json',
                success : devolverRemolqueDatos,
                error : errorAjax
        });
    };

    var getTaller = function(devolverTallerDatos, tallerDatos){
        $.ajax({
                url : tallerDatos,
                cache : false,
                dataType : 'json',
                success : devolverTallerDatos,
                error : errorAjax
        });
    };


    return{
        getInfo : getInfo,
        getTractora : getTractora,
        getRemolque : getRemolque,
        getRemolques : getRemolques,
        getTractoras : getTractoras,
        getTalleres : getTalleres,
        getTaller : getTaller
    };

})();
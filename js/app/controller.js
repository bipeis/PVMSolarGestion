var APP = APP||{};
APP.Controller = (function() {
    "use strict";

    var showTractoras = function(e){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractorasPHP(function(tractoras, textStatus, jqXHR){
            var respuesta = JSON.parse(jqXHR.responseText);
            APP.UI.mostrarTractoras(respuesta);
        });
    };

    var showRemolques = function(e){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getRemolquesPHP(function(remolques, textStatus, jqXHR){
            var respuesta = JSON.parse(jqXHR.responseText);
            APP.UI.mostrarRemolques(remolques);
        });

    };

    var showTalleres = function(e){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTalleresPHP(function(talleres, textStatus, jqXHR){
            APP.UI.mostrarTalleres(talleres);
        });
    };

    var showAseguradoras = function(e){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getAseguradorasPHP(function(aseguradoras, textStatus, jqXHR){
            APP.UI.mostrarAseguradoras(aseguradoras);
        });
    };

    var showRemolque = function(e){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getInfo(function(remolque, textStatus, jqXHR){
            APP.UI.mostrarRemolque(remolque);
        }, 'data/remolque.json');
    };

    var showTractoraFicha = function(e){
        console.log("showTractoraFicha");
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarTractoraFicha(tractora);
        }, e.toElement.dataset.id);
    };

    var showRemolqueFicha = function(e){
        console.log("showRemolqueFicha");
        APP.UI.mostrarActivo(this);
        APP.Pedir.getRemolque(function(remolque, textStatus, jqXHR){
            APP.UI.mostrarRemolqueFicha(remolque);
        }, 'data/remolque.json');
    };

    var showTallerFicha = function(e){
        console.log("showTallerFicha");
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTaller(function(taller, textStatus, jqXHR){
            APP.UI.mostrarTallerFicha(taller);
        }, 'data/taller.json');
    };

    return {
        showTractoras : showTractoras,
        showRemolque : showRemolque,
        showTractoraFicha : showTractoraFicha,
        showRemolqueFicha : showRemolqueFicha,
        showTallerFicha :showTallerFicha,
        showRemolques : showRemolques,
        showTalleres : showTalleres,
        showAseguradoras : showAseguradoras
    };
})();
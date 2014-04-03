var APP = APP||{};
APP.Controller = (function() {
    "use strict";

    var showTractoras = function(e){
        APP.UI.mostrarActivo(this);
        console.log("tractoras de antes de getTractoras");
        APP.Pedir.getTractorasPHP(function(tractoras, textStatus, jqXHR){
            console.log("tractoras de getTractoras");
            console.log(tractoras);
            APP.UI.mostrarTractoras(tractoras);
        }, 'data/tractoras.json');
console.log("fin Controller");
    };

    var showRemolques = function(e){
        APP.UI.mostrarActivo(this);
        console.log("remolques de antes de getRemolques");
        APP.Pedir.getRemolques(function(remolques, textStatus, jqXHR){
            console.log("remolques de getTractoras");
            console.log(remolques);
            APP.UI.mostrarRemolques(remolques);
        }, 'data/remolques.json');

    };

    var showTalleres = function(e){
        APP.UI.mostrarActivo(this);
        console.log("talleres de antes de getTalleres");
        APP.Pedir.getTalleres(function(talleres, textStatus, jqXHR){
            console.log("talleres de getTalleres");
            console.log(talleres);
            APP.UI.mostrarTalleres(talleres);
        }, 'data/talleres.json');
    };

    var showAseguradoras = function(e){
        APP.UI.mostrarActivo(this);
        console.log("asegs de antes de getTalleres");
        APP.Pedir.getTalleres(function(talleres, textStatus, jqXHR){
            console.log("asegs de getTalleres");
            console.log(talleres);
            APP.UI.mostrarTalleres(talleres);
        }, 'data/talleres.json');
    };

    var showRemolque = function(e){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getInfo(function(remolque, textStatus, jqXHR){
            APP.UI.mostrarRemolque(remolque);
        }, 'data/remolque.json');
    };

    var showTractoraFicha = function(e){
        console.log("showTractoraFicha");
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarTractoraFicha(tractora);
        }, 'data/tractora.json');
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
var APP = APP||{};
APP.Controller = (function() {
    "use strict";

    var showTractoras = function(e){
        APP.UI.mostrarActivo(this);
                  console.log("tractoras de antes de getTractoras");
        APP.Pedir.getTractoras(function(tractoras, textStatus, jqXHR){
            console.log("tractoras de getTractoras");
            console.log(tractoras);
            APP.UI.mostrarTractoras(tractoras);
        }, 'data/tractoras.json');
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

    return {
        showTractoras : showTractoras,
        showRemolque : showRemolque,
        showTractoraFicha : showTractoraFicha,
        showRemolques : showRemolques
    };
})();
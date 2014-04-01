var APP = APP||{};
APP.Controller = (function() {
    "use strict";

    var showremolque = function(e){
        APP.UI.mostrarActivo(this);
        APP.remolque.getremolque(function(recorrido, textStatus, jqXHR){
            console.log(recorrido);
            APP.UI.mostrarremolque(recorrido);
        });
    };

    var showTractoras = function(e){
        APP.UI.mostrarActivo(this);
                  console.log("tractoras de antes de getTractoras");
        APP.Pedir.getTractoras(function(tractoras, textStatus, jqXHR){
            console.log("tractoras de getTractoras");
            console.log(tractoras);
            APP.UI.mostrarTractoras(tractoras);
        }, 'data/tractoras.json');
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
        APP.Pedir.getInfo(function(remolque, textStatus, jqXHR){
            APP.UI.mostrarRemolque(remolque);
        }, 'data/remolque.json');
    };

    return {
        showremolque : showremolque,
        showTractoras : showTractoras,
        showRemolque : showRemolque,
        showTractoraFicha : showTractoraFicha
    };
})();
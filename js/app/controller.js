var APP = APP||{};
APP.Controller = (function() {
    'use strict';

    var showTractoras = function(){
        console.log('showTractoras');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractorasPHP(function(tractoras, textStatus, jqXHR){
            console.log(tractoras);
            var respuesta = JSON.parse(jqXHR.responseText);
            APP.UI.mostrarTractoras(respuesta);
        });
    };

    var showRemolques = function(){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getRemolquesPHP(function(remolques, textStatus, jqXHR){
            console.log(remolques);
            var respuesta = JSON.parse(jqXHR.responseText);
            APP.UI.mostrarRemolques(respuesta);
        });

    };

    var showTalleres = function(){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTalleresPHP(function(talleres, textStatus, jqXHR){
            var respuesta = JSON.parse(jqXHR.responseText);
            APP.UI.mostrarTalleres(respuesta);
        });
    };

    var showAseguradoras = function(){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getAseguradorasPHP(function(aseguradoras, textStatus, jqXHR){
            var respuesta = JSON.parse(jqXHR.responseText);
            APP.UI.mostrarAseguradoras(respuesta);
        });
    };

    var showRemolque = function(){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getInfo(function(remolque, textStatus, jqXHR){
            APP.UI.mostrarRemolque(remolque);
        }, 'data/remolque.json');
    };

    var showTractoraFicha = function(e){
        console.log('showTractoraFicha');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarTractoraFichaDatosGenerales(tractora);
        }, e.toElement.dataset.id);
    };

    var showTractoraFichaDatosGenerales = function(e){
        console.log('showTractoraFicha');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarTractoraFichaDatosGenerales(tractora);
        }, e.toElement.dataset.tractora);
    };

    var showTractoraFichaFinanciacion = function(e){
        console.log('showTractoraFichaFinanciacion');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarTractoraFichaFinanciacion(tractora);
        }, e.toElement.dataset.tractora);
    };

    var showTractoraFichaMantenimientos = function(e){
        console.log('showTractoraFichaMantenimientos');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientosTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarMantenimientosTractora(tractora);
        }, e.toElement.dataset.tractora);
    };

    var showRemolqueFicha = function(e){
        console.log('showRemolqueFicha');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getRemolque(function(remolque, textStatus, jqXHR){
            APP.UI.mostrarRemolqueFicha(remolque);
        }, e.toElement.dataset.id);
    };

    var showTallerFicha = function(e){
        console.log('showTallerFicha');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTaller(function(taller, textStatus, jqXHR){
            APP.UI.mostrarTallerFicha(taller);
        }, e.toElement.dataset.id);
    };

    var showAseguradoraFicha = function(e){
        console.log('showAseguradoraFicha');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getAseguradora(function(aseguradora, textStatus, jqXHR){
            APP.UI.mostrarAseguradoraFicha(aseguradora);
        }, e.toElement.dataset.id);
    };

    var showModificarDatosTractora = function(e){
        console.log('showModificarDatosTractora');
        APP.UI.mostrarActivo(this);
        APP.UI.mostrarTractoraFichaEditable(e);
    };

    var showMantenimientosTractora = function(e){
        console.log('showMantenimientosTractora');
        console.log(e.toElement.dataset.id);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientosTractora(function(mantenimientos, textStatus, jqXHR){
            APP.UI.mostrarMantenimientosTractora(mantenimientos);
        }, e.toElement.dataset.id);
    };

    var showCambioPestana = function(e){
        console.log('showCambioPestana');
        console.log(e);
        console.log(e.toElement.dataset.id);
        //APP.UI.mostrarActivo(this);

        var aux = e.toElement.dataset.id;
        console.log(aux);
        if (aux === '0') {
            console.log('case 0');
            showTractoraFichaDatosGenerales(e);
        }
        if (aux==='1') {
            console.log('case 1');
            showTractoraFichaFinanciacion(e);
        }
        if (aux==='2') {
            console.log('case 2');
            showTractoraFichaMantenimientos(e);
        }

    };

    return {
        showTractoras : showTractoras,
        showRemolque : showRemolque,
        showTractoraFicha : showTractoraFicha,
        showTractoraFichaDatosGenerales : showTractoraFichaDatosGenerales,
        showTractoraFichaFinanciacion : showTractoraFichaFinanciacion,
        showTractoraFichaMantenimientos : showTractoraFichaMantenimientos,
        showRemolqueFicha : showRemolqueFicha,
        showTallerFicha :showTallerFicha,
        showAseguradoraFicha : showAseguradoraFicha,
        showRemolques : showRemolques,
        showTalleres : showTalleres,
        showAseguradoras : showAseguradoras,
        showModificarDatosTractora : showModificarDatosTractora,
        showMantenimientosTractora : showMantenimientosTractora,
        showCambioPestana : showCambioPestana
    };
})();
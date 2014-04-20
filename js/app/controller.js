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
        }, e.target.dataset.id);
    };

    var showTractoraFichaDatosGenerales = function(e){
        console.log('showTractoraFicha');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarTractoraFichaDatosGenerales(tractora);
        }, e.target.dataset.tractora);
    };

    var showTractoraFichaFinanciacion = function(e){
        console.log('showTractoraFichaFinanciacion');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarTractoraFichaFinanciacion(tractora);
        }, e.target.dataset.tractora);
    };

    var showTractoraFichaMantenimientos = function(e){
        console.log('showTractoraFichaMantenimientos');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientosTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarMantenimientosTractora(tractora);
        }, e.target.dataset.tractora);
    };

    var showRemolqueFicha = function(e){
        console.log('showRemolqueFicha');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getRemolque(function(remolque, textStatus, jqXHR){
            APP.UI.mostrarRemolqueFicha(remolque);
        }, e.target.dataset.id);
    };

    var showTallerFicha = function(e){
        console.log('showTallerFicha');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTaller(function(taller, textStatus, jqXHR){
            APP.UI.mostrarTallerFicha(taller);
        }, e.target.dataset.id);
    };

    var showAseguradoraFicha = function(e){
        console.log('showAseguradoraFicha');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getAseguradora(function(aseguradora, textStatus, jqXHR){
            APP.UI.mostrarAseguradoraFicha(aseguradora);
        }, e.target.dataset.id);
    };

    var showModificarDatosTractora = function(e){
        console.log('showModificarDatosTractora');
        APP.UI.mostrarActivo(this);
        APP.UI.mostrarTractoraFichaEditable(e);
    };

    var showMantenimientosTractora = function(e){
        console.log('showMantenimientosTractora');
        console.log(e.target.dataset.id);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientosTractora(function(mantenimientos, textStatus, jqXHR){
            APP.UI.mostrarMantenimientosTractora(mantenimientos);
        }, e.target.dataset.id);
    };

    var showLogin = function(usuario,e){
        console.log('showLogin');
        //APP.UI.mostrarActivo(this);
        console.log(APP);
        APP.UI.mostrarLogin();
    };

    var showMenuInicio = function(usuario,e){
        console.log('showMenuInicio');
        APP.UI.mostrarActivo(this);
        APP.UI.mostrarMenuInicio(usuario);
    };

    var login = function(e){
        console.log('login');
        console.log(e.target);
        APP.UI.mostrarActivo(this);
        var usuario = document.getElementById("usuarioInput").value;
        console.log(usuario);

        console.log("guardar");

        console.log(document.getElementById('checkboxLogin'));

        if(document.getElementById('checkboxLogin').checked){
            console.log('checked');

             localStorage.setItem('usuario', usuario);

        }
        else{
            console.log('not checked');
            sessionStorage.setItem('usuario', usuario);
        }


        console.log(sessionStorage.getItem('usuario'));
        console.log(localStorage.getItem('usuario'));

        showMenuInicio(usuario);
    };

    var unlogin = function(e){
        console.log('unlogin');
        console.log(e.target);
        APP.UI.mostrarActivo(this);

        var usuario = console.log(document.getElementById('usuarioNav'));

        sessionStorage.removeItem('usuario');
        localStorage.removeItem('usuario');

        console.log(sessionStorage.getItem('usuario'));
        console.log(localStorage.getItem('usuario'));

        showLogin();
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

    var showNav = function(e){
        console.log('showNav');
        APP.UI.mostrarActivo(this);
        APP.UI.mostrarNav(usuario);
    };

    var showEmptyNav = function(e){
        console.log('showEmptyNav');
        APP.UI.mostrarActivo(this);
        APP.UI.mostrarEmptyNav(usuario);
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
        showCambioPestana : showCambioPestana,
        login : login,
        unlogin : unlogin,
        showLogin : showLogin,
        showMenuInicio : showMenuInicio,
        showNav : showNav,
        showEmptyNav : showEmptyNav
    };
})();
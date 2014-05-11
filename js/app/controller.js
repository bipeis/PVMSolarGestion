var APP = APP||{};
APP.Controller = (function() {
    'use strict';

    var showTractoras = function(){
        console.log('showTractoras');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractorasPHP(function(tractoras, textStatus, jqXHR){
            console.log('tractoras');
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

    var showTractoraFichaDatosGenerales = function(e){
        console.log('showTractoraFicha');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarTractoraFichaDatosGenerales(tractora,'ficha-tractora-datos-generales','not');
        }, e.target.dataset.idtractora);
    };

    var showTractoraFichaEditable = function(e){
        console.log('showTractoraFichaEditable');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarTractoraFichaDatosGenerales(tractora,'ficha-tractora-editable-datosgenerales','editing');
        }, e.target.dataset.id);
    };

    var showTractoraFichaFinanciacion = function(e){
        console.log('showTractoraFichaFinanciacion');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarTractoraFichaFinanciacion(tractora,'ficha-tractora-financiacion','not');
        }, e.target.dataset.idtractora);
    };

    var showTractoraFichaFinanciacionEditable = function(e){
        console.log('showTractoraFichaFinanciacion');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarTractoraFichaFinanciacion(tractora,'ficha-tractora-editable-financiacion','editing');
        }, e.target.dataset.id);
    };

    var showTractoraFichaMantenimientos = function(e){
        console.log('showTractoraFichaMantenimientos');
        console.log(e);
        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientosTractora(function(tractora, textStatus, jqXHR){
            APP.UI.mostrarMantenimientosTractora(tractora);
        }, e.target.dataset.idtractora);
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
        var password = document.getElementById("passwordInput").value;
        console.log(password);

        //APP.Pedir.getLogin(function(resultado, textStatus, jqXHR){
            console.log('resultado');
            //console.log(resultado);
            //if(resultado){
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

            //}

        //},usuario,password);


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
        console.log(e.toElement.dataset.idpestana);
        //APP.UI.mostrarActivo(this);

        var aux = e.toElement.dataset.idpestana;
        console.log(aux);

        if (e.target.dataset.editing==='editing')
        {
        var r=confirm("¿Desea guardar los cambios?");
        var x;
        if (r==true)
          {
          x="You pressed OK!";
          //Actualizar en bbbd
          APP.Pedir.updateTractora(function(tractora, textStatus, jqXHR){

            });

          }
      }

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

    var guardarCambiosTractora = function(e){
        console.log('guardarCambiosTractora');
        console.log(e);


        var r=confirm("¿Está seguro que quiere guardar los cambios?");
        var x;
        if (r==true)
          {
          x="You pressed OK!";
          //Actualizar en bbbd
          APP.Pedir.updateTractora(function(tractora, textStatus, jqXHR){
            //comprobar tractora con if
            showTractoraFichaDatosGenerales(e);
            });

          }
        else
          {
          x="You pressed Cancel!";
          showTractoraFichaDatosGenerales(e);
          }
    };

    var guardarCambiosTractoraFinanciacion = function(e){
        console.log('guardarCambiosTractoraFinanciacion');
        console.log(e);


        var r=confirm("¿Está seguro que quiere guardar los cambios?");
        var x;
        if (r==true)
          {
          x="You pressed OK!";
          //Actualizar en bbbd
          APP.Pedir.updateTractoraFinanciacion(function(tractora, textStatus, jqXHR){
            //comprobar tractora con if
            showTractoraFichaFinanciacion(e);
            });

          }
        else
          {
          x="You pressed Cancel!";
          showTractoraFichaFinanciacion(e);
          }
    };

    var borrarTractora = function(e){
        console.log('borrarTractora');
        console.log(e.target.dataset);

        APP.UI.mostrarActivo(this);
        APP.Pedir.deleteTractora(function(tractoras, textStatus, jqXHR){
            console.log('tractoras');
            console.log(tractoras);
            var respuesta = JSON.parse(jqXHR.responseText);
            APP.UI.mostrarTractoras(respuesta);
        },e.target.dataset.idtractora);

    };

    var nuevaTractora = function(){
        console.log('nuevaTractora');

        APP.UI.mostrarNuevaTractora();
    };

    var crearNuevaTractora = function(){
        console.log('crearNuevaTractora');

        APP.UI.mostrarActivo(this);
        APP.Pedir.crearTractora(function(tractora, textStatus, jqXHR){
            console.log('tractora');
            console.log(tractora);
            var respuesta = JSON.parse(jqXHR.responseText);

            APP.UI.mostrarTractoraFichaDatosGenerales(respuesta,'ficha-tractora-datos-generales','not');
        });

    };


    return {
        showTractoras : showTractoras,
        showRemolque : showRemolque,
        showTractoraFichaDatosGenerales : showTractoraFichaDatosGenerales,
        showTractoraFichaFinanciacion : showTractoraFichaFinanciacion,
        showTractoraFichaMantenimientos : showTractoraFichaMantenimientos,
        showRemolqueFicha : showRemolqueFicha,
        showTallerFicha :showTallerFicha,
        showAseguradoraFicha : showAseguradoraFicha,
        showRemolques : showRemolques,
        showTalleres : showTalleres,
        showAseguradoras : showAseguradoras,
        showMantenimientosTractora : showMantenimientosTractora,
        showCambioPestana : showCambioPestana,
        login : login,
        unlogin : unlogin,
        showLogin : showLogin,
        showMenuInicio : showMenuInicio,
        showNav : showNav,
        showEmptyNav : showEmptyNav,
        guardarCambiosTractora : guardarCambiosTractora,
        guardarCambiosTractoraFinanciacion : guardarCambiosTractoraFinanciacion,
        showTractoraFichaEditable : showTractoraFichaEditable,
        showTractoraFichaFinanciacionEditable : showTractoraFichaFinanciacionEditable,
        borrarTractora : borrarTractora,
        nuevaTractora : nuevaTractora,
        crearNuevaTractora : crearNuevaTractora
    };
})();
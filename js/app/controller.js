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

        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.Pedir.getMantenimientosTractora(function(mantenimientos, textStatus, jqXHR){
                APP.UI.mostrarMantenimientosTractora(tractora,mantenimientos,'mantenimientos-datos','not');
            }, e.target.dataset.idtractora);
        }, e.target.dataset.idtractora);
    };

    var showTractoraFichaMantenimientosEditable = function(e){
        console.log('showTractoraFichaMantenimientosEditable');
        console.log(e);
        APP.UI.mostrarActivo(this);

        APP.Pedir.getTractora(function(tractora, textStatus, jqXHR){
            APP.Pedir.getMantenimientosTractora(function(mantenimientos, textStatus, jqXHR){
                APP.UI.mostrarMantenimientosTractora(tractora,mantenimientos,'ficha-tractora-editable-mantenimiento','not');
            }, e.target.dataset.id);
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


    var showTractoraFichaSeguros = function(e){
        console.log('showTractoraFichaSeguros');
        console.log(e);
        APP.UI.mostrarActivo(this);

        APP.Pedir.getSegurosObligatoriosTractora(function(segurosObligatorios, textStatus, jqXHR){
            APP.Pedir.getSegurosTodoRiesgoTractora(function(segurosTodoRiesgo, textStatus, jqXHR){
                APP.Pedir.getAseguradorasPHP(function(aseguradoras, textStatus, jqXHR){
                    APP.UI.mostrarSegurosTractora(e.target.dataset.idtractora,aseguradoras,segurosObligatorios,segurosTodoRiesgo,'seguros','not');
                },'Nombre,IdAseguradora');
            }, e.target.dataset.idtractora);
        }, e.target.dataset.idtractora);
    };

    var showTractoraFichaSegurosEditable = function(e){
        console.log('showTractoraFichaSegurosEditable');
        console.log(e);
        APP.UI.mostrarActivo(this);

        APP.Pedir.getSegurosObligatoriosTractora(function(segurosObligatorios, textStatus, jqXHR){
            APP.Pedir.getSegurosTodoRiesgoTractora(function(segurosTodoRiesgo, textStatus, jqXHR){
                APP.Pedir.getAseguradorasPHP(function(aseguradoras, textStatus, jqXHR){
                    APP.UI.mostrarSegurosTractora(e.target.dataset.id,aseguradoras,segurosObligatorios,segurosTodoRiesgo,'seguros-editable','editing');
                },'Nombre,IdAseguradora');
            }, e.target.dataset.id);
        }, e.target.dataset.id);
    };

    var showRemolqueFichaSeguros = function(e){
        console.log('showRemolqueFichaSeguros');
        console.log(e);
        APP.UI.mostrarActivo(this);

        APP.Pedir.getSegurosObligatoriosRemolque(function(segurosObligatorios, textStatus, jqXHR){
            APP.Pedir.getSegurosTodoRiesgoRemolque(function(segurosTodoRiesgo, textStatus, jqXHR){
                APP.UI.mostrarSegurosRemolque(segurosObligatorios,segurosTodoRiesgo,'seguros','not');
            }, e.target.dataset.idremolque);
        }, e.target.dataset.idremolque);
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

    var guardarCambiosTractoraMantenimientos = function(e){
        console.log('guardarCambiosTractoraMantenimientos');
        console.log(e);


        var r=confirm("¿Está seguro que quiere guardar los cambios?");
        var x;
        if (r==true)
          {
          x="You pressed OK!";
          //Actualizar en bbbd
          APP.Pedir.updateTractoraMantenimiento(function(tractora, textStatus, jqXHR){
            //comprobar tractora con if
            showTractoraFichaMantenimientos(e);
            });

          }
        else
          {
          x="You pressed Cancel!";
          showTractoraFichaMantenimientos(e);
          }
    };

    var guardarCambiosTractoraSeguros = function(e){
        console.log('guardarCambiosTractoraSeguros');
        console.log(e);


        var r=confirm("¿Está seguro que quiere guardar los cambios?");
        var x;
        if (r==true)
          {
          x="You pressed OK!";
          //Actualizar en bbbd
          APP.Pedir.updateTractoraSeguros(function(tractora, textStatus, jqXHR){
            //comprobar tractora con if
            });
          }
        else
          {
          x="You pressed Cancel!";
          }
        showTractoraFichaSeguros(e);
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

    var showTractoraFichaMantenimiento = function(e){
        console.log('showTractoraFichaMantenimiento');
        console.log(e);

        if (e.target.dataset.tipo === '0')
        {
            console.log('tipo 0');
            showTractoraFichaMantenimientoRuedas(e);
        };
        if (e.target.dataset.tipo === '1')
        {
            console.log('tipo 1');
            showTractoraFichaMantenimientoCarroceria(e);
        };
        if (e.target.dataset.tipo === '2')
        {
            console.log('tipo 2');
            showTractoraFichaMantenimientoOtros(e);
        };
    };

    var showTractoraFichaMantenimientoRuedas = function(e){
        console.log('showTractoraFichaMantenimientoRuedas');

        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientoTractoraRuedas(function(mantenimientos, textStatus, jqXHR){
            console.log('mantenimientos');
            console.log(mantenimientos);
            var respuesta = JSON.parse(jqXHR.responseText);

            APP.UI.mostrarTractoraMantenimientoRuedas(respuesta,'mantenimiento-tractora-ruedas','not');
        },e.target.dataset.id);
    };

    var showTractoraFichaMantenimientoCarroceria = function(e){
        console.log('showTractoraFichaMantenimientoCarroceria');

        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientoTractoraCarroceria(function(mantenimiento, textStatus, jqXHR){
            console.log('mantenimiento');
            console.log(mantenimiento);
            var respuesta = JSON.parse(jqXHR.responseText);

            console.log(respuesta);

            console.log(respuesta[0].Id);
            if (respuesta[0].Id == undefined)
            {
                APP.UI.mostrarError('error');
            }
            else
            {
                APP.UI.mostrarTractoraMantenimientoCarroceria(respuesta,'mantenimiento-carroceria','not');
            }
        },e.target.dataset.id);
    };

    var showTractoraFichaMantenimientoOtros = function(e){
        console.log('showTractoraFichaMantenimientoOtros');

        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientoTractoraOtros(function(mantenimiento, textStatus, jqXHR){
            console.log('mantenimiento');
            console.log(mantenimiento);
            var respuesta = JSON.parse(jqXHR.responseText);

            APP.UI.mostrarTractoraMantenimientoOtros(respuesta,'mantenimiento-tractora-otros','not');
        },e.target.dataset.id);
    };





    var showRemolques = function(){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getRemolquesPHP(function(remolques, textStatus, jqXHR){
            console.log(remolques);
            var respuesta = JSON.parse(jqXHR.responseText);
            APP.UI.mostrarRemolques(respuesta);
        });

    };

    var showRemolqueFichaDatosGenerales = function(e){
        console.log('showRemolqueFichaDatosGenerales');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getRemolque(function(remolque, textStatus, jqXHR){
            APP.UI.mostrarRemolqueFichaDatosGenerales(remolque,'ficha-remolque-datos-generales','not');
        }, e.target.dataset.idremolque);
    };

    var showRemolqueFichaFinanciacion = function(e){
        console.log('showRemolqueFichaFinanciacion');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getRemolque(function(remolque, textStatus, jqXHR){
            APP.UI.mostrarRemolqueFichaFinanciacion(remolque,'ficha-remolque-financiacion','not');
        }, e.target.dataset.idremolque);
    };

    var showRemolqueFichaMantenimientos = function(e){
        console.log('showRemolqueFichaMantenimientos');
        console.log(e);
        APP.UI.mostrarActivo(this);

        APP.Pedir.getMantenimientosRemolque(function(mantenimientos, textStatus, jqXHR){
            APP.UI.mostrarMantenimientosRemolque(mantenimientos,'mantenimientos-remolques','not');
        }, e.target.dataset.idremolque);

    };

    var showRemolqueFichaMantenimiento = function(e){
        console.log('showRemolqueFichaMantenimiento');
        console.log(e);

        if (e.target.dataset.tipo === '0')
        {
            console.log('tipo 0');
            showRemolqueFichaMantenimientoRuedas(e);
        };
        if (e.target.dataset.tipo === '1')
        {
            console.log('tipo 1');
            showRemolqueFichaMantenimientoLonas(e);
        };
        if (e.target.dataset.tipo === '2')
        {
            console.log('tipo 2');
            showRemolqueFichaMantenimientoCarroceria(e);
        };
        if (e.target.dataset.tipo === '3')
        {
            console.log('tipo 3');
            showRemolqueFichaMantenimientoFrenos(e);
        };
        if (e.target.dataset.tipo === '4')
        {
            console.log('tipo 4');
            showRemolqueFichaMantenimientoEquipamiento(e);
        };
    };


    var showRemolqueFichaMantenimientoRuedas = function(e){
        console.log('showRemolqueFichaMantenimientoRuedas');

        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientoRemolqueRuedas(function(mantenimiento, textStatus, jqXHR){
            console.log('mantenimiento');
            console.log(mantenimiento);
            var respuesta = JSON.parse(jqXHR.responseText);

            APP.UI.mostrarRemolqueMantenimientoRuedas(respuesta,'mantenimiento-remolque-ruedas','not');
        },e.target.dataset.id);
    };

    var showRemolqueFichaMantenimientoFrenos = function(e){
        console.log('showRemolqueFichaMantenimientoFrenos');

        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientoRemolqueFrenos(function(mantenimiento, textStatus, jqXHR){
            console.log('mantenimiento');
            console.log(mantenimiento);
            var respuesta = JSON.parse(jqXHR.responseText);

            console.log(respuesta);

            console.log(respuesta[0].Id);
            if (respuesta[0].Id == undefined)
            {
                APP.UI.mostrarError('error');
            }
            else
            {
                APP.UI.mostrarRemolqueMantenimientoFrenos(respuesta,'mantenimiento-remolque-frenos','not');
            }
        },e.target.dataset.id);
    };


    var showRemolqueFichaMantenimientoEquipamiento = function(e){
        console.log('showRemolqueFichaMantenimientoEquipamiento');

        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientoRemolqueEquipamiento(function(mantenimiento, textStatus, jqXHR){
            console.log('mantenimiento');
            console.log(mantenimiento);
            var respuesta = JSON.parse(jqXHR.responseText);

            console.log(respuesta);

            console.log(respuesta[0].Id);
            if (respuesta[0].Id == undefined)
            {
                APP.UI.mostrarError('error');
            }
            else
            {
                APP.UI.mostrarRemolqueMantenimientoEquipamiento(respuesta,'mantenimiento-remolque-equipamiento','not');
            }
        },e.target.dataset.id);
    };

    var showRemolqueFichaMantenimientoLonas = function(e){
        console.log('showRemolqueFichaMantenimientoLonas');

        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientoRemolqueLonas(function(mantenimiento, textStatus, jqXHR){
            console.log('mantenimiento');
            console.log(mantenimiento);
            var respuesta = JSON.parse(jqXHR.responseText);

            console.log(respuesta);

            console.log(respuesta[0].Id);
            if (respuesta[0].Id == undefined)
            {
                APP.UI.mostrarError('error');
            }
            else
            {
                APP.UI.mostrarRemolqueMantenimientoLonas(respuesta,'mantenimiento-remolque-lonas','not');
            }
        },e.target.dataset.id);
    };


    var showRemolqueFichaMantenimientoCarroceria = function(e){
        console.log('showRemolqueFichaMantenimientoCarroceria');

        APP.UI.mostrarActivo(this);
        APP.Pedir.getMantenimientoRemolqueCarroceria(function(mantenimiento, textStatus, jqXHR){
            console.log('mantenimiento');
            console.log(mantenimiento);
            var respuesta = JSON.parse(jqXHR.responseText);

            console.log(respuesta);

            console.log(respuesta[0].Id);
            if (respuesta[0].Id == undefined)
            {
                APP.UI.mostrarError('error');
            }
            else
            {
                APP.UI.mostrarRemolqueMantenimientoCarroceria(respuesta,'mantenimiento-remolque-carroceria','not');
            }
        },e.target.dataset.id);
    };




    var showTalleres = function(){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTalleresPHP(function(talleres, textStatus, jqXHR){
            var respuesta = JSON.parse(jqXHR.responseText);
            APP.UI.mostrarTalleres(respuesta);
        });
    };

    var showTallerFicha = function(e){
        console.log('showTallerFicha');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getTaller(function(taller, textStatus, jqXHR){
            APP.UI.mostrarTallerFicha(taller);
        }, e.target.dataset.id);
    };




    var showAseguradoras = function(){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getAseguradorasPHP(function(aseguradoras, textStatus, jqXHR){
            var respuesta = JSON.parse(jqXHR.responseText);
            APP.UI.mostrarAseguradoras(respuesta);
        });
    };

    var showAseguradoraFicha = function(e){
        console.log('showAseguradoraFicha');
        APP.UI.mostrarActivo(this);
        APP.Pedir.getAseguradora(function(aseguradora, textStatus, jqXHR){
            APP.UI.mostrarAseguradoraFicha(aseguradora);
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
        if (aux==='3') {
            console.log('case 3');
            showTractoraFichaSeguros(e);
        }
    };

    var showCambioPestanaRemolques = function(e){
        console.log('showCambioPestanaRemolques');
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
          APP.Pedir.updateRemolque(function(remolque, textStatus, jqXHR){

            });
          }
      }
        if (aux === '0') {
            console.log('case 0');
            showRemolqueFichaDatosGenerales(e);
        }
        if (aux==='1') {
            console.log('case 1');
            showRemolqueFichaFinanciacion(e);
        }
        if (aux==='2') {
            console.log('case 2');
            showRemolqueFichaMantenimientos(e);
        }
        if (aux==='3') {
            console.log('case 3');
            showRemolqueFichaSeguros(e);
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
        showTractoraFichaDatosGenerales : showTractoraFichaDatosGenerales,
        showTractoraFichaFinanciacion : showTractoraFichaFinanciacion,
        showTractoraFichaMantenimientos : showTractoraFichaMantenimientos,
        showTractoraFichaSeguros : showTractoraFichaSeguros,
        showMantenimientosTractora : showMantenimientosTractora,
        guardarCambiosTractora : guardarCambiosTractora,
        guardarCambiosTractoraFinanciacion : guardarCambiosTractoraFinanciacion,
        guardarCambiosTractoraMantenimientos : guardarCambiosTractoraMantenimientos,
        guardarCambiosTractoraSeguros : guardarCambiosTractoraSeguros,
        showTractoraFichaEditable : showTractoraFichaEditable,
        showTractoraFichaFinanciacionEditable : showTractoraFichaFinanciacionEditable,
        showTractoraFichaMantenimientosEditable : showTractoraFichaMantenimientosEditable,
        showTractoraFichaSegurosEditable : showTractoraFichaSegurosEditable,
        borrarTractora : borrarTractora,
        nuevaTractora : nuevaTractora,
        crearNuevaTractora : crearNuevaTractora,
        showTractoraFichaMantenimiento : showTractoraFichaMantenimiento,
        showTractoraFichaMantenimientoRuedas : showTractoraFichaMantenimientoRuedas,
        showTractoraFichaMantenimientoCarroceria : showTractoraFichaMantenimientoCarroceria,
        showTractoraFichaMantenimientoOtros : showTractoraFichaMantenimientoOtros,

        showRemolqueFichaDatosGenerales : showRemolqueFichaDatosGenerales,
        showRemolqueFichaFinanciacion : showRemolqueFichaFinanciacion,
        showRemolqueFichaMantenimientos : showRemolqueFichaMantenimientos,
        showRemolqueFichaMantenimiento : showRemolqueFichaMantenimiento,
        showRemolques : showRemolques,

        showTallerFicha :showTallerFicha,
        showTalleres : showTalleres,

        showAseguradoraFicha : showAseguradoraFicha,
        showAseguradoras : showAseguradoras,

        showCambioPestana : showCambioPestana,
        showCambioPestanaRemolques : showCambioPestanaRemolques,

        login : login,
        unlogin : unlogin,
        showLogin : showLogin,
        showMenuInicio : showMenuInicio,

        showNav : showNav,
        showEmptyNav : showEmptyNav
    };
})();
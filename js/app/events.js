    $(function(){
        "use strict";

        $(document).on('click', '#botoninicio', APP.Controller.showMenuInicio);
        $(document).on('click', '#tractoras', APP.Controller.showTractoras);
        $(document).on('click', '#remolques', APP.Controller.showRemolques);
        $(document).on('click', '#talleres', APP.Controller.showTalleres);
        $(document).on('click', '#aseguradoras', APP.Controller.showAseguradoras);
        $(document).on('click', '#listadoTractoras .btn-ficha', APP.Controller.showTractoraFichaDatosGenerales);
        $(document).on('click', '#listadoTractoras .btn-borrar', APP.Controller.borrarTractora);
        $(document).on('click', '#nuevaTractoraBtn', APP.Controller.nuevaTractora);
        $(document).on('click', '#listadoRemolques .btn', APP.Controller.showRemolqueFicha);
        $(document).on('click', '#listadoTalleres .btn', APP.Controller.showTallerFicha);
        $(document).on('click', '#listadoAseguradoras .btn', APP.Controller.showAseguradoraFicha);
        $(document).on('click', '#modificarTractoraBtn', APP.Controller.showModificarDatosTractora);
        $(document).on('click', '#guardarTractoraBtn', APP.Controller.crearNuevaTractora);
        $(document).on('click', '#menutractora li', APP.Controller.showCambioPestana);
        $(document).on('click', '#botonLogin', APP.Controller.login);
        $(document).on('click', '#sessionLogOut', APP.Controller.unlogin);
        $(document).on('click', '#guardarCambiosTractoraBtn', APP.Controller.guardarCambiosTractora);
        $(document).on('click', '#guardarCambiosTractoraFinanciacionBtn', APP.Controller.guardarCambiosTractoraFinanciacion);
        $(document).on('click', '#editarTractoraBtn', APP.Controller.showTractoraFichaEditable);
        $(document).on('click', '#editarTractoraFinanciacionBtn', APP.Controller.showTractoraFichaFinanciacionEditable);
        $(document).on('click', '#volverListaBtn', APP.Controller.showTractoras);
        $(document).on('click', '#volverListaDesdeFinanciacionBtn', APP.Controller.showTractoras);
        $(document).on('click', '#cancelEditBtn', APP.Controller.showTractoraFichaDatosGenerales);
        $(document).on('click', '#cancelEditFinanciacionBtn', APP.Controller.showTractoraFichaFinanciacion);

    });

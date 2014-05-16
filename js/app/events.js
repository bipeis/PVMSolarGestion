    $(function(){
        "use strict";

        $(document).on('click', '#botoninicio', APP.Controller.showMenuInicio);

        $(document).on('click', '#tractoras', APP.Controller.showTractoras);
        $(document).on('click', '#listadoTractoras .btn-ficha', APP.Controller.showTractoraFichaDatosGenerales);
        $(document).on('click', '#listadoTractoras .btn-borrar', APP.Controller.borrarTractora);
        $(document).on('click', '#nuevaTractoraBtn', APP.Controller.nuevaTractora);
        $(document).on('click', '#modificarTractoraBtn', APP.Controller.showModificarDatosTractora);
        $(document).on('click', '#guardarTractoraBtn', APP.Controller.crearNuevaTractora);
        $(document).on('click', '#guardarCambiosTractoraBtn', APP.Controller.guardarCambiosTractora);
        $(document).on('click', '#guardarCambiosTractoraFinanciacionBtn', APP.Controller.guardarCambiosTractoraFinanciacion);
        $(document).on('click', '#guardarCambiosTractoraMantenimientosBtn', APP.Controller.guardarCambiosTractoraMantenimientos);
        $(document).on('click', '#guardarCambiosTractoraSegurosBtn', APP.Controller.guardarCambiosTractoraSeguros);
        $(document).on('click', '#editarTractoraBtn', APP.Controller.showTractoraFichaEditable);
        $(document).on('click', '#editarTractoraFinanciacionBtn', APP.Controller.showTractoraFichaFinanciacionEditable);
        $(document).on('click', '#editarTractoraMantenimientosBtn', APP.Controller.showTractoraFichaMantenimientosEditable);
        $(document).on('click', '#editarTractoraSegurosBtn', APP.Controller.showTractoraFichaSegurosEditable);
        $(document).on('click', '#volverListaTractorasBtn', APP.Controller.showTractoras);
        $(document).on('click', '#menutractora li', APP.Controller.showCambioPestana);
        $(document).on('click', '#cancelEditBtn', APP.Controller.showTractoraFichaDatosGenerales);
        $(document).on('click', '#cancelEditFinanciacionBtn', APP.Controller.showTractoraFichaFinanciacion);
        $(document).on('click', '#cancelEditSegurosBtn', APP.Controller.showTractoraFichaSeguros);
        $(document).on('click', '#listadoMantenimientosTractora .btn-ficha', APP.Controller.showTractoraFichaMantenimiento);

        $(document).on('click', '#remolques', APP.Controller.showRemolques);
        $(document).on('click', '#listadoRemolques .btn', APP.Controller.showRemolqueFichaDatosGenerales);
        $(document).on('click', '#menuremolque li', APP.Controller.showCambioPestanaRemolques);
        $(document).on('click', '#listadoMantenimientosRemolque .btn-ficha', APP.Controller.showRemolqueFichaMantenimiento);

        $(document).on('click', '#talleres', APP.Controller.showTalleres);

        $(document).on('click', '#aseguradoras', APP.Controller.showAseguradoras);
        $(document).on('click', '#listadoAseguradoras .btn', APP.Controller.showAseguradoraFicha);

        $(document).on('click', '#listadoTalleres .btn', APP.Controller.showTallerFicha);

        $(document).on('click', '#botonLogin', APP.Controller.login);
        $(document).on('click', '#sessionLogOut', APP.Controller.unlogin);
    });

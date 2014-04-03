    $(function(){
        "use strict";

        $(document).on('click', '#tractoras', APP.Controller.showTractoras);
        $(document).on('click', '#remolques', APP.Controller.showRemolques);
        $(document).on('click', '#talleres', APP.Controller.showTalleres);
        $(document).on('click', '#aseguradoras', APP.Controller.showAseguradoras);
        $(document).on('click', '#listadoTractoras .btn', APP.Controller.showTractoraFicha);
        $(document).on('click', '#listadoRemolques .btn', APP.Controller.showRemolqueFicha);
        $(document).on('click', '#listadoTalleres .btn', APP.Controller.showTallerFicha);
        $(document).on('click', '#listadoAseguradoras .btn', APP.Controller.showAseguradoraFicha);


    });

    $(function(){
        "use strict";

        $(document).on('click', '#tractoras', APP.Controller.showTractoras);
        $(document).on('click', '#remolques', APP.Controller.showRemolques);
        $(document).on('click', '#talleres', APP.Controller.showTractoras);
        $(document).on('click', '#aseguradoras', APP.Controller.showRemolque);
        $(document).on('click', '#listadoTractoras .btn', APP.Controller.showTractoraFicha);


    });

    $(function(){
    "use strict";

    //Modernizr
    console.log(Modernizr);

    for (var i in Modernizr.inputtypes) {

    	console.log(i + " : " + Modernizr.inputtypes[i]);
    }

    console.log("placeholder : " + Modernizr.input.placeholder);
    console.log("progressbar : " + Modernizr.progressbar);

    Modernizr.addTest({
    	test: Modernizr.input.placeholder,
    	//yep : 'geo.js',
    	nope: '../vendor/placeholder_polyfill.jquery.js'
    });

    if(Modernizr.geolocation) {
        console.log('El explorador soporta geolocalización');
    } else {
        console.log('El explorador NO soporta geolocalización');
    }

    //sesion usuario
    var usuarioSesion = sessionStorage.getItem('usuario');
    var usuarioLocal = localStorage.getItem('usuario');

    if (usuarioLocal == null){
        if (usuarioSesion == null){
            console.log("no hay usuarios guardados");
            //pintar login
            APP.Controller.showLogin();
        }
        else{

            console.log("usuarioSesion");
            console.log(usuarioSesion);
            console.log(document.getElementById("usuarioMenu"));
            //pintar menu inicio
            APP.Controller.showMenuInicio(usuarioSesion);
        }
    }
    else{

            console.log("usuarioLocal");
            //pintar menu inicio
            APP.Controller.showMenuInicio(usuarioLocal);
    }


});
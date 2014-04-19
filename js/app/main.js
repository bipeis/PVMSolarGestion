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
        }
        else{
            document.getElementById("usuarioMenu").value = usuarioSesion;
            console.log("usuarioSesion");
            console.log(usuarioSesion);
        }
    }
    else{
            document.getElementById("usuarioMenu").value = usuarioLocal;
            console.log("usuarioLocal");
    }


});
/*
    Responsable responsive web design con js
    
    Creamos una funcion que recibira como parametros:
        elementId: id del elemento html donde se insertara el contenido dinamicamente
        mediaQuery: media query para detectar cuando se cargara el contenido desktop o mobile
        desktopContent: contenido html que se cargara en la version desktop
        mobileContent: contenido html que se cargara en la version mobile
*/

export function responsiveDesign(elementID, mediaQy, desktopCt, mobileCt){

    //cargamos el elemento html donde vamos a añadir el contenido html dinamicamente
    const htmlEl = document.getElementById(elementID);

    //creamos un objeto de tipo matchMedia con la mediaQuery que recibimos como parametro
    const mediaQuery = window.matchMedia(mediaQy);

    // console.log(mediaQuery);
    
    
    //creamos una funcion que llamaremos despues dentro de un listener y al inicio para que se
    //ejecute
    //en esta funcion verificaremos si nuestra media query coincide con la que se
    //encuentre actualmente en el dispositivo
    //en este caso si la minima anchura del vw del dispositivo es de 1024px mostraremos el contenido desktop
    //en caso contrario si es menor de 1024px mostraremos el contenido movil
    
    const responsive = e =>{
        if(e.matches){
            console.log(desktopCt);
            htmlEl.innerHTML = desktopCt;
        }
        else{
            console.log(mobileCt)
            htmlEl.innerHTML = mobileCt;
        }
    }

    // añadimos un listener de tipo onchange al objeto matchmedia  para saber cuando se activa la media query
    mediaQuery.addEventListener("change", responsive);


    //ejecutamos la funcion para que siempre al cargar lapagina se detecte que tipo de elementos html cargar
    responsive(mediaQuery);

    


}
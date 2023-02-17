import hamburgerMenu from "./aside-menu.js";
import clock from "../my-scripts/clock-module.js";
import alarm from "../my-scripts/alarm-module.js";
import { moveBall } from "../my-scripts/ball-module.js";
import { shortcuts } from "./teclado-module.js";
import countdown from "../script/countdownn-module.js";
import backToTop from "../my-scripts/backToTop-module.js";
import darkMode from "../my-scripts/darkMode-module.js"
import { responsiveDesign } from "./responsive-module.js";

document.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu(".aside-btn",".aside-container",".menu-op");

    clock("#clock-text", "#run-clock", "#stop-clock");

    alarm("#alarm-audio", "#run-alarm", "#stop-alarm");

    countdown("birth-date","Nov 20, 2023 00:00:00","Feliz CUM");

    backToTop(".top-button");
    
    // responsiveDesign("youtube","(min-width: 1024px)","Escritorio","Movil");

    //llamada a la funcion para mostrar el vido de youtube
    responsiveDesign(
        "youtube",
        "(min-width: 1024px)",
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/roWyBNEl_YI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        `<a href="https://www.youtube.com/embed/roWyBNEl_YI" target="_blank">Abrir video</a>`
    )

    //llamada al al funcion para mostrar el iframe del mapa

    responsiveDesign(
        `gmap`,
        `(min-width: 1024px)`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1578.6196539327264!2d-99.28311097430438!3d19.586580635336592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21b8b0816e26d%3A0xeb55c388d560f5b6!2sCentro%20Universitario%20UAEM%20Valle%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1676602392649!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        `<a href="https://goo.gl/maps/HrMCpvcAAffh2TwZA" target="_blank">Abrir mapa</a>`
    );

})

document.addEventListener("keydown", e=>{
    // shortcuts(e);
    moveBall(e,".ball",".board")
})


darkMode(".dark-mode-btn","data-dark", "dark-mode");    



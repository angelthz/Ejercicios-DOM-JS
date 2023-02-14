import hamburgerMenu from "./aside-menu.js";
import clock from "../my-scripts/clock-module.js";
import alarm from "../my-scripts/alarm-module.js";
import { moveBall } from "../my-scripts/ball-module.js";
import { shortcuts } from "./teclado-module.js";
import countdown from "../script/countdownn-module.js";
import backToTop from "../my-scripts/backToTop-module.js";
import darkMode from "../my-scripts/darkMode-module.js"

document.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu(".aside-btn",".aside-container",".menu-op");

    clock("#clock-text", "#run-clock", "#stop-clock");

    alarm("#alarm-audio", "#run-alarm", "#stop-alarm");

    countdown("birth-date","Nov 20, 2023 00:00:00","Feliz CUM");

    backToTop(".top-button");

})

document.addEventListener("keydown", e=>{
    // shortcuts(e);
    moveBall(e,".ball",".board")
})


darkMode(".dark-mode-btn","data-dark", "dark-mode");    



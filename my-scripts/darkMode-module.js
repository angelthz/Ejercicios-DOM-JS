export default function darkMode(darkModeBtn, darkItemsSelector, darkName) {

    const d = document;
    // const darkBtn = document.querySelector(darkModeBtn);
    const icon = document.querySelector(darkModeBtn).firstElementChild;
    const darkitems = document.querySelectorAll(`[${darkItemsSelector}]`);

    // console.log(darkitems)
    // console.log(document.querySelector(darkModeBtn).firstElementChild);

    const darkMode = () => {
        icon.textContent = "light_mode";

        darkitems.forEach((item) => {
            item.classList.add(darkName);
        });

        localStorage.setItem("theme","dark");
    };

    const lightMode = () => {
        icon.textContent = "dark_mode";

        darkitems.forEach((item) => {
            item.classList.remove(darkName);
        });

        localStorage.setItem("theme","light");
    };

    d.addEventListener("click", (e) => {
        if (e.target.matches(darkModeBtn) || e.target.matches(`${darkModeBtn} *`)) {
            if (icon.textContent === "dark_mode")
                darkMode();
            else
                lightMode();
        }
    });

    d.addEventListener("DOMContentLoaded", e=>{
        //creamos una variable con localstorage
        if(localStorage.getItem("theme") === null){
            console.log("no se ha creado aun")
            localStorage.setItem("theme", "light");
        }

        //verificamos el valor de la variable almacenada en el localstorage
        if(localStorage.getItem("theme") === "light")
            lightMode();
        
        if(localStorage.getItem("theme") === "dark")
            darkMode();

    })
}



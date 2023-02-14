export default function hamburgerMenu(asideBtn, asideMenu, menuItems){
    //almacenamos en una variable el documentElement
    //para hacer la delegacion de eventos
    const doc = document;

    //vamos a delegar el evento click al document
    doc.addEventListener("click", e=>{
        //como ahora el evento click lo tiene el document globalr
        //
        if(e.target.matches(asideBtn) || e.target.matches(`${asideBtn} *`)){
            console.log("hello");
            document.querySelector(asideMenu).classList.toggle("is-active");
            document.querySelector(asideBtn).classList.toggle("is-active");
        }

        if(e.target.matches(menuItems)){
            document.querySelector(asideMenu).classList.remove("is-active");
            document.querySelector(asideBtn).classList.remove("is-active");
        }
    });
}
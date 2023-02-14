/*
    Name: backToTop
    Desc: Asigna a un boton la accion de hacer scroll hasta la parte superior de la pag
    args: 
        topBtn: selector css del boton
*/
export default function backToTop(topBtn){
    //query del btn
    const btn = document.querySelector(topBtn);
    // const menu = document.querySelector(asideMenu);

    //agregar los listeners
    const d = document;

    d.addEventListener("scroll", e=>{
        if( (window.pageYOffset + 150) > document.documentElement.clientHeight){
            // console.log("mostrar btn")
            btn.classList.add("top-button-is-active");
        }
        else{
            // console.log("esconder");
            btn.classList.remove("top-button-is-active");
        }
    })

    d.addEventListener("click", e=>{
        if(e.target.matches(topBtn) || e.target.matches(`${topBtn} *`) ){
            window.scroll(0,0);
        }
    })
}


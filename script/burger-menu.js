const asideMenu = document.getElementById("aside-menu");
const menuBtn = document.getElementById("aside-btn");
const asideItems = document.querySelectorAll(".menu-op");


// for(let i = 0; i < asideMenu.clientHeight;)

function hideAsideMenu(btn, asideMn){
    btn.addEventListener("click",e => {
        // asideMenu.style.setProperty("transform","translateX(0)");
        asideMn.classList.toggle("show-aside-menu");
    });
}


asideItems.forEach(el =>{
    el.addEventListener("click", e=>{
        asideMenu.classList.toggle("show-aside-menu"); 
    })
});

menuBtn.addEventListener("click",e => {
    // asideMenu.style.setProperty("transform","translateX(0)");
    asideMenu.classList.toggle("show-aside-menu");
});

// //llamando funciones
// hideMenu(menuBtn, asideMenu);
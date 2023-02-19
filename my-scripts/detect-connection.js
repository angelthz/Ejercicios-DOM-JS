export default function detectConnection(htmlEl){
    const d = document;
    const htmlCont = document.querySelector(htmlEl);
    
    console.log(htmlCont)
    
    window.addEventListener("online", e =>{
        console.log("Conectado ",window.navigator.onLine);
        htmlCont.innerHTML = `
            <div class="connection-msg">
                <span class="conn-on connection-header material-icons md-48">wifi</span>
                <h2 class="connection-status">Conexion Restablecida</h2>
            </div>
            `;
        setTimeout(() => {
            htmlCont.classList.add("connection-hide");
        }, 800);
    })

    window.addEventListener("offline", e =>{
        console.log("Desconectado ",window.navigator.onLine);
        
        htmlCont.innerHTML = `
            <div class="connection-msg">
                <span class="conn-off connection-header material-icons md-48">wifi_off</span>
                <h2 class="connection-status">Conexion Perdida</h2>
            </div>
        `;
        htmlCont.classList.remove("connection-hide");
    })
}


export default function userDeviceInfo(ele){
    const d = document;
    const ua = window.navigator.userAgent;
    const elContent = document.getElementById(ele);
    // console.log(elContent)

    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function(){
            return this.android() || this.ios() || this.windows();
        }
    } 
    const isDesktop =  {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function(){
            return this.linux() || this.mac() || this.windows();
        }
    }

    const isBrowser = {
        chrome: ()=> ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera/i),
        edge: () => ua.match(/edge/i),
        any: function(){
           return this.chrome() || this.safari() || this.firefox() || this.opera() || this.edge || this.edge(); 
        }
    }
    // console.log(isMobile.any())


    elContent.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: 
                <b>
                ${isMobile.any()?isMobile.any():isDesktop.any()}
                </b>
            </li>
            <li>Navegador: 
                <b>
                ${isBrowser.any()}
                </b>
            </li>
        </ul>
    `;

    //contenido exclusivo
    if(isBrowser.chrome()){
        elContent.innerHTML += `
            <p><mark>Contenido exclusivo para Chrome</mark></p>
        `;
    }
    if(isBrowser.firefox()){
        elContent.innerHTML += `
            <p><mark>Contenido exclusivo para Firefox</mark></p>
        `;
    }
    if(isBrowser.edge()){
        elContent.innerHTML += `
            <p><mark>Contenido exclusivo para EDGE</mark></p>
        `;
    }


    if(isDesktop.windows()){
        elContent.innerHTML += `
            <p><mark>Descarga nuestro software para WINDOWS</mark></p>
        `;
    }

    //REDIRECCION
    if(isMobile.android()){
        window.location.href = "https://www.google.com/";
    }
}
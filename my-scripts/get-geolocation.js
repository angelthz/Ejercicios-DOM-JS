
export default function getGeoLocation(elementSel){
    const d = document;
    const n = window.navigator;
    const htmlEl = document.querySelector(elementSel)    ;
    // console.log(htmlEl)
    const options = {
        //forzar al dispositivo a obtener la mejor presicion
        enableHighAccuracy: true,
        //tiempo de espera para esperar la respuesta
        timeout: 3000,
        //evita el cache de las lecturas
        maximumAge: 0
    }

    const getInfo = (pos) =>{
        console.log(pos.coords);
        console.log(`
            Longitud: ${pos.coords.latitude}
            Latitud: ${pos.coords.longitude}
            Altitud: ${pos.coords.altitude}`)
        console.log(pos.coords.accuracy);
        // console.log(`${info.coords.latitude}%2C${info.coords.longitude}`)
        console.log(`https://www.google.com/maps/search/?api=1&query=${pos.coords.latitude}%2C${pos.coords.longitude}`)

        htmlEl.innerHTML += `
            <p>Latitud: <b>${pos.coords.latitude}</b></p>
            <p>Longitud: <b>${pos.coords.longitude}</b></p>
            <p>Altitud: <b>${pos.coords.altitude}</b></p>
            <p>Presicion: <b>${pos.coords.accuracy} metros</b></p>
            <a href="https://www.google.com/maps/search/?api=1&query=${pos.coords.latitude}%2C${pos.coords.longitude}" target="blank">Abrir ubicacion en Maps</a>
        `;

    }

    const getErrors = err =>{
        console.log(err.message);
        htmlEl.innerHTML += `
            <p>Ha sucedido el siguiente errror: <mark>${err.message}</mark></p>
        `;
    };

    n.geolocation.getCurrentPosition(getInfo, getErrors, options);
    // htmlEl.innerHTML += `<p>Hola</p>`;

}


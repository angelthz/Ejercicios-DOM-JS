/*
    Necesitamos como parametros el selector de la etiqueta video
    que mostrara nuestra webcam

*/
const d = document;
const n = window.navigator;

export default function webcamDetection(videoSel){
    //elemento de tipo video
    const videoEl = document.getElementById(videoSel);
    //objeto con las caracteristicas de nuestro streamMedia
    const videoRequest = {
        audio: false,
        video: true
    }
   

    //verificamos si existe el objeto mediaDevises.getUserMedia
    if(n.mediaDevices.getUserMedia) {

        //impresion del objeto mediaDevices.getUserMedia
    //   console.log(n.mediaDevices.getUserMedia);
        //listamos todos los dispositivos de medios con la promise enumerateDevices()
        // console.log(n.mediaDevices.enumerateDevices().then(info => console.log(info)));

        //Si existe accederemos a la webcam y la mostraremos en nuestro documento html
        //a la promesa getUserMedia, le pasamos como parametro un objeto con las caracteristicas
        //a las cuales queremos acceder de los m edios, en este caso nuestro objeto videoRequest linea(12)
        //establece el acceso solamente a la camara

        n.mediaDevices.getUserMedia(videoRequest)
        .then((stream)=>{
            //si la promesa se resuelve satisfactoriamente nos devuelve un objeto mediaStream

            //el objeto mediaStream es un flujo de datos que contiene lo que este capturando la camara
            console.log(stream);
            //establecemos el streamMedia como source de nuestro elemento de video html
            videoEl.srcObject = stream;
            //para que se reproduzca el video de la camara capturado ejecutamos el metodo play
            //del elemento html, recordando que el elemento video de html puede ejecutarlo para reproducir medios
            videoEl.play();
        })
        .catch((err)=>{
            //si la promesa no se resuelve se generara un error
            //asi que imprimmos y mostramos el error que haya ocurrido
            // console.log(`Ocurrio el siguiente error: ${err}`);
            videoEl.insertAdjacentHTML("beforebegin", `<p>Ocurrion el siguiente error: <mark>${err}</mark><p>`);
        });

    }
}
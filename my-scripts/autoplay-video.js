export default function autoPlayVideo(){
    //DOM

    const videoEl = document.querySelectorAll(`video[data-autoplay]`);
    // console.log(videoEl)


    //creamos nuestras options para el observer
    const options = {
        rootMargin: "0px",
        threshold: 1.0
    }
    
    //creamos nuestra callback para el observer
    const callback = (entries, observer) =>{
        entries.forEach(el =>{
            //si el elemento esta 100% visible empezamos a reproducir el video
            if(el.isIntersecting){
                // console.log("Estoy visible");

                // el.target.muted = false;
                el.target.play();
                // console.log("Muted:",el.target.muted);
                // console.log("Pausado?",el.target.paused)

            }
            else{
            //si no esta 100% visible detenemos la reproduccion
                el.target.pause();
            }
        });
    };


    //creamos nuestro observer
    let observer = new IntersectionObserver(callback, options);

    //asignamos el observer a nuesto elemento html
    // observer.observe(videoEl);
    videoEl.forEach(video =>{
        observer.observe(video);
    });


    //visibility change
    document.addEventListener("visibilitychange", e=>{
        // console.log("Estoy visible: ",document.visibilityState);
        videoEl.forEach(video =>{
            if(document.visibilityState === "visible"){
                video.play();
            }
            else{
                video.pause();
            }
        });
    });
    
}
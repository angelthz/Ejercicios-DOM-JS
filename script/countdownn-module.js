export default function countdown(textEl, birthDate, msg){
    //dom del eleemnto html
    const $textEl = document.getElementById(textEl);
    //obtner las fechas en timestamp
    let actualDate;
    let nextBirthday = new Date(birthDate).getTime();
    //variables para almacenar los resultados
    let dateDif;
    let days;
    let hours;
    let minutes;
    let seconds;
    //
    // dessarrollo
    /*
        como se va actualizar el elemento html que va a mostrar la cuenta 
        regresiva hay que usar un intervalo para que se actualize cada segundo

    */
   const countdownInterval = setInterval(() => {
    // logica
    actualDate = new Date().getTime();
    dateDif = nextBirthday - actualDate;
    //para obtner las fechas realizamos las operacioens para obtenerlas
                                //milisegs segs minutes hours     
    days = Math.floor( dateDif / (1000 * 60 * 60 * 24) );
    hours = Math.floor( (dateDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ) );
    minutes = Math.floor( (dateDif % (1000 * 60 * 60)) / (1000 * 60 ) );
    seconds = Math.floor( (dateDif % (1000 * 60)) / (1000) );

    // console.log(days, hours, minutes, seconds);
    // console.log(nextBirthday, actualDate)
    //mostramos el countdown
    $textEl.textContent = `Dias: ${days} Horas: ${hours} Minutos: ${minutes} Segundos: ${seconds}`;

   }, 1000);
    

}


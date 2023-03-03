export default function narrator(){
    //DOM//
    const ttsForm = document.querySelector(".reader-form");
    
    //objeto speechSynthesis
    const narrator = window.speechSynthesis;
    
    //voces disponibles en el sistema obtenidas del speechSyntesis
    const voices = narrator.getVoices();

    //
    const speechText = new SpeechSynthesisUtterance();
    console.log(speechText)



    //obtenemos la voces para llenar el elemento select del ttsForm
    voices.forEach((voice,idx) => {
        //creamos un elemento option
        const opt = document.createElement("option");

        //le asignamos como textcontent el nombre de la voz
        opt.textContent = voice.name;

        //le asignamos como valor el indice de la voz
        opt.setAttribute("value",idx);

        //lo añadimos a nuestro select
        ttsForm.voices.insertAdjacentElement("beforeend",opt);
    });

    //evento para que lea el texto de nuestro ttsForm
    ttsForm.addEventListener("submit", e => {
        e.preventDefault();
        //obtenemos el valor de la voz del select
        let voiceIdx = ttsForm.voices.value;

        //creamos un objeto utterance y le asignamos el value del textarea del form
        // const tts = new SpeechSynthesisUtterance(ttsForm.texto.value);
        speechText.text = ttsForm.texto.value;
        
        //le asignamos la voz a nuestro objeto utterance
        speechText.voice = voices[voiceIdx];
        
        //usamos el metodo speak del objeto speechSynthesis para que comienze
        //a leer el texto
        narrator.speak(speechText);
        
        e.stopPropagation();
    });

    speechText.addEventListener("start", e=>{
        console.log("estoy hablando");
        ttsForm.narrar.setAttribute("disabled",true);
        e.stopPropagation();
    })

    speechText.addEventListener("end", e=>{
        console.log("termine de hablar");
        ttsForm.narrar.removeAttribute("disabled");
        e.stopPropagation();
    })
}
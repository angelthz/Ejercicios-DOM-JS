export default function alarm(audioEl, startBtn, stopBtn){

    const d = document;
    let alarmTimer;

    d.addEventListener("click", e=>{
        if(e.target.matches(startBtn)){
            document.querySelector(startBtn).setAttribute("disabled",true);
            document.querySelector(stopBtn).removeAttribute("disabled");
            alarmTimer = setTimeout(()=>{
                document.querySelector(audioEl).play();
                document.querySelector(audioEl).setAttribute("loop", true);
            },1500);

            
            
        }
        if(e.target.matches(stopBtn)){
            document.querySelector(startBtn).removeAttribute("disabled");
            document.querySelector(stopBtn).setAttribute("disabled",true);
            
            document.querySelector(audioEl).pause();
            document.querySelector(audioEl).removeAttribute("loop");
            document.querySelector(audioEl).currentTime = 0;
        }
    });
    
}
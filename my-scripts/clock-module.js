export default function clock(textEl, starBtn, stopBtn){
    // const doc = document;
    // let clock=null;
    // const text = document.querySelector(textEl);

    // function runClock(htmlEl){
    //     return setInterval(()=>{
    //         htmlEl.textContent = new Date().toLocaleTimeString();
    //     },1000);
    // }

    // doc.addEventListener("click", e =>{
    //     if(e.target.matches(starBtn)){
    //         console.log("Startclock js")
    //         clock = runClock(text);
    //         doc.querySelector(starBtn).classList.toggle("clock-btn-disable");
    //         doc.querySelector(stopBtn).classList.toggle("clock-btn-disable");
    //     }

    //     if(e.target.matches(stopBtn)){
    //         console.log("Stop clock js")
    //         clearInterval(clock);
    //         doc.querySelector(starBtn).classList.toggle("clock-btn-disable");
    //         doc.querySelector(stopBtn).classList.toggle("clock-btn-disable");
    //     }
    // });

    const d = document;
    const clockText = document.querySelector(textEl);
    let clockIntervarl;

    function runClock(htmlEl){
        return setInterval(()=>{
            htmlEl.textContent = new Date().toLocaleTimeString();
        },1000);
    };

    d.addEventListener("click", e =>{

        if(e.target.matches(starBtn)){
            clockIntervarl = runClock(clockText);
            console.log("Start clock js")
            document.querySelector(starBtn).setAttribute("disabled",true);
            document.querySelector(stopBtn).removeAttribute("disabled");

        }

        if(e.target.matches(stopBtn)){
            console.log("Stop clock js")
            clearInterval(clockIntervarl);
            document.querySelector(starBtn).removeAttribute("disabled");
            document.querySelector(stopBtn).setAttribute("disabled",true);
            clockText.textContent = null;
        }
    });
}
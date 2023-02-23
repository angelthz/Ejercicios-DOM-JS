export default function sorteo(elementSel, btnSel){
    const winnerBtn = document.querySelector(btnSel);


    function getWinner(selector){
        let elementos = document.querySelectorAll(selector);
        let random = Math.floor(Math.random() * (elementos.length));
        let winner = elementos[random].textContent;

        alert(`El ganador es ${winner}`)
    }

    document.addEventListener("click", e=>{
        if(e.target === winnerBtn){
            getWinner(elementSel);
        }
    })


    
}
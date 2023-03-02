export default function scrollSpy(){
    //CONSTANTES
    // const

    //CONSTANTES

    //DOM
    const sections = document.querySelectorAll(".section");
    //DOM

    //1. definimos nuesto objeto options para nuestro observer
    const options = {
        rootMargin: "0px",
        threshold: [0.5]
    }
    //2. creamos nuestro observer
    const myObserver = new IntersectionObserver(myCallback, options);

    //3.
    //creamos nuestra callback si la definimos como una funciond declarada, la declaracion
    //de nuestro objeto puede hacerse antes 
    //si la definimos como funcion expresada la declaracion del observer tiene que ser despues
    //de la declaracion de la funcion
    
    function myCallback(entries, observer){
        //code to execute
        // 5.

        entries.forEach( entry =>{
            let id = entry.target.getAttribute("id");
            if(entry.isIntersecting){
                // console.log(entry.target,entry.isIntersecting)
                // entry.target.classList.add("test");
                // console.log(id);
                document.querySelector(`a[href="#${id}"]`).classList.add("active");
                // console.log(document.querySelector(`a[href="#${id}"]`))

            }
            else{
                // entry.target.classList.remove("test");
                document.querySelector(`a[href="#${id}"]`).classList.remove("active");
            }
            // console.log(entry);
        });
    }

    //4.
    //hay que asignar a nuestro observadir el elemento o elementos HTML a observar
    //en este caso vamos a estar observano las section de nueestro documento HTML, como tenemos varias
    //section, todas tienen que ser observadas
    
    sections.forEach( section =>{
        myObserver.observe(section);
    })
}
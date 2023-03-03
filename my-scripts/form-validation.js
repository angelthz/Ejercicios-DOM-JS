export default function contactFormValidation(){
    const contactForm = document.querySelector(".contact-form");
    const inputs = document.querySelectorAll(".contact-form [required]");
    
    // console.log(inputs);

    //creamos un span dinamicamente y se lo añadimos a cada input
    inputs.forEach(input => {
        //creamos nuestro span
        const span = document.createElement("span");
        //le añadimos el valor del atributo name al id del span creado
        span.setAttribute("id",input.getAttribute("name"));
        //le añadimos el valor del atributo title del input al textcontetn del span creado
        span.textContent = input.getAttribute("title");
        //le agregamos la clase css contact-form-error para que tome los estilos definidos en el css
        span.classList.add("contact-form-error", "none");

        //agregamos el span creado como hermano adjacente del input
        input.insertAdjacentElement("afterend", span);

    });

    contactForm.addEventListener("input", e => {
        //si el elemento que genera el evento es un input
        if(e.target.matches(".contact-form [required]")){    
            //obtener el input
            const $input = e.target;
            console.log($input)
            //obtenemos el pattern del eleemnto html
            //si el elemento tiene el atributp pattern de ahi lo obtenemos
            //si el elemento es un textarea y no tiene patter, lo obtenemos de su data-attrib
            const pattern = $input.getAttribute("pattern") || $input.dataset.pattern;
            // console.log(pattern);


            /* Realizamos dos verificaciones una para aquellos 
            elementos que tengan pattern y otra para aquellos que lo incluyan
            en un data atribute */

            //si tienen pattern y no este vacio el input
            console.log($input.value.length)
            if(pattern && $input.value.length !== 0){
                
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) 
                ? document.getElementById($input.name).classList.add("is-active") 
                : document.getElementById($input.name).classList.remove("is-active");
            }
            else{
                document.getElementById($input.name).classList.remove("is-active");  
            }



            //si no tiene patter simplemente validamos que no este vacio el input
            if(!pattern){
                return $input.value == "" 
                ? document.getElementById($input.name).classList.add("is-active") 
                : document.getElementById($input.name).classList.remove("is-active");
            }
        }
        e.stopPropagation();
    });

    contactForm.addEventListener("submit", e =>{
        e.preventDefault();
        alert("enviando formulario")
        e.stopPropagation();
    });
}
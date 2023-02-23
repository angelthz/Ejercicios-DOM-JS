
/* params: 
    input: es el selector del input de busqueda
    selector: es el selector de la clase asociada a los elementos sobre los cuales haremos
                la busqueda
 */

export default function searhFilter(input, selector){
    //el input de busqueda
    const inputSearch = document.querySelector(input);
    
    //todos los elementos que contengan la clase del selector
    const elementsToSearch = document.querySelectorAll(selector);

    //regex
    let reg = /[a-z]/i;

    /* Logica:
        al input agregarle el evento que capture cada vex que presionemos una tecla
        iterar sobre cada elemento sobre el cual se hara la busqueda y comparar si
        su contenido de texto coincide con al menos 3 caracteres que se hayan 
        introducido en el search input, si es asi, agregarle la clase que oculete
        a aquellos elementos que no coincidan
    */
    

    function search(str){
        let reg = new RegExp(`^${str}`,"i");

        elementsToSearch.forEach(el =>{
            if(!reg.test(el.lastElementChild.textContent)){
                el.classList.add("filter");
            }
            else
                el.classList.remove("filter");
        });
    }
    document.addEventListener("input", e=>{
        if(e.target === inputSearch){
            console.log(e.target.value)
            search(e.target.value);
        }
    });

}
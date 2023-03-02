/* 
    Debemos desactivar el comportamiento por defecto del formulario
    Capturar el evento submit de los botones y asingarles las funciones
    para abrir y cerrar ventanas
    guardar en una variable la ventana que se abra para poder cerrarla
*/


/*
    parametros
        selector del formulario
        selector del input abrir
        selector del input cerrar
*/


export default function responsiveTester(formId){
    const d = document;
    const formEl = document.getElementById(formId);
    let tester;


    d.addEventListener("submit", e=>{
        if(e.target === formEl){
            e.preventDefault();
            tester = window.open(formEl.direccion.value,"_blank",`width=${formEl.ancho.value},height=${formEl.alto.value}`);
            
            // window.open("https://github.com/","_blank","width=480,height=840");
            // console.log(formEl.direccion.value, formEl.ancho.value, formEl.alto.value)

        }
    })

    d.addEventListener("click", e=>{
        if(e.target === formEl.cerrar){
            console.log(tester)
            tester.close();
            console.log("close")

        }
    });
}
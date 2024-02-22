const form = document.querySelector(".formluario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const empurra = document.querySelector(".empurra-form")


function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    empurra.style.visibility = "hidden"
    empurra.style.right = "-400px"
    
}


function esconderForm() {
    empurra.style.right = "100%"
    empurra.style.visibility = "visible"
    empurra.style.transform = "translateX(-50%)"
    form.style.transitionDelay = "1.1s";
    form.style.left = "-300px"
    mascara.style.visibility = "hidden"
    mascara.style.transitionDelay = "2s";
    
}


function pintarPerro(objDato){
    let imagenes = document.createElement('img');
    imagenes.setAttribute('src', objDato.message);

    document.getElementById('resultado').appendChild(imagenes);
}



function buscaPerro(url){
    // Creamos el Objeto
    xhr = new XMLHttpRequest();
    // Hacemos la petición
    xhr.open("GET", url);
    // Enviamos
    xhr.send();

    xhr.addEventListener("load", (respuesta) => {
        console.log("OK");
        // Parseamos
        let resultado = JSON.parse(respuesta.target.response);

        pintarPerro(resultado);
        console.log(resultado);
    });

    xhr.addEventListener("error", (respuesta) => {
        console.log("ERROR");
        console.log(respuesta);

    });

}


document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("buscarPerro").addEventListener("click", () =>{
        buscaPerro("https://dog.ceo/api/breeds/image/random");
    });

});





function saludar(nombre){
    console.log(arguments);
    console.log("Hola " + nombre);
}

const saludar2 = function(nombre){
    console.log("Hola " + nombre);
}

const saludarFlecha = () => {
    console.log("Hola Flecha");
}

const saludarFlecha2 = (nombre) => {
    console.log("Hola " + nombre);
}


saludar("Fernando", 40, true, "Costa Rica");
// saludar2("Fernando");

saludarFlecha();
saludarFlecha2("Melissa");


// 26. Funciones básicas y de flecha
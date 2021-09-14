

let a = 5;



if (a >= 10) { // undefined, null, una asignación
    console.log("A es mayor o igual a 10");
}else{
    console.log("A es menor a 10");
}


// console.log("Fin de programa");

const hoy = new Date();
let dia = hoy.getDay(); // 0:Domingo, 1:Lunes, 2:Martes, etc

console.log({dia});

if (dia === 0) {
    console.log("Domingo");
}else if(dia === 1){
    console.log("Lunes");
    // if (dia === 1) {
    //     console.log("Lunes");
    // }else{
    //     console.log("No es lunes ni domingo");
    // }
}else if (dia === 2) {
    console.log("Martes");
}else{
    console.log("No es lunes, martes o domingo...");
}

// Sin usar If Else, o Switch, únicamente objetos
dia = 6;

const diasLetras = {
    0: () => "domingo - " + dia,
    1: () => "lines - " + dia,
    2: () => "martes - " + dia,
    3: () => "mércoles - " + dia,
    4: () => "jueves - " + dia,
    5: () => "viernes - " + dia,
    6: () => "sábado - " + dia,
}

let diasLetras2 = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
//  día de la semana
console.log(diasLetras[dia]() || "Día no definido");
console.log(diasLetras2[dia] || "Día no definido");


// 34. Laboratorio - Alternativa al if else
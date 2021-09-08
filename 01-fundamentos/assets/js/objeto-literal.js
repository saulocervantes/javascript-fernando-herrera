let personaje = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    direccion: {
        zip: "1080, 90265",
        ubicación: "Malibu, California",
    },
    "ultima-pelicula": "Infinity War",
};

console.log("Nombre:", personaje);
console.log("Nombre:", personaje.nombre);
console.log("Nombre:", personaje["nombre"]);
console.log("Edad:", personaje.edad);

console.log("Coors:", personaje.coords);
console.log("Lat:", personaje.coords.lat);

console.log("No. Trajes:", personaje.trajes.length);
console.log("Último traje:", personaje.trajes[personaje.trajes.length-1]);

const x = "vivo";
console.log("Vivo:", personaje[x]);

console.log("Última película:", personaje["ultima-pelicula"]);

// Más detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);

Object.freeze(personaje);

personaje.dinero = 100000000;
personaje.casado = false;
personaje.direccion.ubicación = "Cosata Rica";

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});


// 25. Más detalles sobre los objetos literales
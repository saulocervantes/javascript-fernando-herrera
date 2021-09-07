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



// 24. Objetos literales
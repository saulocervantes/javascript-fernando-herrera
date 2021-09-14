

const regresaTrue = () => {
    console.log("Regresa true");
    return true;
};

const regresaFalse = () => {
    console.log("Regresa false");
    return false;
};


console.warn("Not o la negación");
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

console.warn("And"); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.log("==========");
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.log("===== && =====");
regresaFalse() && regresaTrue();

console.log("4 condiciones", true && true && true && false);

console.warn("OR"); // true si algún valor es true
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log("4 condiciones", true || true || true || false); // true


console.warn("Asignaciones");

// 35. Lógica booleana
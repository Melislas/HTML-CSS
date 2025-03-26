function sumar(a, b) {
    debugger; // Punto de interrupción para depuración
    return a + b; // Puede haber un problema si los valores no son números
}

// Prueba del código con un error
const num1 = 10;
const num2 = "5"; // ERROR: Es un string en lugar de un número
console.log("Resultado:", sumar(num1, num2)); // Esto dará "105" en lugar de 15

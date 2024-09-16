/**
 * Crear una clase Calculadora que contendrá los siguientes métodos:
    •	Sumar
    •	Restar
    •	Multiplicar
    •	Dividir
    •	Potencia
    •	Factorial
*/
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Método para sumar dos números
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    // Método para restar dos números
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    // Método para multiplicar dos números
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    // Método para dividir dos números
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    };
    // Método para calcular la potencia de un número
    Calculadora.prototype.potencia = function (base, exponente) {
        if (exponente < 0) {
            throw new Error("El exponente no puede ser negativo");
        }
        var resultado = 1;
        for (var i = 0; i < exponente; i++) {
            resultado *= base;
        }
        return resultado;
    };
    // Método para calcular el factorial de un número
    Calculadora.prototype.factorial = function (n) {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        else {
            return n * this.factorial(n - 1);
        }
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
console.log(calculadora.sumar(5, 3));
console.log(calculadora.dividir(10, 2));
console.log(calculadora.potencia(2, 3));
console.log(calculadora.factorial(5));

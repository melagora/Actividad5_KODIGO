/** 
 * Crear una clase Calculadora que contendrá los siguientes métodos:
    •	Sumar
    •	Restar
    •	Multiplicar
    •	Dividir
    •	Potencia
    •	Factorial
*/

class Calculadora {
    // Método para sumar dos números
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Método para restar dos números
    restar(a: number, b: number): number {
        return a - b;
    }

    // Método para multiplicar dos números
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método para dividir dos números
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }

    // Método para calcular la potencia de un número
    potencia(base: number, exponente: number): number {
        if (exponente < 0) {
            throw new Error("El exponente no puede ser negativo");
        }
        let resultado = 1;
        for (let i = 0; i < exponente; i++) {
            resultado *= base;
        }
        return resultado;
    }

    // Método para calcular el factorial de un número
    factorial(n: number): number {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos");
        }
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * this.factorial(n - 1);
        }
    }
    
}

const calculadora = new Calculadora();

console.log(calculadora.sumar(5, 3));
console.log(calculadora.dividir(10, 2));
console.log(calculadora.potencia(2, 3));
console.log(calculadora.factorial(5));
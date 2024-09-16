/**
  Crea una clase llamada Cuenta y va contener lo siguiente:
    Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
    Métodos:
        •	Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
        •	Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición
            de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor
            a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
        •	Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la
            cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.

            Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay
            efectivo debes de tirar un mensaje que no hay nada en la cuenta.
            
        •	Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
        •	Define un objeto de la clase Cuenta y llama sus métodos.
*/
var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    Cuenta.prototype.depositar = function (cantidadADepositar) {
        if (cantidadADepositar < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            this.cantidad += cantidadADepositar;
            console.log("Se ha depositado correctamente $".concat(cantidadADepositar, ". Saldo actual: $").concat(this.cantidad));
        }
    };
    Cuenta.prototype.retirar = function (valorARetirar) {
        if (valorARetirar < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
        else if (valorARetirar > this.cantidad) {
            console.log("Fondos insuficientes.");
        }
        else {
            this.cantidad -= valorARetirar;
            console.log("Se ha retirado $".concat(valorARetirar, ". Saldo actual: $").concat(this.cantidad));
        }
    };
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de cuenta: ".concat(this.numeroCuenta));
    };
    return Cuenta;
}());
// Crear un objeto de la clase Cuenta
var miCuenta = new Cuenta("Juan Pérez", 1000, "Ahorros", 123456);
// Llamar a los métodos
miCuenta.depositar(200);
miCuenta.retirar(500);
miCuenta.mostrarDatos();

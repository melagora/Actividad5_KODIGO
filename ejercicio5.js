/**
  Crear una clase abstracta Persona y va contener lo siguiente:
    Atributos: nombre, apellido, dirección, teléfono y edad.
    Métodos:
        •	Crear un método constructor para recibir los datos.
        •	Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
        •	Crea un método para mostrar todos los datos personales (será el método abstracto).
        •	Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
        •	En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
        •	La clase Empleado va heredar de la clase Persona.
        •	Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    Persona.prototype.esMayorDeEdad = function () {
        console.log(this.edad >= 18 ? 'Es mayor de edad' : 'No es mayor de edad');
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (nuevoSueldo) {
        this.sueldo = nuevoSueldo;
    };
    Empleado.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Apellido: ".concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.direccion));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        console.log("Edad: ".concat(this.edad));
        console.log("Sueldo: $".concat(this.sueldo));
    };
    return Empleado;
}(Persona));
// Crear un objeto de la clase Empleado
var empleado1 = new Empleado('Juan', 'Pérez', 'Calle Falsa 123', '123456789', 30, 5000);
// Mostrar los datos del empleado
empleado1.mostrarDatos();

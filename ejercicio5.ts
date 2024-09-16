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

abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    public esMayorDeEdad(): void {
        console.log(this.edad >= 18 ? 'Es mayor de edad' : 'No es mayor de edad');
    }

    public abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    public cargarSueldo(nuevoSueldo: number): void {
        this.sueldo = nuevoSueldo;
    }

    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Sueldo: $${this.sueldo}`);
    }
}

// Crear un objeto de la clase Empleado
const empleado1 = new Empleado('Juan', 'Pérez', 'Calle Falsa 123', '123456789', 30, 5000);

// Mostrar los datos del empleado
empleado1.mostrarDatos();
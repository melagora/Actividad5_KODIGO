/**
  Crea una clase llamada Canción:
    Atributos: título, género de la canción y un atributo privado que se llame autor.
    Métodos:
        •	Crear un constructor que reciba como parámetros el título y género de la canción.
        •	Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
        •	Crea un método para mostrar los datos de la canción.
*/
var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }
    Object.defineProperty(Cancion.prototype, "getAutor", {
        get: function () {
            return this.autor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cancion.prototype, "setAutor", {
        set: function (autor) {
            this.autor = autor;
        },
        enumerable: false,
        configurable: true
    });
    Cancion.prototype.mostrarDatos = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("G\u00E9nero: ".concat(this.genero));
        console.log("Autor: ".concat(this.autor));
    };
    return Cancion;
}());
// Creando una instancia de la clase Canción
var miCancion = new Cancion("Bohemian Rhapsody", "Rock");
// Asignando un valor al autor
miCancion.setAutor = "Freddie Mercury";
// Mostrando los datos de la canción
miCancion.mostrarDatos();

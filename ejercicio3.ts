/** 
  Crea una clase llamada Canción:
    Atributos: título, género de la canción y un atributo privado que se llame autor.
    Métodos: 
        •	Crear un constructor que reciba como parámetros el título y género de la canción.
        •	Utiliza los métodos get y set para recibir e imprimir la propiedad autor. 
        •	Crea un método para mostrar los datos de la canción. 
*/

class Cancion {
    private autor: string;
  
    constructor(public titulo: string, public genero: string) {}
  
    get getAutor(): string {
      return this.autor;
    }
  
    set setAutor(autor: string) {
      this.autor = autor;
    }
  
    mostrarDatos() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Género: ${this.genero}`);
      console.log(`Autor: ${this.autor}`);
    }
  }
  
  // Creando una instancia de la clase Canción
  const miCancion = new Cancion("Bohemian Rhapsody", "Rock");
  
  // Asignando un valor al autor
  miCancion.setAutor = "Freddie Mercury";
  
  // Mostrando los datos de la canción
  miCancion.mostrarDatos();
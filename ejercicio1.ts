/** 
  Crear una clase Cabecera Pagina, que contenga 3 métodos, 
  el primer método que obtenga el título, color y fuente de la página, 
  el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda 
  y el tercer método que imprima todas las propiedades.
*/

class CabeceraPagina {
    public titulo: string;
    public color: string;
    public fuente: string;
    public alineacion: string;

    // Constructor: inicializa los atributos de la cabecera
    constructor(titulo: string, color: string, fuente: string) {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
      this.alineacion = 'izquierda'; // Valor por defecto
    }
    
    // Obtiene una cadena con los detalles de la cabecera
    obtenerDetalles(): string {
      return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }
    
    // Establece la alineación del título
    establecerAlineacion(alineacion: string): void {
      if (alineacion === 'centrado' || alineacion === 'derecha' || alineacion === 'izquierda') {
        this.alineacion = alineacion;
      } else {
        console.error('Alineación no válida. Opciones: centrado, derecha, izquierda');
      }
    }
    
    // Imprime la cabecera en formato HTML
    imprimir(): void {
      console.log(`<h1 style="color: ${this.color}; font-family: ${this.fuente}; text-align: ${this.alineacion}">${this.titulo}</h1>`);
    }
  }
  
  // Ejemplo de uso
  const cabecera = new CabeceraPagina('Mi Página', 'blue', 'Arial');
  cabecera.establecerAlineacion('centrado');
  cabecera.imprimir(); // Imprime: <h1>Mi Página</h1> centrado en azul con fuente Arial
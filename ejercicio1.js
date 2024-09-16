/**
  Crear una clase Cabecera Pagina, que contenga 3 métodos,
  el primer método que obtenga el título, color y fuente de la página,
  el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda
  y el tercer método que imprima todas las propiedades.
*/
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'izquierda'; // Valor por defecto
    }
    CabeceraPagina.prototype.obtenerDetalles = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente);
    };
    CabeceraPagina.prototype.establecerAlineacion = function (alineacion) {
        if (alineacion === 'centrado' || alineacion === 'derecha' || alineacion === 'izquierda') {
            this.alineacion = alineacion;
        }
        else {
            console.error('Alineación no válida. Opciones: centrado, derecha, izquierda');
        }
    };
    CabeceraPagina.prototype.imprimir = function () {
        console.log("<h1 style=\"color: ".concat(this.color, "; font-family: ").concat(this.fuente, "; text-align: ").concat(this.alineacion, "\">").concat(this.titulo, "</h1>"));
    };
    return CabeceraPagina;
}());
// Ejemplo de uso
var cabecera = new CabeceraPagina('Mi Página', 'blue', 'Arial');
cabecera.establecerAlineacion('centrado');
cabecera.imprimir(); // Imprime: <h1>Mi Página</h1> centrado en azul con fuente Arial

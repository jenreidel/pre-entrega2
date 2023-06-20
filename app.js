// Objetivos de la app:
// Estructura Html
// Funciones
// Objetos
// Arrays
// Algún método de arrays
// -- push: para agregar al array
// -- splice: para quitar del array
// -- indexOf: para buscar el indice para quitarlo del array.

// Que cuando selecciono un producto me traiga el precio del mismo

alert("Bienvenid@ a tu gift-card. Tenés $9.500 disponibles para comprar lo que más te guste.")
// Clase molde para las plantas a la venta
class Producto{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Variables globales
const carrito = []; // Array donde guardamos todos los productos comprados

// Productos a la venta
const dieffenbachia = new Producto("Dieffenbachia", 3300);
const potus = new Producto("Potus", 3000);
const sanseviera = new Producto("Sanseviera", 2900);
const piedras = new Producto("Piedras", 100);

// Crédito Disponible
let credito = 9500;

// Elementos
const elementoCredito = document.querySelector("#credito");
const elementoCarrito = document.querySelector("#carrito");
elementoCredito.innerText = credito;

// Funciones regulares
function comprar(planta){
    if (credito - planta.precio <= -1){
        alert("No tenés suficiente crédito para comprar el producto " + planta.nombre);
        return;
    }
    carrito.push(planta);
    credito = credito - planta.precio;
    actualizarHTML();
}

function devolver(indice) {
    const producto = carrito[indice];
    credito = credito + producto.precio;
    carrito.splice(indice, 1);
    actualizarHTML(); // Actualizo el HTML
}

// Se encarga de renderizar todos los productos en el carrito
function actualizarHTML() {
    elementoCarrito.innerHTML = "";
    for (const producto of carrito){
        let indicePlanta = carrito.indexOf(producto);
        let elementoPlanta = `<div class="planta" onclick="devolver(${indicePlanta})">${producto.nombre}</div>`;
        elementoCarrito.innerHTML += elementoPlanta;
    }
    elementoCredito.innerText = credito;
}

function regar() {

}
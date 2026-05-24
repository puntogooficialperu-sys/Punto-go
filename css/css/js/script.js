
let carrito = [];

function agregar(nombre,precio){

carrito.push({
nombre:nombre,
precio:precio
});

alert(nombre + " agregado");

}

function pedidoWhatsapp(){

let mensaje="Hola Punto Go%0A";

let total=0;

carrito.forEach(item=>{

mensaje += item.nombre+
" S/"+item.precio+
"%0A";

total += item.precio;

});

mensaje += "%0ATotal: S/"+total;

window.open(
"https://wa.me/901649601?text="+mensaje
);

}

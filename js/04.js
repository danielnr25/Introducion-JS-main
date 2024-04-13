// objetos: Un objeto es una coleccion propiedades o de datos que se almacenan en una variable

const nombreProducto = "Monitor 20 pulgadas";
const precioDescuento = 300;
const disponibleProducto = true;


const producto = {
  nombre : "tablet",
  precio : 300,
  disponible : true,
}

//console.log(typeof producto); // nos devuelve object
//console.log(producto); //nos devuelve el objeto completo
//console.table(producto)

//console.log(producto.nombre)
//console.log(producto.precio)

// DESTRUCTURING : Es una forma de poder acceder a los valores de un objecto, de una forma sencilla y rápida,.

const {nombre,precio, disponible} = producto

console.log(nombre);
console.log(precio)
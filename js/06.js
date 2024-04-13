// DESTRUCTURING DE 2 O MÁS OBJETOS : SE PUEDE HACER DESTRUCTURING EN UNA SOLA LINEA

const producto = {
  nombre : "tablet",
  precio : 300,
  disponible : true,
}

const cliente = {
  nombre : 'Daniel',
  premium : true,
}

//console.log(producto.nombre);
//console.log(cliente.nombre);

// el siguiente caso no se podría hacer porque ya existe una variable con el mismo nombre
//const {nombre} = producto;
//const {nombre} = cliente;

const {nombre:nombreProducto} = producto; // objeto producto
const {nombre:nombreCliente } = cliente;

console.log(nombreProducto);
console.log(nombreCliente)
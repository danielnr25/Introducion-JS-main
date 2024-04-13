// MANIPULACION DE OBJETOS: Los objetos son mutables, es decir, pueden ser modifcados, añadir o elimnar 

// Object.freeze(): congela el objeto, no puede modificar, añadir, eliminar
// Object.seal(): sella el objeto, es decir, no se puede añadir o eliminar, pero si modifcar

const producto = {
  nombre : "tablet",
  precio : 300,
  disponible : true,
}

//Object.freeze(producto);
Object.seal(producto);

// como modifcar objeto, modificando su valor de la clave (nombre)
producto.nombre = "Monitor Curvo"

// como añadir una clave y valor aun objeto
producto.imagen = "image.png"

// elimnar la clave disponible
delete producto.disponible

console.table(producto)
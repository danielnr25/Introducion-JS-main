// MANIPULACION DE LOS ARREGLOS 

const tecnologias = ["Vue.js","JavaScript","Node.js",40,20,true];

//push: añade un elemento al final de mi arreglo
//tecnologias.push("GIT");

//unshift: añade un elemento al inicio de nuestro arreglo
//tecnologias.unshift("React");

// Pop: sirve para eliminar el ultimo elemento de nuestro arreglo
//tecnologias.pop();

//shift: sirve para el primer elemnto de nuestro arreglo
//tecnologias.shift();

//splice: Elimina un elemento en una posicion especifica
//tecnologias.splice(3,1)

const tecnologias2 = tecnologias.filter(function(tech){
  return tech !== "JavaScript"
})


console.log(tecnologias2)
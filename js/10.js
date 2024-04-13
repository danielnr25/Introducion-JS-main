// Iteradores en JS : son objetos que permiten recorrer 
//secuencialmente un conjunto de datos.


const tecnologias = ["Vue.js","JavaScript","Node.js","HTML"];

//forEach : recorre los elementos de un arreglo y ejecuta una por
// funcion por cada elemento del arreglo.

const arrayForEach = tecnologias.forEach(function (index){
  console.log(index)
  //return index
})

// map: crea un nuevo arreglo con los resultados de la function
// del array principal

const arrayMap = tecnologias.map(function (tech){
  //console.log(tech); 

  return tech //genera un nuevo arreglo
})

console.log(arrayMap);
console.log(arrayForEach);


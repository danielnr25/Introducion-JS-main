// arrow functions 

// function sumar(numero1 = 0,numero2 = 10){
//   console.log(numero1 + numero2);
// }


const tecnologias = ["Vue.js","JavaScript","Node.js","HTML",'React'];

//forEach: Es un método de los objetos de tipo Array en JavaScript que te permite ejecutar una funcion una vez por cada elemento

// const arrayForeach = tecnologias.forEach(function (index){
//   return index
// })

// tecnologias.forEach(index => {
//   console.log(index)
// })

// map: es otro método de los objetos de tipo array en JS, que te permite tranformar cada elemento de un array y retornar un nuevo array

// const arrayMap = tecnologias.map(function (element){
//   //console.log(element)
//   return element
// })

// const arrayMap = tecnologias.map(element => element) // ARROW FUNCTIONS
// console.log(arrayMap);

const tecnologias2 = tecnologias.filter(index => index !== 'HTML')
console.log(tecnologias2)

//console.log(arrayMap);
//console.log(arrayForeach);
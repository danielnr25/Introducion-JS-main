// Operador :  AND (&&) OR (||)

const disponible = 100;
const total = 500;
const tarjeta = false;


// if(tarjeta){
//   console.log('Si se puede pagar')
// }else if(disponible > total){
//   console.log('Si se puede pagar la cuenta')
// }else{
//   console.log('No se puede pagar')
// }

if(tarjeta || disponible > total){
  console.log('Si se puede pagar')
}else{
  console.log('No se puede pagar')
}


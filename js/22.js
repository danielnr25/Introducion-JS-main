const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = () =>{
  fetch(url)
  .then((respuesta) => respuesta.json()).then(
    resultado =>{
      console.log(resultado)
    }
  ).catch(error =>{
    console.log('Error de la api')
  }).finally( () =>{
    console.log('Todo conforme')
  })
}

consultarAPI()
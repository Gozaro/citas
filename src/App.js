import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Frase(props) {

  return (
  
      <div className="frase">
        <h1>{props.frase.texto}</h1>
        <p>{props.frase.autor}</p>
      </div>
    )
}

let getRandomInt = (valor) => {

  return Math.floor(Math.random() * valor);
  
}


function App() {
  
  let numeroAle = getRandomInt(50);
  console.log('numeroAle:'+numeroAle);
  const [frase, obtenerFrase] = useState({})
  const consultarAPI =  async () => {
    //const resultado = await axios ('http://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const resultado = await axios ('./citas.json')
    
    // agregar el resultado de la API al state
    obtenerFrase(resultado.data[numeroAle]);

  }
  
  //hace la llamada ala consulta
  useEffect(
    () => {

      consultarAPI()
    //pasamos un arreglo vacio para que no entre en bucle
    }, []

  )

  console.log(frase);  

  return (
      <div className="contenedor">
        <Frase 
          frase={frase}
          
        />

      <div className="footer">
      Reutiliza este código / use reuse this code: 
      <span className="icon"><a href="https://github.com" rel="noopener noreferrer" target="_blank"><img src="./gitIcon.png" alt="Github" height="30"/></a></span>
      </div>
      </div>

     
    )
}

export default App;
import { useState } from "react"
import {Busqueda,GifGrid} from './components';

const GifExpertApp = () => {

    //estado para las busquedas
    const [busquedas,setBusquedas] = useState(['Joker']);

    //funcion para agregar busqueda al estado
    const agregar = (nuevo) => {

      //validar ei el nuevo valor ya existe en el estado
      if(busquedas.includes(nuevo)){
        console.log('valor repetido');
        return
      }
      setBusquedas([nuevo,...busquedas]);
    }



  return (
    <>
        {/* titulo */}
       <h1>GifExpertApp</h1> 

       {/* input del buscador */}
       <Busqueda
        agregar={agregar}
       />

       {/* listados de gifs */}
       <ul>
          {/* item individual de  */}
        {busquedas.map(item => (
              <GifGrid
                key={item}
                item={item}
              />
          ))}
       </ul>

    </>
  )
}

export default GifExpertApp
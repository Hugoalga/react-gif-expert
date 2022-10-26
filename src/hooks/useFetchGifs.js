import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (item) => {

     //estado para almacenar el array de los gifs
    const [elementos,setElementos] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    

    //funcion para ejecutar la conexion a la api
    //y setear los valores al estado de elementos
    const data = async() => {
        const info = await getGifs(item);
        setElementos(info);
        setIsLoading(false);
    }


    //ejecutar la funcion para llamara la api
    //cada vez que se crea el componente
    useEffect(() => {
      data()
    },[])

  return {
    images:elementos,
    isLoading: isLoading
  }
}

export default useFetchGifs
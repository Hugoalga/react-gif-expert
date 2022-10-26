import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({item}) => {

  //extraemos propiedades del custom hook
  const {images,isLoading} = useFetchGifs(item);

    return (
      <>
      {
        isLoading 
        //si cargando es true
        ? ( <h2>Cargando</h2> )

        //si cargando es false
        : (
          <>
          <h1> {item} </h1>
          <div className="card-grid">
            {images.map((elemento) => (
              <GifItem
                key={elemento.id}
                elemento={elemento}
              />
            ))}
          </div>
          </>
        )
      }
        
       
      </>
    )
}

export default GifGrid


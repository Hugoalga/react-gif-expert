
const GifItem = ({elemento}) => {
  return (
    <div className="card">
         <img src={elemento.url} alt="" />
         <p>{elemento.title}</p>
    </div>
  )
}

export default GifItem
import { useState } from "react"

const Busqueda = ({agregar}) => {


    const [valorInput,setValorInput] = useState('');

    //funcion para almacenar valor del input
    const handleChange = (texto) => {
        setValorInput(texto);
    }

    //funcion para enviar info al estado del padre
    const handleSubmit = (e) => {
        e.preventDefault();
        //validacion
        if(valorInput.length <= 1){
            console.log('ingresar datos correctos')
            return
        }

        agregar(valorInput);
        setValorInput('');
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Ingresa algo...."
                value={valorInput}
                onChange={ e => handleChange(e.target.value)}
            />
        </form>
    </>
  )
}

export default Busqueda
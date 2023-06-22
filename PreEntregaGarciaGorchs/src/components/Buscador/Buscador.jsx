import { useRef } from "react"
import { useSearchParams } from 'react-router-dom'
import '../Buscador/Buscador.css'

const Buscador = () => {
    const [, setSearchParams] = useSearchParams()

    const ref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = ref.current.value

        if (value === '') {
            setSearchParams({})
            return
        }

        setSearchParams({
            search: value
        })
    }

    const handleReset = () => {
        setSearchParams({})
    }

    return (
        <div className="contenedor_buscador">
            <p className="titulo_buscador">¡Encontrá lo que necesitas!</p>
            <div className="formulario_buscador">
        <form className="p-3 form_buscador"  onSubmit={handleSubmit} >
            <input
                ref={ref}
                className="form-control"
                type="text"
            />
        <div className="boton_buscador">
            <button type="submit" className="btn btn-light btn_buscador">Buscar</button>
            <button onClick={handleReset} type="reset" className="btn btn-dark">X</button>
        </div>
        </form>
        </div>
        </div>
    )
}

export default Buscador
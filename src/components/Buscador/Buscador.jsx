import { useRef } from "react"
import { useSearchParams } from 'react-router-dom'
import { FcSearch } from 'react-icons/fc';
import './Buscador.scss'


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

    return (
        <div className="contenedor_buscador">
            <form className="formulario_buscador" onSubmit={handleSubmit} >
                <input
                    ref={ref}
                    className="form-control"
                    type="text"
                    placeholder="Buscá repuestos, accesorios y más..."
                />
                <button type="submit" className="btn boton_buscador">
                    <FcSearch className="btn_buscador" size='25px' />
                </button>
            </form>


        </div>

    )
}

export default Buscador
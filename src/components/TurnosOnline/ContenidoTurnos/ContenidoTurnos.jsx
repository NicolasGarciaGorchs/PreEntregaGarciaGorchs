import '../ContenidoTurnos/ContenidoTurnos.css'

const ContenidoTurnos = () => {
    return (
        <main className="contenidoTurnos">
            <div className="sizeTurnos">
                ¡LA FORMA MÁS ORGANIZADA Y PERSONALIZADA PARA REPARAR TU MOTO!
            </div>
            <div className="size_turnos">
                Con este nuevo método de organización logramos llevar nuestro servicio a otro nivel.
                La personalización de éste al momento de reservar permite al usuario la posibilidad de
                especificar sus problemas al detalle.
            </div>
            <div className="size_turnos">
                <a className="sinDetalles" href="">CREÁ TU CUENTA,</a> VALIDÁ TUS DATOS, SUBÍ FOTOS DE TU MOTO Y SUMATE A LA EXCLUSIVA COMUNIDAD DE MOSSI MOTOS
            </div>
            <div>
                <img className="size_fotoTurnos" src='src/assets/carousel/carousel1.png' alt="fotoyamahasr250" />
            </div>
        </main>
    )
}

export default ContenidoTurnos
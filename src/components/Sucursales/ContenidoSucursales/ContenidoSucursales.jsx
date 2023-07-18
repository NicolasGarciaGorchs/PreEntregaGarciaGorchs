import '../ContenidoSucursales/ContenidoSucursales.scss'

const ContenidoSucursales = () => {
    return (
        <main className="contenidoSucursales">
            <div className="titulo_sucursales">
                ¡ENCONTRANOS EN NUESTROS TALLERES!
            </div>
            <div className="texto_sucursales">
                Acercate ó contactanos por redes sociales y horarios mencionados
            </div>
            <section className="seccion_sucursales1">
                <div className="subtitulo">
                    CASA CENTRAL
                </div>
                <div className="size_sucursales">
                    <p>DIRECCIÓN: Piovano 3323 - Moreno Norte</p>
                    <p>WHATSAPP: 1138619773</p>
                    <p>HORARIOS: Lunes a Viernes de 8 a 18hs.</p>
                    <p>EMAIL: contacto.mossimotos@gmail.com</p>
                </div>
                {/* <iframe class="size_mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.020224110376!2d-58.798129840133356!3d-34.648142795051854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbaaad6d154ba3925!2sMossi%20Motos!5e0!3m2!1ses-419!2sar!4v1674533409519!5m2!1ses-419!2sar" width="220" height="220" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    */}
            </section>
            <hr/>
            <section className="seccion_sucursales2">
                <div className="subtitulo">
                    SUCURSAL MORENO SUR
                </div>
                <div className="size_sucursales">
                    <p>DIRECCIÓN: Larrea 2616 - Moreno Sur</p>
                    <p>WHATSAPP: 2374034170</p>
                    <p>HORARIOS: Lunes a Viernes de 8 a 18hs.</p>
                    <p>EMAIL: contacto.mossimotos@gmail.com</p>
                </div>
                {/* <img  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.889004891234!2d-58.79420918519321!3d-34.65750596785227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc94f9ab96a6d5%3A0x159b90808b65a!2sLarrea%202616%2C%20B1744ILR%20Moreno%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1674533722335!5m2!1ses-419!2sar" width="220" height="220" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> */}
            </section>
        </main>
    )
}
export default ContenidoSucursales
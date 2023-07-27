import './Footer.scss'

const Footer = () => {
    
    return (
    <footer id="footerArea">
        <div className="footerF">
            <p className="fontFooter">Seguinos en nuestras redes!</p>
            <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer"><i
            className="fa-brands fa-whatsapp fa-3x"></i></a>

            <a href="https://www.instagram.com/mossimotos" target="_blank" rel="noopener noreferrer"><i
            className="fa-brands fa-instagram fa-3x"></i></a>

            <a href="https://www.facebook.com/mossimotos" target="_blank" rel="noopener noreferrer"><i
            className="fa-brands fa-facebook color fa-50 fa-3x"></i></a>
            <div className="paddingFU">
                <p>Mossi Motos</p>
                <p>Todos los derechos reservados © 2023</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer
import './Sponsors.css'

const Sponsors = () => {

    return (
        <section id="sponsors">
        <div class="padding_sponsors">Powered by</div>
        <div class="paddingTH">
          <a href="https://www.instagram.com/circuitequipmentargentina/?hl=es" target="_blank"
            rel="noopener noreferrer"><img class="sizeFotoSponsor1" src='src/assets/Sponsors/circuit.png'
              alt="logo_circuit" /></a>
          <a href="https://www.didchain.com/" target="_blank" rel="noopener noreferrer"><img class="sizeFotoSponsor2"
              src='src/assets/Sponsors/did.png' alt="logo_did" /></a>
          <a href="https://www.castrol.com/es_ar/argentina/home.html" target="_blank" rel="noopener noreferrer"><img
              class="sizeFotoSponsor3" src='src/assets/Sponsors/castrol.png' alt="logo_castrol" /></a>
        </div>
      </section>
    )
}
export default Sponsors
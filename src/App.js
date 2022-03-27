import './App.css';

function App() {
  return (
    <div className="App">

      <header className='header'>
        <img src="/img/info.png" width={24} alt="info" />
        <span className='title'>¿Cómo actuar en caso de accidente?</span>
      </header>

      <div className="grid-container">
        <div className="grid-item aux">
          <div className='icon-container'>
            <img src="/img/truck.png" width={50} alt="Auxilio" className='item-icon' />
          </div>
          <div className='text'>
            {`Auxilio Mecánico`}
          </div>
        </div>
        <div className="grid-item service-stations">
          <div className='icon-container'>
            <img src="/img/fuel.png" width={48} alt="Estaciones de Servicio" className='item-icon fuel-icon' />
          </div>
          <div className='text'>
            {`Estaciones de Servicio`}
          </div>
        </div>
        <div className="grid-item">
          <div className='icon-container'>
            <img src="/img/carnet.png" width={48} alt="Carnet" className='item-icon carnet-icon' />
          </div>
          <div className='text'>
            {`Mi carnet`}
          </div>
        </div>
          

        <div className="grid-item phone">
          <div className='icon-container'>
            <img src="/img/phone.png" width={48} alt="Teléfono" className='item-icon phone-icon' />
          </div>
          <div className='text'>
            {`Teléfonos`}
          </div>
        </div>

        <div className="grid-item turism">
          <div className='icon-container'>
            <img src="/img/turism.png" width={48} alt="Turismo" className='item-icon turism-icon' />
          </div>
          <div className='text'>
            {`Turismo`}
          </div>
        </div>

        <div className="grid-item turism">
          <div className='icon-container'>
            <img src="/img/office.png" width={48} alt="Oficinas" className='item-icon office-icon' />
          </div>
          <div className='text'>
            {`Oficinas`}
          </div>
        </div>
      </div>

      <div className="more-info-container">
        <a href="https://www.aca.org.ar/">
          Más información en <span className="more-info-text">aca.org.ar</span>
        </a>
      </div>
    </div>
  );
}

export default App;

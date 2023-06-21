import Inicio from './components/Inicio/inicio'
import Sucursales from './components/Sucursales/Sucursales'
import TurnosOnline from './components/TurnosOnline/TurnosOnline'
import Repuestos from './components/Repuestos/Repuestos'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>  
    <Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path="/sucursales" element={<Sucursales/>}/>
    <Route path="/turnosonline" element={<TurnosOnline/>}/>
    <Route path="/repuestos" element={<Repuestos/>}/>
    <Route path= "*" element= {<Navigate to={"/"}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

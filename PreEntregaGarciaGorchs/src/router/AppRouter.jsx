import LoginScreen from "../components/Auth/LoginScreen"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import Checkout from "../components/Checkout/Checkout"
import RegisterScreen from "../components/Auth/RegisterScreen"
import Inicio from '../components/Inicio/inicio'
import Sucursales from '../components/Sucursales/Sucursales'
import TurnosOnline from '../components/TurnosOnline/TurnosOnline'
import Productos from '../components/Productos/Productos'
import Carrito from '../components/Carrito/Carrito'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


const AppRouter = () => {
    const { user } = useContext(AuthContext)
    return (
        <BrowserRouter>
            {
                user.logged
                    ? <>
                        <Routes>
                            <Route path="/" element={<Inicio />} />
                            <Route path="/sucursales" element={<Sucursales />} />
                            <Route path="/turnosonline" element={<TurnosOnline />} />
                            <Route path="/carrito" element={<Carrito />} />
                            <Route path="/productos" element={<Productos />} />
                            <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </>
                    :
                    <Routes>
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/register" element={<RegisterScreen />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
            }
        </BrowserRouter>
    )
}

export default AppRouter
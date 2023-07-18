import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { writeBatch, collection, where, documentId, addDoc, updateDoc, doc, getDoc, query, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../Checkout/Checkout.scss'

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre es muy corto")
        .max(20, "El nombre es demasiado largo"),
    direccion: Yup.string()
        .required("Este campo es obligatorio")
        .min(6, "La dirección es muy corta")
        .max(30, "La dirección es demasiado larga"),
    email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Email inválido")
})

// const fecha = useMemo(() => new Date().toLocaleString(), [cantidad])

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const crearOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            vaciarCarrito()
                        })
                        .catch(err => console.log(err))
                })
        } else {
            alert("Hay items sin stock")
        }

    }

    if (orderId) {
        return (
            <div className="">
                <h2>Tu compra se registró correctamente!</h2>
                <hr />
                <p>Tu número de compra es: <strong>{orderId}</strong></p>
                {/* <h4>{fecha}</h4> */}
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="">
            <Header />
            <div className="texto_checkout">
                <p>¡COMPLETÁ CON TUS DATOS PARA CONFIRMAR LA COMPRA!</p>
            </div>
            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: '',
                }}
                validationSchema={schema}
                onSubmit={crearOrden}
            >
                {() => (
                    <div>
                        <div className="alinear_form">
                            <Form className="style_form">
                                <p className="style_form_txt">
                                Nombre
                                </p>
                                <Field type="text" name="nombre" className="form-control my-1" />
                                <ErrorMessage name="nombre" component={"p"} />
                                <p className="style_form_txt">
                                Direccion
                                </p>
                                <Field type="text" name="direccion" className="form-control my-1" />
                                <ErrorMessage name="direccion" component={"p"} />
                                <p className="style_form_txt">
                                E-Mail
                                </p>
                                <Field type="email" name="email" className="form-control my-1" />
                                <ErrorMessage name="email" component={"p"} />
                            </Form>
                        </div>
                            <div className="btn_style_form">
                                <button className="btn btn-success" type="button">Confirmar Compra</button>
                            </div>
                            <div className="btn_style_form">
                            <Link className="btn btn-primary" type="button" to="/productos">Volver a la tienda</Link>
                            </div>
                        </div>
                )}
            </Formik>
            <Footer />
        </div>
    )
}

export default Checkout
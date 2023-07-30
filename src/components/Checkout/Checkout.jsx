import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link, Navigate } from "react-router-dom";
import {
    writeBatch,
    collection,
    where,
    documentId,
    addDoc,
    query,
    getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Checkout.scss";

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
        .email("Email inválido"),
});

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useCartContext();

    const [orderId, setOrderId] = useState(null);

    const crearOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date(),
        };

        const batch = writeBatch(db);
        const ordersRef = collection(db, "orders");
        const productosRef = collection(db, "productos");

        const q = query(
            productosRef,
            where(
                documentId(),
                "in",
                cart.map((item) => item.id)
            )
        );
        const productos = await getDocs(q);

        const outOfStock = [];

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id);
            const stock = doc.data().stock;

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad,
                });
            } else {
                outOfStock.push(item);
            }
        });

        if (outOfStock.length === 0) {
            batch.commit().then(() => {
                addDoc(ordersRef, orden)
                    .then((doc) => {
                        setOrderId(doc.id);
                        vaciarCarrito();
                    })
                    .catch((err) => console.log(err));
            });
        } else {
            alert("Hay items sin stock");
        }
    };

    if (orderId) {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="texto_checkout1">
                        <p>TU COMPRA SE REGISTRÓ CORRECTAMENTE</p>
                    </div>
                    <div className="texto_checkout2">
                        <p>MUCHAS GRACIAS POR ELEGIRNOS!</p>
                    </div>
                    <p className="texto_checkout3">
                        Tu ID de compra es: <strong>{orderId}</strong>
                    </p>
                </div>
                <div className="botonera_id">
                    <Link to="/">
                        <button className="btn btn-primary">
                            Ir a inicio
                        </button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    if (cart.length === 0) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Header />
            <div className="texto_checkout">
                <p>¡COMPLETÁ CON TUS DATOS PARA CONFIRMAR LA COMPRA!</p>
            </div>
            <Formik
                initialValues={{
                    nombre: "",
                    direccion: "",
                    email: "",
                }}
                classname='formik_style'
                onSubmit={crearOrden}
                validationSchema={schema}
            >
                {() => (
                    <div className="alinear_form">
                        <Form>
                            <Field
                                type="text"
                                name="nombre"
                                className="form-control my-2"
                                placeholder="Nombre y Apellido"
                            />
                            <ErrorMessage name="nombre" component={"p"} />
                            <Field
                                type="text"
                                name="direccion"
                                className="form-control my-2"
                                placeholder="Dirección"
                            />
                            <ErrorMessage name="direccion" component={"p"} />
                            <Field
                                type="email"
                                name="email"
                                className="form-control my-2"
                                placeholder="E-Mail"
                            />
                            <ErrorMessage name="email" component={"p"} />
                            <div className="botonera">
                                <button className="btn btn-success">Confirmar Compra</button>
                            </div>
                            <div className="botonera1">
                                <Link to="/carrito">
                                    <button className="btn btn-danger">
                                        Volver al carrito
                                    </button>
                                </Link>
                            </div>
                        </Form>

                    </div>
                )}
            </Formik>
            <Footer />
        </div>
    );
};

export default Checkout;

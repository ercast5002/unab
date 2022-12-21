
import { useEffect, useState } from "react"
import axios from "axios"
import { Col, Container, Row } from "react-bootstrap"
import { PRODCUTOSCREADOS_GET_ENDPOINT } from "../connections/endpoints"
import { ProductoCard } from "../components/ProductoCard"
import { useNavigate } from "react-router-dom"


const ProductosCreados = () => {

    const [productos, setProductos] = useState([])
    const navegar =useNavigate()
    useEffect(() => {
        axios.get(PRODCUTOSCREADOS_GET_ENDPOINT)
            .then(respuesta => {
                setProductos(respuesta.data)
            })
            .catch(err => {
               console.error(err);
            })
    }, [navegar]);


    return (

        <Container className="mt-3 mb-3">
            <h3 className="text-center">Productos Creados</h3>
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <div className="row justify-content-md-center text-center">
                        {productos.map(producto => <ProductoCard key= {producto.idProducto} producto={producto} />)}
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export { ProductosCreados }

import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { PRODCUTODETALLE_GET_ENDPOINT } from "../connections/endpoints";


const ProductoDetalle = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    const navegar =useNavigate()
    useEffect(() => {
        axios.get( `${PRODCUTODETALLE_GET_ENDPOINT}/${id}`)
            .then(respuesta => {
                setProducto(respuesta.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, [id, navegar]);
    return (
        <Container className="mt-3 mb-3">
            <h3 className="text-center">Productos Detalle</h3>
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <div className="row justify-content-md-center text-center">
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={producto.imagen} />
                            <Card.Title>{producto.idProducto}</Card.Title> 
                              <Card.Text>{producto.descripcion}</Card.Text> 
                              <Card.Text>{producto.categoria}</Card.Text>  
                              <Card.Text>$ {producto.precio}</Card.Text>       
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}
export { ProductoDetalle }
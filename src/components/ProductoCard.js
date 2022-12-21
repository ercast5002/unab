

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductoCard({producto}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Link to ={`/producto/${producto.idProducto}`}>
        {producto.titulo}
        </Link>
        <Link>
        $ {producto.precio}
        </Link>
      </Card.Body>
    </Card>
  );
}

export {ProductoCard}
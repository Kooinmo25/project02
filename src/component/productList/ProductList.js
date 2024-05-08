import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}


function ProductList(props) {

    const titleDel = removebtag(props.title)

    return (
        
                <Col style={{ width: '25%', height: "25%"}}>
                    <Card>
                        <Card.Img variant="top" src={props.image} />
                        <Card.Body>
                            <Card.Title className="text-truncate">{titleDel}</Card.Title>
                            <Card.Text style={{fontWeight: "bold", fontSize: "20px"}}>
                                {props.price} 원
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
    
    );
}

export default ProductList;
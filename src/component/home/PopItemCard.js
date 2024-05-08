import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useMediaQuery } from 'react-responsive';

function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function PopItemCard(props) {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const titleDel = removebtag(props.title);

    return (
        <Col className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: isMobile ? '15rem' : '20rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title className="text-truncate">{titleDel}</Card.Title>
                    <Card.Text style={{ fontWeight: "bold", fontSize: "20px" }}>
                        {props.price} 원
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default PopItemCard;
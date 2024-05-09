import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useMediaQuery } from 'react-responsive';

function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function PopItemCard(props) {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const titleDel = removebtag(props.title);
    const commas = addCommas(props.price)

    return (
        <Col className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: isMobile ? '15rem' : '30rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title className="text-truncate">{titleDel}</Card.Title>
                    <Card.Text style={{ fontWeight: "bold", fontSize: "20px" }} className="d-flex justify-content-between">
                        <span>{commas} 원</span>
                        <ButtonGroup>
                            <Button variant = "secondary">구매하기</Button>
                            <Button variant='secondary'>장바구니에 담기</Button>
                        </ButtonGroup>
                    </Card.Text>
                </Card.Body>
                <Button variant='primary'>상세정보</Button>
            </Card>
        </Col>
    );
}

export default PopItemCard;
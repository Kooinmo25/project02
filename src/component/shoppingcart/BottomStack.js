import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CartContext from '../productList/CartContext';

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function BottomStack() {
    const { totalPrice, setTotalPrice } = useContext(CartContext);
    let comma = addCommas(totalPrice)
    let totalComma= addCommas(totalPrice + 3000)

    
    useEffect(() => {
        // console.log('totalPrice', totalPrice)
        // console.log('commas', comma)
        // console.log('commas', typeof comma)
    },[totalPrice, setTotalPrice])

    return (
        <Container style={{ backgroundColor: '#f0f0f0', border: '2px solid #ccc', borderRadius: '10px', padding: '10px' }}>
            <Row className="align-items-center">
                <Col xs={4} className="text-center" style={{ borderRight: '1px solid #ccc' }}>
                    <div>총 상품금액</div>
                    <div>{comma}원</div>
                </Col>
                <Col xs={4} className="text-center" style={{ borderRight: '1px solid #ccc' }}>
                    <div>배송비</div>
                    <div>3000원</div>
                </Col>
                <Col xs={4} className="text-center">
                    <div>결제예정금액</div>
                    <div>{totalComma}원</div>
                </Col>
            </Row>
        </Container>
    );
}

export default BottomStack;

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function BottomStack() {

    const [Price, setPrice] = useState([]);

    useEffect(() => {
        const totalPrice = Price.reduce((acc, curr) => acc + curr, 0);
        setTotal(totalPrice);
    }, [Price]);
    const [total, setTotal] = useState(0);


    return (
        <Container style={{ backgroundColor: '#f0f0f0', border: '2px solid #ccc', borderRadius: '10px', padding: '10px' }}>
            <Row className="align-items-center">
                <Col xs={4} className="text-center" style={{ borderRight: '1px solid #ccc' }}>
                    <div>총 상품금액</div>
                    <div>{total}원</div>
                </Col>
                <Col xs={4} className="text-center" style={{ borderRight: '1px solid #ccc' }}>
                    <div>배송비</div>
                    <div>3000원</div>
                </Col>
                <Col xs={4} className="text-center">
                    <div>결제예정금액</div>
                    <div>{total + 3000}원</div>
                </Col>
            </Row>
        </Container>
    );
}

export default BottomStack;


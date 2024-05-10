import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function BottomStack() {
    const [totalPrice, setTotalPrice] = useState(0); // 상태 변수로 totalPrice를 관리
    
    const comma = addCommas(totalPrice)

    const totalComma = addCommas(totalPrice + 3000)
    useEffect(() => {
        const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
        const prices = cartList.map(item => parseFloat(item.price));
        const sum = prices.reduce((acc, curr) => acc + curr, 0);

        setTotalPrice(sum); // totalPrice 상태를 업데이트


        
        console.log('prices', prices);
        console.log('sum', sum);
    }, [totalPrice]);

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

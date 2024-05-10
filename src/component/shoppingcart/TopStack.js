import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function TopStack() {
    return (
        <Container style={{ backgroundColor: '#f0f0f0', border: '2px solid #ccc', borderRadius: '10px', padding: '10px' }}>
            <Row className="align-items-center">
                <Col xs={4} className="text-center" style={{ borderRight: '1px solid #ccc' }}>이미지</Col>
                <Col xs={4} className="text-center" style={{ borderRight: '1px solid #ccc' }}>상품정보</Col>
                <Col xs={4} className="text-center">수량</Col>
            </Row>
        </Container>
    );
}

export default TopStack;
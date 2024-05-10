import React, { useContext, useEffect } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useMediaQuery } from 'react-responsive';
import CartContext from '../productList/CartContext';

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
    const { cartList, setCartList } = useContext(CartContext);

    const handleAddToCart = () => {
        const item = { title: props.title, image: props.image, price: props.price };
        const updatedCartList = [...cartList, item];
        setCartList(updatedCartList);
        localStorage.setItem('cartList', JSON.stringify(updatedCartList)); 
    };

    useEffect(() => {
        const savedCartList = JSON.parse(localStorage.getItem('cartList'));
        if (savedCartList) {
            setCartList(savedCartList);
        }
    }, [setCartList]);

    return (
        <Col className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: isMobile ? '15rem' : '30rem' }}>
                <Card.Img
                    variant="top"
                    src={props.image}
                    style={{
                        objectFit: "cover",
                        height: isMobile ? "15rem" : "30rem"
                    }}
                />
                <Card.Body>
                    <Card.Title className="text-truncate">{titleDel}</Card.Title>
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row', alignItems: 'center'
                    }}>
                        <span style={{
                            fontWeight: "bold",
                            fontSize: isMobile ? "16px" : "20px"
                        }}>{commas} 원</span>

                        <div style={{ marginLeft: isMobile ? 0 : 'auto', marginTop: isMobile ? '10px' : 0 }}>
                            <ButtonGroup>
                                <Button
                                    variant="secondary"
                                    size={isMobile ? 'sm' : 'md'}
                                    style={{ fontSize: isMobile ? "0.8rem" : "1rem" }}
                                >구매하기</Button>
                                
                                <Button
                                    as="input"
                                    type="button"
                                    value="장바구니 담기"
                                    onClick={handleAddToCart}
                                    variant='success'
                                    size={isMobile ? 'sm' : 'md'}
                                    style={{ fontSize: isMobile ? "0.8rem" : "1rem" }}
                                />
                            </ButtonGroup>
                        </div>
                    </div>
                </Card.Body>
                <Button variant='primary'>상세정보</Button>
            </Card>
        </Col>
    );
}

export default PopItemCard;
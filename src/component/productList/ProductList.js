import React, { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./ProductCompoReturn.css"
import CartContext from './CartContext';
import Button from 'react-bootstrap/Button';




function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ProductList(props) {
    const commas = addCommas(props.price)
    const titleDel = removebtag(props.title)
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

        <Col className='productList' style={{ width: '80%', height: "40rem" }}>
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title className="text-truncate">{titleDel}</Card.Title>
                    <Card.Text style={{ fontWeight: "bold", fontSize: "20px" }}>
                        {commas} 원
                    </Card.Text>
                    <Card.Text>
                        <Button as="input" type="button" value="장바구니 담기" onClick={handleAddToCart}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductList;

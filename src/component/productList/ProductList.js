import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./ProductCompoReturn.css"
import { useContext, useState } from 'react';


function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function ProductList(props) {
    const {setAddToCart} = useContext();
    const commas = addCommas(props.price)
    const titleDel = removebtag(props.title)



    const handleAddToCart = () => {
        setAddToCart({
            title: props.title,
            image: props.image,
            price: props.price
        });
    };




    return (

        <Col className='productList' style={{ width: '100%', height: "40rem" }}>
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title className="text-truncate">{titleDel}</Card.Title>
                    <Card.Text style={{ fontWeight: "bold", fontSize: "20px" }}>
                        {commas} 원
                    </Card.Text>
                    <Card.Text>
                        <button onClick={handleAddToCart}>장바구니 담기</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default ProductList;
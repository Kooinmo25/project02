import React, { useState, useEffect } from 'react';
import { Stack, Card } from 'react-bootstrap';

function ShoppingCart(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const Id = "SN1EHooVeXWlRky05tyJ";
        const Password = "_MdOmJ8du5";

        fetch(
            "/v1/search/shop?query=여성 옷&filter=used:false&sort=sim&display=10&start=11", {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": Id,
                "X-Naver-Client-Secret": Password,
            },
        }
        )
            .then((response) => response.json())
            .then((json) => {

                setProducts(json.items.map(item => ({
                    id: item.itemId,
                    name: item.title,
                    price: item.lprice,
                    image: item.image,
                })));
            })
    }, []);


    return (
        <Stack direction="horizontal" gap={2} className="shopping-cart">
            {products.map((product) => (
                <Card key={product.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} alt={product.name} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            가격: ${product.price.toLocaleString()}원<br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Stack>
    );
}

export default ShoppingCart;

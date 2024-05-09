import React, { useState,useEffect } from 'react';
import ValueReturn from './Value';

function ShoppingCart() {
    const [products, setProducts] = useState([]);
    const Id = "SN1EHooVeXWlRky05tyJ";
    const Password = "_MdOmJ8du5";

    useEffect(() => {
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
            .then((json) => setProducts(json.items));
    }, []);


    return (
        <div className="products-container">
            {products.map((item, index) => (
                <ValueReturn
                    key={index}
                    title={item.title}
                    image={item.image}
                    price={item.lprice} />
            ))}
        </div>
    );
}

export default ShoppingCart;


import React, { useState, useEffect } from 'react';
import ValueReturn from './Value';



// 데이터 가져오기
function ShoppingCart() {
    const [products, setProducts] = useState([]);
    const Id = "SN1EHooVeXWlRky05tyJ";
    const Password = "_MdOmJ8du5";

    useEffect(() => {
        fetch(
            "/v1/search/shop?query=수영복&filter=used:false&sort=sim&display=3&start=11", {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": Id,
                "X-Naver-Client-Secret": Password,
            },
        })
            .then((response) => response.json())
            .then((json) => setProducts(json.items));
    }, []);


    return (
        <div className="products-container" stlye={{width:'300px'}}>
            {products.map((item, index) => (
                <ValueReturn
                    key={index}
                    image={item.image}
                    title={item.title}
                    price={item.lprice}
                />
            ))}
        </div>
    );
}

export default ShoppingCart;


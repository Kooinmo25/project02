import React, { useState } from 'react';
import ValueReturn from './Value';



function ShoppingCart() {
    const [products, setProducts] = useState([]);

    return (
        <>
            {products.map((item, index) => (
                <ValueReturn
                    key={index}
                    title={item.title}
                    image={item.image}
                    price={item.lprice} />
            ))}
        </>
    );
}

export default ShoppingCart;

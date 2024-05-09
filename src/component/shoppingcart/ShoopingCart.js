// ShoopingCart.js
import React from 'react';
import ValueReturn from './Value';
import ProductList from '../productList/ProductList';

function ShoppingCart({ list, setList }) {

    return (
        <>
            <ProductList />
            {list.map((item, index) => (
                <ValueReturn
                    key={index}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                />
            ))}
        </>
    );
}

export default ShoppingCart;

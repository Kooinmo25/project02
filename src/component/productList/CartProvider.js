// CartProvider.js

import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    return (
        <CartContext.Provider value={{ cartList, setCartList }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

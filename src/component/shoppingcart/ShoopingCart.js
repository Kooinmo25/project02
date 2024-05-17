import React, { useContext, useEffect } from 'react';
import ValueReturn from './Value';
import CartContext from '../productList/CartContext';

function ShoppingCart({ check, setCheck }) {
    const { cartList, setCartList } = useContext(CartContext);

    useEffect(() => {
        // 로컬 스토리지 
        const savedCartList = JSON.parse(localStorage.getItem('cartList'));
        if (savedCartList) {
            setCartList(savedCartList);
        }
        console.log(savedCartList)
    }, [setCartList]);

    return (
        <>
        {/* 맵 사용해 렌더링 */}
            {cartList.map((item, index) => (
                <ValueReturn
                    key={index}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    id={item.id}
                    check={check}
                    setCheck={setCheck}
                    
                />
            ))}

        </>
    );
}

export default ShoppingCart;

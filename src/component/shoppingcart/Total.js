import React from 'react';
import TwoButton from './Button';
import ShoopingCart from './ShoopingCart';
import ModalBox from './Modal';


function Cartreturn({cartList, setCartList}) {
    return (
        <div>
            <TwoButton/>
            <ModalBox/>
            <ShoopingCart cartList={cartList} setCartList={setCartList}/>
        </div>
    );
}

export default Cartreturn;
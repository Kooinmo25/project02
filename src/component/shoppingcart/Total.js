import React from 'react';
import TwoButton from './Button';
import TopStack from './TopStack';
import ShoppingCart from './ShoopingCart';
import BottomStack from './BottomStack';
import Explain from './Explain';



// 최종
function Cartreturn() {
    return (
        <div>
            <TwoButton />
            <TopStack/>
            <ShoppingCart/>
            <BottomStack/>
            <Explain/>
        </div>
    )
}

export default Cartreturn;
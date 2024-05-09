import React from 'react';
import TwoButton from './Button';
import TopStack from './TopStack';
import ShoopingCart from './ShoopingCart';
import BottomStack from './BottomStack';
import Explain from './Explain';


// 최종
function Cartreturn() {
    return (
        <div>
            <TwoButton />
            <TopStack/>
            <ShoopingCart />
            <BottomStack/>
            <Explain/>
        </div>
    );
}

export default Cartreturn;
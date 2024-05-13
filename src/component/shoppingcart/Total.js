import React, { useState } from 'react';
import TwoButton from './TwoButton';
// import TopStack from './TopStack';
import ShoopingCart from './ShoopingCart';
import BottomStack from './BottomStack';
import Explain from './Explain';



// 최종
function Cartreturn() {

    const [check, setCheck] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0); // 상품 총 가격

    return (
        <div>
            <TwoButton check={check} setCheck={setCheck} />
            {/* <TopStack/> */}
            <ShoopingCart check={check} setCheck={setCheck}  />
            <BottomStack totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
            <Explain/>


    
        </div>
    )
}

export default Cartreturn;
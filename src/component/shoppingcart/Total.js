import React, { useState } from 'react';
import TwoButton from './TwoButton';
import ShoopingCart from './ShoopingCart';
import BottomStack from './BottomStack';
import Explain from './Explain';



// 최종
function Cartreturn() {

    const [check, setCheck] = useState(false)

    return (
        <div>
            <TwoButton check={check} setCheck={setCheck} />
            <hr />
            <ShoopingCart check={check} setCheck={setCheck} />
            <hr className='my-4'/>
            <BottomStack/>
            <hr className='my-4'/>
            <Explain/>   
        </div>
    )
}

export default Cartreturn;
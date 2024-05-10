import React, { useState } from 'react';
import TwoButton from './TwoButton';
// import TopStack from './TopStack';
import ShoopingCart from './ShoopingCart';
import BottomStack from './BottomStack';
import Explain from './Explain';



// 최종
function Cartreturn() {

    const [check, setCheck] = useState(false)

    return (
        <div>
            <TwoButton check={check} setCheck={setCheck} />
            {/* <TopStack/> */}
            <ShoopingCart check={check} setCheck={setCheck} />
            <BottomStack />
            <Explain />
        </div>
    )
}

export default Cartreturn;
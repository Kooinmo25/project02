import React from 'react';
import TwoButton from './Button';
import ShoopingCart from './ShoopingCart';
import Box from './Box';

function Cartreturn({list, setList}) {
    return (
        <div>
            <TwoButton/>
            <Box/>
            <ShoopingCart list={list} setList={setList} />
        </div>
    );
}

export default Cartreturn;
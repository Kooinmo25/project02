import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';

// b삭제
function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function addCommas(num) {
    const numString = String(num);
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ValueReturn(props) {
    const titledel = removebtag(props.title);
    const commas = addCommas(props.price);

    function delCartList() {
        const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
        const updatedCartList = cartList.filter(item => item.id !== props.id);
        localStorage.setItem('cartList', JSON.stringify(updatedCartList));
    }


    return (
        <div className='product-item'>
            <Stack direction="horizontal" gap={3}>
                <div>
                    <input type='checkBox' value={props.id} onChange={() => {
                        props.setCheck(!props.check)
                    }} />
                </div>
                <div className="img">
                    <img src={props.image} alt="Product"></img>
                </div>
                <div className="title">{titledel}</div>
                <div className="price">{commas}</div>
                <button onClick={delCartList}>X</button>
            </Stack>
        </div>
    );
}

export default ValueReturn;
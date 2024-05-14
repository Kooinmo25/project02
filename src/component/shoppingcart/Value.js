import { useContext, useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { useMediaQuery } from 'react-responsive';
import CloseButton from 'react-bootstrap/CloseButton';
import './Value.css'
import Form from 'react-bootstrap/Form';
import CartContext from '../productList/CartContext';

// b삭제
function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ValueReturn(props) {
    const titledel = removebtag(props.title);
    const [isDeleted, setIsDeleted] = useState(false); 
    const commas =addCommas(props.price);
    const isMobile = useMediaQuery({ maxWidth: 768});

    function delCartList() {
        const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
        const updatedCartList = cartList.filter(item => item.id !== props.id);
        localStorage.setItem('cartList', JSON.stringify(updatedCartList));
        setIsDeleted(true);
    }

    if (isDeleted) {
        return null;
    }

    return (
        <div className='product-item'>
            <Stack direction={isMobile ? "vertical" : "horizontal"} gap={3}>
                <div>
                    <input 
                    type='checkBox' 
                    value={props.id} 
                    onChange={() => {
                        props.setCheck(!props.check)
                    }} />
                </div>
                <div className="img">
                    <img 
                    src={props.image} 
                    alt="Product"
                    style={{ width : isMobile ? "12rem" : "32rem",
                             height: isMobile ? "12rem" : "32rem"}}></img>
                </div>
                <CloseButton onClick={delCartList} />
            </Stack>
        </div>
    );
}

export default ValueReturn;

import { useContext, useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { useMediaQuery } from 'react-responsive';
import CloseButton from 'react-bootstrap/CloseButton';
import './Value.css'
import Form from 'react-bootstrap/Form';
import CartContext from '../productList/CartContext';
import { useLayoutEffect } from 'react';

// b삭제
function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ValueReturn(props) {
    const titledel = removebtag(props.title);
    
    const [quantityCount, setquantityCount] = useState(1);
    const [isDeleted, setIsDeleted] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const { totalPrice, setTotalPrice } = useContext(CartContext);


    function reset() {
        setTotalPrice(0)
        setquantityCount(0)
    }

    useLayoutEffect(() => {
        let getItemPrice = localStorage.getItem('cartList')
        let cartList = JSON.parse(getItemPrice);
        let prices = cartList.map(item => parseFloat(item.price.replace(/,/g, '')));
        console.log('prices', prices)
        let localAddPrice = prices.reduce((a, b) => a + b, 0);
        console.log('localPrice', localAddPrice)
        setTotalPrice(localAddPrice);
    }, [ setTotalPrice ]);

    function plusButton() {
        setquantityCount(quantityCount + 1);
        if (totalPrice === 0) {
            setTotalPrice(totalPrice + (quantityCount * props.price))
        } else {
            setTotalPrice(totalPrice + ( props.price * 1))
        }
    }

    function minusButton() {
        if (quantityCount > 1) {
            setquantityCount(quantityCount - 1);
            setTotalPrice(totalPrice - props.price); // 
        }
    }

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
                    {/* <Form>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="1"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    checked={props.check}
                                    onChange={() => props.setCheck(!props.check)}
                                />
                            </div>
                        ))}
                    </Form> */}
                </div>
                <div className="cartBox">
                    <img
                        src={props.image}
                        alt="Product"
                        style={{
                            width: isMobile ? "7rem" : "8rem",
                            height: isMobile ? "7rem" : "8rem"
                        }}
                    />
                </div>
                <div className="title"><span style={{ fontSize: '20px' }}>{titledel}</span></div>
                <div className="price"><span style={{ fontSize: '20px' }}>{addCommas(props.price * quantityCount)}원</span></div>
                <div>
                    <button onClick={minusButton}>-</button>
                    <input type='text' value={quantityCount} style={{ width: '20px', textAlign: 'center' }} readOnly />
                    <button onClick={plusButton}>+</button>
                    <button onClick={reset}>reset</button>
                </div>
                <CloseButton onClick={delCartList} />
            </Stack>
        </div>
    );
}

export default ValueReturn;
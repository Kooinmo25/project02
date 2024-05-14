import { useContext, useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { useMediaQuery } from 'react-responsive';
import CloseButton from 'react-bootstrap/CloseButton';
import './Value.css'
// import Form from 'react-bootstrap/Form';
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
    const [count, setCount] = useState(1);
    const [isDeleted, setIsDeleted] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const { totalPrice, setTotalPrice } = useContext(CartContext);


    function reset() {
        setTotalPrice(0)
        setCount(0)
    }

    useEffect(() => {
        setTotalPrice(props.price * count);
    }, [count, props.price, setTotalPrice]);

    function plusButton() {
        setCount(count + 1);
        if (totalPrice === 0) {
            setTotalPrice(totalPrice + (count * props.price))
        } else {
            setTotalPrice(totalPrice + (props.price * 1))
        }
    }

    function minusButton() {
        if (count > 1) {
            setCount(count - 1);
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

                <div className='d-flex align-items-center'>
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
                    <div className="title"><span style={{ fontSize: '20px' }}>{titledel}</span>
                    </div>
                </div>

                <div className={isMobile ? "d-flex align-items-center text-center" : "d-flex align-items-center"}>
                    <div className="price"><span style={{ fontSize: '20px' }}>{addCommas(props.price * count)}원</span></div>
                    <button onClick={minusButton}>-</button>
                    <input type='text' value={count} style={{ width: '30px', textAlign: 'center' }} readOnly />
                    <button onClick={plusButton}>+</button>
                    <button onClick={reset}>reset</button>
                    <CloseButton onClick={delCartList} />
                </div>
            </Stack>
        </div>
    );
}

export default ValueReturn;
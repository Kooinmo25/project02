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
    const [count, setCount] = useState(1);
    const [isDeleted, setIsDeleted] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const { totalPrice, setTotalPrice } = useContext(CartContext);


    function reset() {
        setTotalPrice(0)
        setCount(0)
    }

    useEffect(() => {
    }, [count, totalPrice, setTotalPrice]);

    function plusButton() {
        setCount(count + 1);
        if (totalPrice === 0) {
            setTotalPrice(totalPrice + (count * props.price))
        } else {
            setTotalPrice(totalPrice + ( props.price * 1))
        }
    }

    function minusButton() {
        if (count > 1) {
            setCount(count - 1);
        }

        if(totalPrice !== 0) {
            setTotalPrice(totalPrice -(1 * props.price)); // 
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
                <div className="price"><span style={{ fontSize: '20px' }}>{addCommas(props.price)}원</span></div>
                <div>
                    <button onClick={minusButton}>-</button>
                    <input type='text' value={count} style={{ width: '20px', textAlign: 'center' }} readOnly />
                    <button onClick={plusButton}>+</button>
                    <button onClick={reset}>reset</button>
                </div>
                <CloseButton onClick={delCartList} />
            </Stack>
        </div>
    );
}

export default ValueReturn;
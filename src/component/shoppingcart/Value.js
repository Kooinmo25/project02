import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { useMediaQuery } from 'react-responsive';
import CloseButton from 'react-bootstrap/CloseButton';

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
    const commas = addCommas(props.price);
    const isMobile = useMediaQuery({ maxWidth: 768 });

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
            <Stack gap={3} className="flex-row align-items-center">
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
                        style={{
                            width: isMobile ? "10rem" : "16rem",
                            height: isMobile ? "10rem" : "16rem"
                        }}></img>
                </div>
                <div>
                    <div className="title">{titledel}</div>
                    <div className="price">{commas}원</div>
                </div>
                <CloseButton onClick={delCartList} />
            </Stack>
        </div>
    );
}

export default ValueReturn;
import { useState } from 'react'; // useState 추가
import Stack from 'react-bootstrap/Stack';

// b삭제
function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}


function ValueReturn(props) {
    const titledel = removebtag(props.title);
    const [isDeleted, setIsDeleted] = useState(false); 

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
            <Stack direction="horizontal" gap={3}>
                <div>
                    <input type='checkBox' value={props.id} onChange={() => {
                        props.setCheck(!props.check)
                    }}/>
                </div>
                <div className="img">
                    <img src={props.image} alt="Product"></img>
                </div>
                <div className="title">{titledel}</div>
                <div className="price">{props.price}</div>
                <button onClick={delCartList}>X</button>
            </Stack>
        </div>
    );
}

export default ValueReturn;

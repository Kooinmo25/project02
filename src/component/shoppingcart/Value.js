import Stack from 'react-bootstrap/Stack';


// b삭제
function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

// 데이터출력
function ValueReturn(props) {
    const titledel = removebtag(props.title);


    return (
        <div className='product-item' >
            <Stack direction="horizontal" gap={3}>
                <div className="img">
                    <img src={props.image}></img>
                </div>
                <div className="title" >{titledel}</div>
                <div className="price" >{props.price}</div>
            </Stack>
        </div>
    );
}

export default ValueReturn;
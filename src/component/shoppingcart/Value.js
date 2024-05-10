import React from 'react';

// b 태그 제거 함수
function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function ValueReturn(props) {
    // 제목 b 태그 삭제
    const titledel = removebtag(props.title);

    
    return (
        <div className='product-item' style={{ display: 'flex', alignItems: 'center', border: '1px solid black', padding: '10px', marginBottom: '10px', marginTop: '10px' }}>
            <input type='checkbox' />
            <div className="img" style={{ marginRight: '10px' }}>
                <img src={props.image} alt={titledel} />
            </div>
            <div style={{ marginRight: '10px' }}>
                <div className="title">{titledel}</div>
                <div className="price">{props.price}</div>
            </div>
        </div>
    );
}

export default ValueReturn;
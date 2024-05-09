import React from 'react';
import Stack from 'react-bootstrap/Stack';

function TopStack() {
    return (
        <Stack direction="horizontal" gap={3} style={{ backgroundColor: '#f0f0f0', border: '2px solid #ccc', borderRadius: '10px', padding: '10px', justifyContent: 'space-between' }}>
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: 'ivory', flex: '1', textAlign:'center' }}>이미지</div>
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: 'ivory', flex: '1', textAlign: 'center' }}>상품정보</div>
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: 'ivory', flex: '1', textAlign: 'center' }}>수량</div>
        </Stack>
    );
}

export default TopStack;
import React from 'react';
import Stack from 'react-bootstrap/Stack';

function BottomStack() {
    return (
        <Stack direction="vertical" gap={6} style={{ backgroundColor: '#f0f0f0', border: '2px solid #ccc', borderRadius: '10px', padding: '10px', justifyContent: 'space-between' }}>
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: 'ivory', flex: '1', textAlign:'center' }}>
                <div>총 상품금액</div>
                <div>0원</div>
            </div>
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: 'ivory', flex: '1', textAlign:'center' }}>
                <div>총 배송비</div>
                <div>0원</div>
            </div>
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: 'ivory', flex: '1', textAlign:'center' }}>
                <div>결제예정금액</div>
                <div>0원</div>
            </div>
        </Stack>
    );
}

export default BottomStack;
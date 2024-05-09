import React, { useEffect, useState } from 'react';

function InputBox({ list, setList }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [allList, setAllList] = useState([])

    const clientId = "HV5h7QtkYL9s3BHx903z";
    const clientSecret = "LLJMu3rRAm";

    useEffect(() => {
        

        
        fetch(`/v1/search/shop?query=수영복&filter=used:false&sort=sim&display=100&start=1`, {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": clientId,
                "X-Naver-Client-Secret": clientSecret,
            },
        })
            .then(response => response.json())
            .then(json => setAllList(json.items))

    }, [])




    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filterProducts = () => {
        const filteredProducts = allList.filter(product => 
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setList(filteredProducts); // 부모 컴포넌트에 필터링된 리스트를 전달합니다.
    };

    const enterKey = (event) => {
        if (event.key === 'Enter') {
            filterProducts();
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="검색어를 입력하세요" 
                value={searchTerm} 
                onChange={handleChange} 
                onKeyPress={enterKey}
            />
            <button onClick={filterProducts}>확인</button>
        </div>
    );
}

export default InputBox;

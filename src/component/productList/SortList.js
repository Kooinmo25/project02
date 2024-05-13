import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';





function SortList({ pageNum, priceSort, list, setList }) {

    const [sortName, setSortName] = useState('정확도순')

    function accuracy() {
        const clientId = "HV5h7QtkYL9s3BHx903z";
        const clientSecret = "LLJMu3rRAm";


            fetch(`/v1/search/shop?query=수영복&filter=used:false&sort=${priceSort}&display=20&start=${pageNum}`, {
                method: "GET",
                headers: {
                    "X-Naver-Client-Id": clientId,
                    "X-Naver-Client-Secret": clientSecret,
                },
            })
                .then(response => response.json())
                .then(json => setList(json.items))
            console.log('pagenum', pageNum)

    }

    function priceUp({ list, setList }) {
        const upList = list.map(item => item.lprice);
        upList.sort((a, b) => a - b);
        const sortedList = upList.map(price => list.find(item => item.lprice === price));
        setList(sortedList);
        setSortName('가격 낮은순')
    }

    function priceDown({ list, setList }) {
        const upList = list.map(item => item.lprice);
        upList.sort((a, b) => b - a);
        const sortedList = upList.map(price => list.find(item => item.lprice === price));
        setList(sortedList);
        setSortName('가격 높은순')
    }


    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {sortName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={() => accuracy()}>정확도순</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => priceUp({ list, setList })}>가격 낮은순</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() => priceDown({ list, setList })}>가격 높은순</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SortList;
import Dropdown from 'react-bootstrap/Dropdown';





function SortList({ setPriceSort, list, setList }) {

    function priceUp({list, setList}) {
        const upList = list.map(item => item.lprice);
        upList.sort((a, b) => a - b);
        const sortedList = upList.map(price => list.find(item => item.lprice === price));
        setList(sortedList);
        console.log('upList', upList)
    }

    function priceDown({list, setList}) {
        const upList = list.map(item => item.lprice);
        upList.sort((a, b) => b - a);
        const sortedList = upList.map(price => list.find(item => item.lprice === price));
        setList(sortedList);
        console.log('upList', upList)
    }


    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                정렬
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={() => setPriceSort('sim')}>정확도순</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => priceUp({ list, setList })}>가격 낮은순</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() => priceDown({ list, setList })}>가격 높은순</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SortList;
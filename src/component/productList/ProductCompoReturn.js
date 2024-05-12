import SortButton from "./SortButton";
import GetProductList from "./GetProductList";
import { useState } from "react";
import InputBox from "./InputBox";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import SortList from "./SortList";
import PageNation from "./PageNation";


function ProductCompoReturn({ list, setList }) {

    const [sortNum, setSortNum] = useState(4);
    const [pageNum, setPageNum] = useState(1);
    const [priceSort, setPriceSort] = useState('sim');



    return (

        <div>
            <ButtonGroup>
                <SortButton setSortNum={setSortNum} setPriceSort={setPriceSort} />
                <SortList setPriceSort={setPriceSort} list={list} setList={setList} />
                <InputBox list={list} setList={setList} />
            </ButtonGroup>
            <GetProductList
                list={list}
                setList={setList}
                sortNum={sortNum}
                pageNum={pageNum}
                priceSort={priceSort}
            />
            <PageNation setPageNum={setPageNum} />
        </div>
    );
}

export default ProductCompoReturn;

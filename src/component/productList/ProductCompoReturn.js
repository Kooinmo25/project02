import SortButton from "./SortButton";
import GetProductList from "./GetProductList";
import { useState } from "react";
import Pages from "./PagiNation";
import InputBox from "./InputBox";
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function ProductCompoReturn({ list, setList, }) {

    const [sortNum, setSortNum] = useState(4);
    const [pageNum, setPageNum] = useState(1);



    return (

        <div>
            <ButtonGroup>
                <SortButton setSortNum={setSortNum} />
                <InputBox list={list} setList={setList} />
            </ButtonGroup>
            <GetProductList
                list={list}
                setList={setList}
                sortNum={sortNum}
                pageNum={pageNum}
                add
            />
            <Pages setPageNum={setPageNum} />
        </div>
    );
}

export default ProductCompoReturn;

import SortButton from "./SortButton";
import GetProductList from "./GetProductList";
import { useState } from "react";
import Pages from "./PagiNation";
import InputBox from "./InputBox";



function ProductCompoReturn({ list, setList,}) {

    const [sortNum, setSortNum] = useState(4);
    const [pageNum, setPageNum] = useState(1);

    

    return (

        <div>
            <SortButton setSortNum={setSortNum} />
            <InputBox list={list} setList={setList}/>
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

import SortButton from "./SortButton";
import GetProductList from "./GetProductList";
import { useState } from "react";

function ProductCompoReturn() {

    const [sortNum, setSortNum] = useState(4);

    return (

        <div>
            <SortButton setSortNum={setSortNum} />
            <GetProductList sortNum={sortNum}/>
        </div>
    );
}

export default ProductCompoReturn;

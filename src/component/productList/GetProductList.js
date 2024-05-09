import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Row } from "react-bootstrap";

function GetProductList() {

    const clientId = "HV5h7QtkYL9s3BHx903z";
    const clientSecret = "LLJMu3rRAm";

    let [list, setList] = useState([]);

    useEffect(() => {
        fetch("/v1/search/shop?query=수영복&filter=used:false&sort=sim&display=100&start=1", {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": clientId,
                "X-Naver-Client-Secret": clientSecret,
            },
        })
            .then(response => response.json())
            .then(json => setList(json.items))
    }, [])

    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {list.map((item, index) => (
                <ProductList
                    key={index}
                    title={item.title}
                    image={item.image}
                    price={item.lprice}
                />
            ))}
        </Row>
    )
}

export default GetProductList
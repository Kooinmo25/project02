import { useEffect } from "react";
import ProductList from "./ProductList";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

function GetProductList({ sortNum, pageNum, list, setList }) {



    const clientId = "HV5h7QtkYL9s3BHx903z";
    const clientSecret = "LLJMu3rRAm";


    useEffect(() => {
        fetch(`/v1/search/shop?query=수영복&filter=used:false&sort=sim&display=20&start=${sortNum}`, {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": clientId,
                "X-Naver-Client-Secret": clientSecret,
            },
        })
            .then(response => response.json())
            .then(json => setList(json.items))
            console.log(pageNum)

    }, [sortNum, pageNum])

    return (
        <Row xs={1} md={2} lg={sortNum} className="g-4">
            <Col>
                {list.map((item, index) => (
                    <ProductList
                        key={index}
                        title={item.title}
                        image={item.image}
                        price={item.lprice}
                    />
                ))}
            </Col>
        </Row>
    )
}

export default GetProductList
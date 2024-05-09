import { useEffect, useState } from "react";
import PopItemCard from "./PopItemCard";
import { Row, Col } from "react-bootstrap";

function GetPopularItem() {
    const [products, setProducts] = useState([]);
    const ClientId = "q6nJostYODpavlKH_pBH";
    const ClientPassword = "nSDltXmnhJ";

    useEffect(() => {
        fetch(
            "/v1/search/shop?query=수영복&filter=used:false&sort=sim&display=6&start=11", {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": ClientId,
                "X-Naver-Client-Secret": ClientPassword,
            },
        }
        )
            .then((response) => response.json())
            .then((json) => setProducts(json.items.slice(0,2)))
    }, [])

    return (
        <Row xs={1} md={2} className='g-4'>
            {products.map((item, index) => (
                <Col key={index}>
                    <PopItemCard
                        title={item.title}
                        image={item.image}
                        price={item.lprice} />
                </Col>
            ))}
        </Row>
    );
}

export default GetPopularItem;
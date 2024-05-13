import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductList from "../productList/ProductList";

function Get({ brand, price }) {
    const [list, setList] = useState([]);
    const clientId = "C88k7kKQEPtcbHOYYaRs";
    const clientSecret = "5XoMjg7Tdx";

    useEffect(() => {
        if (brand || price) {
            let url;
            if (typeof brand === 'string') {
                url = `/v1/search/shop?query=${brand}수영복&filter=used:false&sort=sim&display=100&start=1`;
            } else if (price.min && price.max) {
                url = `/v1/search/shop?query=수영복&filter=used:false&sort=sim&display=100&start=1&min=${price.min}&max=${price.max}`;
            }

            fetch(url, {
                method: "GET",
                headers: {
                    "X-Naver-Client-Id": clientId,
                    "X-Naver-Client-Secret": clientSecret,
                },
            })
                .then((response) => response.json())
                .then((json) => setList(json.items))
                .catch((error) => console.error('Error fetching data:', error));
        }
    }, [brand, price]);

    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {list.map((item, index) => (
                <Col key={index}>
                    <ProductList
                        title={item.title}
                        image={item.image}
                        price={item.lprice} // lprice를 전달
                    />
                </Col>
            ))}
        </Row>
    )
}

export default Get;

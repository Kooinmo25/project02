import { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import ProductList from "../productList/ProductList";

function Get({ brand, list, setList, filteredItems = [] }) {
    const [randomItems, setRandomItems] = useState([]);

    useEffect(() => {
        if (brand) { // 브랜드 값이 있을 때만 실행
            const filteredList = list.filter(item => item.brand.includes(brand));
            setList(filteredList);
        }
    }, [brand, list, setList]); // brand 값이 변경될 때마다 실행

    // 무작위 함수
    const getRandomItems = () => {
        const shuffled = [...list].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4); // 예시로 4개 아이템 선택
        setRandomItems(selected);
    };

    return (
        <>
            <Button onClick={getRandomItems}>무작위 상품 보기</Button>
            {filteredItems.length > 0 ? ( // 필터링된 아이템으로 조건 변경
                <Row xs={1} md={2} lg={4} className="g-4">
                    {filteredItems.map((item, index) => (
                        <Col key={index}>
                            <ProductList
                                title={item.title}
                                image={item.image}
                                price={item.lprice}
                            />
                        </Col>
                    ))}
                </Row>
            ) : randomItems.length > 0 ? ( // 무작위 아이템으로 조건 추가
                <Row xs={1} md={2} lg={4} className="g-4">
                    {randomItems.map((item, index) => (
                        <Col key={index}>
                            <ProductList
                                title={item.title}
                                image={item.image}
                                price={item.lprice}
                            />
                        </Col>
                    ))}
                </Row>
            ) : null}
        </>
    )
}

export default Get;

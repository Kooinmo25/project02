import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Category() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // 카테고리 클릭 핸들러
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>성별</Accordion.Header>
                <Accordion.Body>
                    <button onClick={() => handleCategoryClick('성별')}>성별</button>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>브랜드</Accordion.Header>
                <Accordion.Body>
                    <button onClick={() => handleCategoryClick('브랜드')}>브랜드</button>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>가격</Accordion.Header>
                <Accordion.Body>
                    <button onClick={() => handleCategoryClick('가격')}>가격</button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Category;

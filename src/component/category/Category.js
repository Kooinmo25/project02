import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Get from './Get';
import './Category.css';

function Category() {
    const [brand, setBrand] = useState(null);

    // 카테고리 클릭 핸들러
    const handleCategoryClick = (category) => {
        setBrand(category); // 브랜드 상태 업데이트
    };

    // document.querySelector(".button-container").addEventListener("click", function (e) {
    //     if (e.target && e.target.nodeName === "BUTTON") {
    //         console.log(e.target.textContent);
    //     }
    // });

    return (
        <>
            <Get brand={brand} />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="categoryHeader">성별</Accordion.Header>
                    <Accordion.Body className="categoryBody">
                        <div className="button-container">
                            <button className="button" onClick={() => handleCategoryClick('남성')}>남성</button>
                            <button className="button" onClick={() => handleCategoryClick('여성')}>여성</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header className="categoryHeader">브랜드</Accordion.Header>
                    <Accordion.Body className="categoryBody">
                        <div className="button-container">
                            <button className="button" onClick={() => handleCategoryClick('아레나')}>아레나</button>
                            <button className="button" onClick={() => handleCategoryClick('나이키')}>나이키</button>
                            <button className="button" onClick={() => handleCategoryClick('르망고')}>르망고</button>
                            <button className="button" onClick={() => handleCategoryClick('배럴')}>배럴</button>
                            <button className="button" onClick={() => handleCategoryClick('후그')}>레노마</button>
                            <button className="button" onClick={() => handleCategoryClick('센티')}>센티</button>
                            <button className="button" onClick={() => handleCategoryClick('키치피치')}>키치피치</button>
                            <button className="button" onClick={() => handleCategoryClick('스웨이브')}>스웨이브</button>
                            <button className="button" onClick={() => handleCategoryClick('비키니밴더')}>비키니밴더</button>
                            <button className="button" onClick={() => handleCategoryClick('엘르')}>엘르</button>
                            <button className="button" onClick={() => handleCategoryClick('토네이도')}>토네이도</button>
                            <button className="button" onClick={() => handleCategoryClick('미즈노')}>미즈노</button>
                            <button className="button" onClick={() => handleCategoryClick('발리비키')}>발리비키</button>
                            <button className="button" onClick={() => handleCategoryClick('티막')}>티막</button>
                            <button className="button" onClick={() => handleCategoryClick('나인에프엑스')}>나인에프엑스</button>
                            <button className="button" onClick={() => handleCategoryClick('아디다스')}>아디다스</button>
                            <button className="button" onClick={() => handleCategoryClick('리복')}>리복</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header className="categoryHeader">가격</Accordion.Header>
                    <Accordion.Body className="categoryBody">
                        <div className="button-container">
                            <button className="button" onClick={() => handleCategoryClick('가격')}>1만원 ~ 2만원</button>
                            <button className="button" onClick={() => handleCategoryClick('가격')}>2만원 ~ 4만원</button>
                            <button className="button" onClick={() => handleCategoryClick('가격')}>4만원 ~ 8만원</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default Category;

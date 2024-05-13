import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Get from './Get';
import './Category.css';

function Category() {
    const [list, setList] = useState([]);
    const [brand, setBrand] = useState(null);

    // 가격 필터
    function filterByPriceRange(minPrice, maxPrice) {
        const priceTemp = list.filter(item => item.lprice >= minPrice && item.lprice <= maxPrice);
        console.log(priceTemp);
        setList(priceTemp);
    }

    // 카테고리 클릭 핸들러
    const handleCategoryClick = (category) => {
        setBrand(category); // 브랜드 상태 업데이트
    };


    // 각 버튼에 대한 텍스트 배열
    const buttons = [
        ['남성', '여성'],
        ['아레나', '나이키', '르망고', '배럴', '후그', '센티', '키치피치', '스웨이브', '비키니밴더', '엘르', '토네이도', '미즈노', '발리비키', '티막', '나인에프엑스', '아디다스', '리복'
            , '스피도', 'UNKNOWN', '랠리', '레노마', '아쿠아티카', '티어', '제테스', '723후그', '엑스블루', '제이커스', '버버리', '캘빈클라인', '펑키타', '르망고', '아날도바시니', '쿠기'
            , '제인코트', 'GANNI', 'H&M', '스키즈', 'TOTEME', '데이즈데이즈', '닉스원', '필로드', '헤링본', '돌핀', '티에스나인', '에르메스', '오스카', '알라이아 컷아웃', '샤넬', '구찌'],
        ['빨강', '파랑', '초록', '노랑', '주황', '보라', '아이보리', '민트', '핑크', '화이트', '블랙'],
    ];


    const colorClasses = ['red-button', 'blue-button', 'green-button', 'yellow-button', 'orange-button', 'purple-button', 'ivory-button', 'mint-button', 'pink-button', 'white-button', 'black-button'];

    return (
        <>

            <Accordion defaultActiveKey="0" className="main">
                {/* 성별 */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="categoryHeader">성별</Accordion.Header>
                    <Accordion.Body className="categoryBody">
                        <div className="button-container">
                            {buttons[0].map((text) => (
                                <button className="button" onClick={() => handleCategoryClick(text)}>{text}</button>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                {/* 브랜드 */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="categoryHeader">브랜드</Accordion.Header>
                    <Accordion.Body className="categoryBody">
                        <div className="button-container">
                            {buttons[1].map((text) => (
                                <button className="button" onClick={() => handleCategoryClick(text)}>{text}</button>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                {/* 색상 */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="categoryHeader">색상</Accordion.Header>
                    <Accordion.Body className="categoryBody">
                        <div className="button-container">
                            {buttons[2].map((text, index) => (
                                <button className={`button ${colorClasses[index % colorClasses.length]}`} onClick={() => handleCategoryClick(text)}>{text}</button>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                {/* 가격 */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="categoryHeader">가격</Accordion.Header>
                    <Accordion.Body className="categoryBody">
                        <div className="button-container">
                            <button className="button" onClick={() => filterByPriceRange(10000, 20000)}>10,000원 ~ 20,000원</button>
                            <button className="button" onClick={() => filterByPriceRange(20000, 40000)}>20,000원 ~ 40,000원</button>
                            <button className="button" onClick={() => filterByPriceRange(40000, 80000)}>40,000원 ~ 80,000원</button>
                            <button className="button" onClick={() => filterByPriceRange(80000, 120000)}>80,000원 ~ 120,000원</button>
                            <button className="button" onClick={() => filterByPriceRange(120000, 180000)}>120,000원 ~ 180,000원</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Get brand={brand} list={list} setList={setList} />
            </Accordion>
        </>

    );
}

export default Category;
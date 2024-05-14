import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Get from './Get';
import './Category.css';

function Category() {
    const [list, setList] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);  // 필터링된 아이템 상태 추가
    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태 추가
    const [brand, setBrand] = useState(null);

    const clientId = "C88k7kKQEPtcbHOYYaRs";
    const clientSecret = "5XoMjg7Tdx";

    // 가격 필터
    function filterByPriceRange(minPrice, maxPrice) {
        const priceTemp = list.filter(item => item.lprice >= minPrice && item.lprice <= maxPrice);
        setFilteredItems(priceTemp);  // 필터링된 아이템만 업데이트
    }

    // 카테고리 클릭 핸들러
    const handleCategoryClick = (category) => {
        setBrand(category); // 브랜드 상태 업데이트
        setSelectedButton(category);  // 선택된 버튼 상태 업데이트
        fetchItems();  // 브랜드 선택 시 아이템 다시 불러오기
    };

    const getButtonClass = (button) => {
        return `button ${button} ${selectedButton === button ? 'selected' : ''}`;
    };

    useEffect(() => {
        fetchItems();  // 초기 데이터 불러오기 또는 브랜드 변경시 재호출
    }, [brand]);

    const fetchItems = () => {
        if (brand) { // 브랜드 값이 있을 때만 실행
            fetch(
                `/v1/search/shop?query=${brand}수영복&filter=used:false&sort=sim&display=100&start=1`, {
                method: "GET",
                headers: {
                    "X-Naver-Client-Id": clientId,
                    "X-Naver-Client-Secret": clientSecret,
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    setList(json.items);
                    setFilteredItems(json.items); // 초기 로딩 시 필터링된 리스트도 업데이트
                });
        }
    };
    // 각 버튼에 대한 텍스트 배열
    const buttons = [
        ['남성', '여성'],
        ['아레나', '나이키', '르망고', '배럴', '후그', '센티', '키치피치', '스웨이브', '비키니밴더', '엘르', '토네이도', '미즈노', '발리비키', '티막', '나인에프엑스', '아디다스', '리복'
            , '스피도', 'UNKNOWN', '랠리', '레노마', '아쿠아티카', '티어', '제테스', '723후그', '엑스블루', '제이커스', '버버리', '캘빈클라인', '펑키타', '아날도바시니', '쿠기'
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
                                <button className={getButtonClass(text)} onClick={() => handleCategoryClick(text)}>{text}</button>
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
                                <button className={getButtonClass(text)} onClick={() => handleCategoryClick(text)}>{text}</button>
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
                            <button className="button" onClick={() => filterByPriceRange(180000, 360000)}>180,000원 ~ 360,000원</button>
                            <button className="button" onClick={() => filterByPriceRange(360000, 720000)}>360,000원 ~ 720,000원</button>
                            <button className="button" onClick={() => filterByPriceRange(720000, 1440000)}>720,000원 ~ 1,440,000원</button>
                            <button className="button" onClick={() => filterByPriceRange(1440000, 2880000)}>1,440,000원 ~ 2,880,000원</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Get brand={brand} list={list} setList={setList} filteredItems={filteredItems} />
            </Accordion>
        </>

    );
}

export default Category;
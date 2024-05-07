import Accordion from 'react-bootstrap/Accordion';

function Category() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>성별</Accordion.Header>
                <Accordion.Body>
                    남성 여성
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>브랜드</Accordion.Header>
                <Accordion.Body>
                    아레나 나이키 르망고 배럴 후그 레노마 센티 키치피치 스웨이브 비키니밴더 엘르
                    스피도 아디다스 미즈노 랠리 아쿠아티카 티어 나이키스윔 제테스 723후그 엑스블루
                    제이커스 토네이도 버버리 베이직엘르 캘빈클라인 센티 티막 펑키타 아날도바시니
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>가격</Accordion.Header>
                <Accordion.Body>
                    2만원~3만원 3만원~5만원 5만원~7만원 7만원~10만원
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Category;
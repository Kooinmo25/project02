import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}


function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function ProductDetail({ props }) {
    const [lgShow, setLgShow] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [imageInFrame, setImageInFrame] = useState(false);

    const titleDel = removebtag(props.title);
    const commas = addCommas(props.price);

    const handleMouseMove = (e) => {
        const offsetX = 700; // X 축 방향으로의 거리 조절
        const offsetY = 300; // Y 축 방향으로의 거리 조절
        setMousePosition({ x: e.clientX - offsetX, y: e.clientY - offsetY });
        setImageInFrame(
            e.clientX >= mousePosition.x - offsetX &&
            e.clientX <= mousePosition.x + offsetX &&
            e.clientY >= mousePosition.y - offsetY &&
            e.clientY <= mousePosition.y + offsetY
        );
    };
    const handleMouseEnter = () => {
        setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
        setIsMouseOver(false);
    };
    return (
        <>
            <Button variant="primary" size="m" onClick={() => setLgShow(true)}>
                자세히 보기
            </Button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {titleDel}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={props.image}
                            alt={titleDel}
                            style={{
                                width: '70%',
                                height: 'auto',
                            }}
                        />
                        {isMouseOver && (
                            <div
                                style={{
                                    position: 'absolute',
                                    left: mousePosition.x,
                                    top: mousePosition.y,
                                    width: '300px',
                                    height: '300px',
                                    border: '2px solid red',
                                    zIndex: 1000,
                                }}>
                                <img
                                    src={props.image}
                                    alt={titleDel}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        transformOrigin: `50% 50%`,
                                        transform: isMouseOver ? 'scale(4)' : 'scale(1)',
                                        transition: 'transform 0.3s',
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Header>
                    <span style={{ fontSize: '20px', fontWeight:'bold' }}>
                        브랜드: {props.brand ? props.brand : '자사몰'}
                    </span>
                </Modal.Header>
                <Modal.Header>
                    <span style={{ fontSize: '20px' }}>가격: {commas}원</span>
                </Modal.Header>
            </Modal>
        </>
    );
}

export default ProductDetail;
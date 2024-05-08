import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalBox() {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>shooping.naver.com 내용:</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>선택하신 1개 상품을 장바구니에서 삭제하시겠습니까?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">확인</Button>
                    <Button variant="primary">취소</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ModalBox;
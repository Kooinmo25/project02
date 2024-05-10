import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}


function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function ProductDetail({props}) {
    const [lgShow, setLgShow] = useState(false);

    const titleDel = removebtag(props.title)
    const commas = addCommas(props.price)
    
    return (
        <>
            <Button onClick={() => setLgShow(true)}>자세히 보기</Button>

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
                <Modal.Body><img src={props.image} alt={titleDel} style={{maxWidth: '100%'}}/></Modal.Body>
                <Modal.Header>가격: {commas}</Modal.Header>
            </Modal>
        </>
    );
}

export default ProductDetail;
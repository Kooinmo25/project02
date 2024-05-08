import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ModalBox from './Modal'

function TwoButton() {
    const [showModal, setShowModal] = useState(false); 

    const handleShowModal = () => {
        setShowModal(true);
    }


    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">전체 선택</Button>
                <Button variant="secondary" onClick={handleShowModal}>선택 삭제</Button>
            </ButtonGroup>
            <ModalBox showModal={showModal} handleCloseModal={handleCloseModal} />
        </>
    );
}

export default TwoButton;

import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const QuickviewModal = (props) => {
    return (
        <Modal isOpen={props.isQuickviewModalOpen} toggle={props.toggleQuickviewModal} className="modal-lg" >
            <ModalHeader toggle={props.toggleQuickviewModal}>{props.bikeTitle.toUpperCase()}</ModalHeader>
            <ModalBody>
                <div className="row">
                    <div className="col-12">
                        <img src={props.bikeImage} alt={props.bikeTitle} className="img-fluid" />
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default QuickviewModal;
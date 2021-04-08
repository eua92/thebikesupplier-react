import React from 'react';
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const WishListModal = (props) => {
    return (
        <Modal isOpen={props.isWishListModalOpen} toggle={props.toggleWishListModal}>
            <ModalHeader toggle={props.toggleWishListModal}>Wish List</ModalHeader>
            <ModalBody>
                <p className="text-center lead mt-3">Login to add items to the Wish List</p>
            </ModalBody>
            <ModalFooter>
                <div className="options text-right">
                    <p className="pt-1">Not a member?
                        <Link className="blue-text ml-1" to="/signup" onClick={props.toggleWishListModal}>
                            Sign up
                        </Link>
                    </p>
                </div>
                <Button color="info" className="ml-auto" onClick={props.toggleWishListModal}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default WishListModal;
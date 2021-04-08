import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row
} from 'reactstrap';

const ToursModal = (props) => {
    return (
        <Modal isOpen={props.isToursModalOpen} toggle={props.toggleToursModal} className="modal-lg">
            <ModalHeader toggle={props.toggleToursModal}>Book Tour</ModalHeader>
            <ModalBody>
                <Form className="p-4">
                    <Row>
                        <FormGroup className="col-md-6">
                            <Label for="fname">First Name:</Label>
                            <Input
                                type="text"
                                name="fname"
                                id="fname"
                                placeholder="Enter your first name"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="col-md-6">
                            <Label for="lname">Last Name:</Label>
                            <Input
                                type="text"
                                name="lname"
                                id="lname"
                                placeholder="Enter your last name"
                                required
                            />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup className="col-md-6">
                            <Label for="email">Email:</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="col-md-6">
                            <Label for="phone">Phone Number:</Label>
                            <Input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                required
                            />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup className="col-md-6">
                            <Label for="numberOfPeople">Number of people:</Label>
                            <Input
                                type="number"
                                name="numberOfPeople"
                                id="numberOfPeople"
                                min="1"
                                placeholder="1"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="col-md-6">
                            <Label for="startingDate">Starting Date:</Label>
                            <Input
                                type="date"
                                name="startingDate"
                                id="startingDate"
                                required
                            />
                        </FormGroup>
                    </Row>
                    <Row className="mt-3">
                        <div className="col-12 d-flex justify-content-center">
                            <Button type="sumbit" color="info" className="btn-round btn-lg">
                                Book Now
                            </Button>
                        </div>
                    </Row>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ToursModal;
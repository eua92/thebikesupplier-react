import React from 'react';
import { Link } from "react-router-dom";
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';

const LoginModal = (props) => {
    return (
        <Modal isOpen={props.isLoginModalOpen} toggle={props.toggleLoginModal}>
            <ModalHeader toggle={props.toggleLoginModal}>Login</ModalHeader>
            <ModalBody>
                <Form className="p-4">
                    <FormGroup>
                        <Label for="email" className="sr-only">Email address</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" className="sr-only">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            required
                        />
                    </FormGroup>
                    <Button type="submit" color="info" className="btn-block btn-round mb-4">Login</Button>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}Remember me
                        </Label>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <div className="options text-right">
                    <p className="pt-1">Not a member?
                        <Link className="blue-text ml-1" to="/signup" onClick={props.toggleLoginModal}>
                            Sign up
                        </Link>
                    </p>
                </div>
                <Button color="info" className="ml-auto" onClick={props.toggleLoginModal}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default LoginModal;
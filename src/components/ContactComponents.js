import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="contact-header vh-100">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </header>
                <Breadcrumb className="mb-5">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact</BreadcrumbItem>
                </Breadcrumb>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 mb-5 mr-lg-5">
                            <h2>Find Us</h2>
                            <address className="mb-5">
                                Prins Hendrikkade 75 <br />
                                1012 AE, Amsterdam <br />
                                Netherlands <br />
                                <i className="fa fa-phone fa-lg"></i>: +31-655-5105-15 <br />
                                <i className="fa fa-fax fa-lg"></i>: +31-655-5323-10 <br />
                                <i className="fa fa-envelope fa-lg"></i>:
                                <a href="mailto:thebikesupplier@nomail.net"> thebikesupplier@nomail.net</a>
                            </address>
                            <h2>Our Location</h2>
                            <div className="embed-responsive embed-responsive-4by3">
                                <iframe
                                    className="embed-responsive-item"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.4545963457271!2d4.900827665048379!3d52.377005976176086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609b9da42bf29%3A0xa0cf8f157432e289!2zUHJpbnMgSGVuZHJpa2thZGUgNzUsIDEwMTIgQUUgQW1zdGVyZGFtLCDOn867zrvOsc69zrTOr86x!5e0!3m2!1sel!2suk!4v1607178502858!5m2!1sel!2suk"
                                    aria-hidden="false"
                                    title="Location map"
                                >
                                </iframe>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <h2 className="mb-4">Send us a message</h2>
                            <Form>
                                <FormGroup className="mb-4">
                                    <Label for="fname">First Name:</Label>
                                    <Input
                                        type="text"
                                        name="fname"
                                        id="fname"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className="mb-4">
                                    <Label for="lname">Last Name:</Label>
                                    <Input
                                        type="text"
                                        name="lname"
                                        id="lname"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className="mb-4">
                                    <Label for="email">Email:</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className="mb-4">
                                    <Label for="phone">Phone Number:</Label>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className="mb-4">
                                    <Label for="message">Message:</Label>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        id="message"
                                        placeholder="Enter your message"
                                        rows="6"
                                        minLength="4"
                                        required
                                    />
                                </FormGroup>
                                <Button type="sumbit" color="info" className="mb-5">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;

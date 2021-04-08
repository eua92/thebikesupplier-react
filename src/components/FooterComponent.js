import React from 'react';
import { Jumbotron, Button, Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import { Link } from "react-router-dom";

class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-3 col-lg-2 mb-3">
                                <div className="d-block d-md-none">
                                    <Card>
                                        <CardHeader className="pb-1 pt-1">
                                            <h5 className="mb-0">
                                                <Button
                                                    color="link"
                                                    className="btn-block text-left"
                                                    onClick={this.props.toggleLinks}
                                                >
                                                    Links <i className="fa fa-caret-down"></i>
                                                </Button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={this.props.areLinksOpen}>
                                            <CardBody className="p-0">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        <Link to="/home">Home</Link>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <Link to="/bikes">Bikes</Link>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <Link to="/rent">Rent</Link>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <Link to="/repair">Repair</Link>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <Link to="/tours">Tours</Link>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <Link to="/about">About</Link>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <Link to="/contact">Contact</Link>
                                                    </li>
                                                </ul>
                                            </CardBody>
                                        </Collapse>
                                    </Card>
                                </div>
                                <div className="d-none d-md-inline-block">
                                    <h5>Links</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/bikes">Bikes</Link></li>
                                        <li><Link to="/rent">Rent</Link></li>
                                        <li><Link to="/repair">Repair</Link></li>
                                        <li><Link to="/tours">Tours</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3 mb-3">
                                <div className="d-block d-md-none">
                                    <Card>
                                        <CardHeader className="pb-1 pt-1">
                                            <h5 className="mb-0">
                                                <Button
                                                    color="link"
                                                    className="btn-block text-left"
                                                    onClick={this.props.toggleAccount}
                                                >
                                                    My Account <i className="fa fa-caret-down"></i>
                                                </Button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={this.props.isAccountOpen}>
                                            <CardBody className="p-0">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        <Button
                                                            color="link"
                                                            onClick={this.props.toggleLoginModal}
                                                            className="p-0 button-link"
                                                        >
                                                            Login
                                                        </Button>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <Link to="/signup">Create Account</Link>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <Button
                                                            color="link"
                                                            onClick={this.props.toggleWishListModal}
                                                            className="p-0 m-0 button-link"
                                                        >
                                                            Wish List
                                                        </Button>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <Button
                                                            color="link"
                                                            onClick={this.props.toggleBasketModal}
                                                            className="p-0 m-0 button-link"
                                                        >
                                                            Basket
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </CardBody>
                                        </Collapse>
                                    </Card>
                                </div>
                                <div className="d-none d-md-inline-block">
                                    <h5>My Account</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Button
                                                color="link"
                                                onClick={this.props.toggleLoginModal}
                                                className="p-0 button-link">
                                                Login
                                            </Button>
                                        </li>
                                        <li><Link to="/signup">Create Account</Link></li>
                                        <li>
                                            <Button
                                                color="link"
                                                onClick={this.props.toggleWishListModal}
                                                className="p-0 m-0 button-link"
                                            >
                                                Wish List
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                color="link"
                                                onClick={this.props.toggleBasketModal}
                                                className="p-0 m-0 button-link"
                                            >
                                                Basket
                                            </Button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-12 col-md-5 col-lg-4 mb-3">
                                <h5>Our Address</h5>
                                <address>
                                    Prins Hendrikkade 75
                                <br />
                                1012 AE, Amsterdam
                                <br />
                                Netherlands
                                <br />
                                    <i className="fa fa-phone fa-lg"></i>: +31-655-5105-15 <br />
                                    <i className="fa fa-fax fa-lg"></i>: +31-655-5323-10 <br />
                                    <i className="fa fa-envelope fa-lg"></i>:
                                <a href="mailto:thebikesupplier@nomail.net"> thebikesupplier@nomail.net</a>
                                    <br />
                                </address>
                            </div>
                            <div className="col-12 col-md-12 col-lg-3 mb-3">
                                <div className="row justify-content-center">
                                    <div className="col-12 text-center text-lg-left ml-3">
                                        <h5>Follow Us</h5>
                                    </div>
                                    <div className="col-12 text-center text-lg-left">
                                        <a className="btn btn-social-icon btn-google-plus btn-sm mr-2" href="http://google.com/+">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                        <a className="btn btn-social-icon btn-facebook btn-sm mr-2" href="http://www.facebook.com/profile.php?id=">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a className="btn btn-social-icon btn-linkedin btn-sm mr-2" href="http://www.linkedin.com/in/">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <a className="btn btn-social-icon btn-twitter btn-sm mr-2" href="http://twitter.com/">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a className="btn btn-social-icon btn-youtube btn-sm mr-2" href="http://youtube.com/">
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                        <a className="btn btn-social-icon btn-sm mr-2" href="mailto:">
                                            <i className="fa fa-envelope-o"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <p><i className="fa fa-creative-commons"></i> The Bike Supplier - Eva Paradeisi</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Footer;
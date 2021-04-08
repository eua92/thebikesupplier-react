import React from 'react';
import { NavLink } from "react-router-dom";
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavbarText, Button,
} from 'reactstrap';

class Navigation extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar className="navbar-expand-md navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <NavbarBrand className="mr-md-3 mr-lg-5" href="/">
                            <img src="assets/images/logo.png" height="50" alt="Shop logo" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.props.toggleNav} />
                        <Collapse isOpen={this.props.isNavOpen} navbar>
                            <Nav className="navbar-nav mr-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/bikes">BIKES</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/rent">RENT</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/repair">REPAIR</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/tours">TOURS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="navbar-nav navbar-right">
                                <NavbarText className="mr-4">
                                    <Button
                                        color="link"
                                        style={{ color: "black" }}
                                        onClick={this.props.toggleLoginModal}
                                        className="button-link p-0"
                                    >
                                        <span className="fa fa-sign-in mr-1"></span>
                                        <span className="small-text">Login</span>
                                    </Button>
                                </NavbarText>
                                <NavbarText className="mr-4">
                                    <Button
                                        color="link"
                                        style={{ color: "black" }}
                                        onClick={this.props.toggleWishListModal}
                                        className="button-link p-0"
                                    >
                                        <span className="fa fa-heart mr-1"></span>
                                        <span className="small-text">Wish List</span>
                                    </Button>
                                </NavbarText>
                                <NavbarText>
                                    <Button
                                        color="link"
                                        style={{ color: "black" }}
                                        onClick={this.props.toggleBasketModal}
                                        className="button-link p-0"
                                    >
                                        <span className="fa fa-shopping-cart mr-1"></span>
                                        <span className="badge badge-pill badge-success mr-1">0</span>
                                        <span className="small-text">Basket</span>
                                    </Button>
                                </NavbarText>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}


export default Navigation;
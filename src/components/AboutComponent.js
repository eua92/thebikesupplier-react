import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="about-header vh-100">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </header>
                <Breadcrumb className="mb-5">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About</BreadcrumbItem>
                </Breadcrumb>
                <div className="container">
                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-11 pb-3" style={{ borderBottom: "1px solid #d3d3d3" }}>
                            <h1>About Us</h1>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-11 pb-3" style={{ borderBottom: "1px solid #d3d3d3" }}>
                            <h2 className="mb-3">Our Bike Shop</h2>
                            <p>The Bike Supplier was launched back in early 2010 in the city of
                            Amsterdam as a simple bike rental shop. Our passion for cycling combined
                            with our desire to provide high-quality services led to our expansion
                            to retail. Since 2013 we offer a wide variety of more than 20 bike
                            brands, new or used. Moreover our collection includes many different
                            types of bicycles from simple road bikes and children's bikes to mountain
                            and electric ones.</p>
                            <p>Our biggest dream though was to bring people who love cycling together
                            and explore the beauties of Netherlands. That's the reason that in 2017
                            we started organising cycling tour in the city of Amsterdam as well as
                            the rest of the country.</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-11 pb-3">
                            <h2 className="mb-3">Our e-Shop</h2>
                            <p>We launched our web services in 2015 as a way to serve as many people
                            as possible. Visitors of our e-shop can view our products and services,
                            order and pay for their bike online, and make a reservation for one of
                            our tours.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About;
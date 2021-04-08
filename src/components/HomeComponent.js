import React from 'react';
import { Link } from "react-router-dom";
import { SERVICES } from '../shared/services';

function RenderOpeningHours() {
    return (
        <div className="row row-content align-items-center d-flex justify-content-center pb-5">
            <div className="col-12 col-lg-4">
                <img src='assets/images/open.jpg' alt="Open shop" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-7">
                <h2 className="mt-3 mt-lg-0 mb-3 ml-lg-5">Shop Opening Hours</h2>
                <ul className="ml-lg-5 hours-list">
                    <li className="mb-2">Monday-Wednesday-Friday 9:00am to 5:30pm</li>
                    <li className="mb-2">Tuesday-Thursday 9:00am to 8:00pm</li>
                    <li className="mb-2">Saturday 9:00am to 4:00pm</li>
                    <li className="mb-2">Closed on Sunday and Bank Holidays</li>
                </ul>
            </div>
        </div>
    )
}

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        };
    }

    render() {
        const service = this.state.services.map((item, index) => {
            if (index % 2 === 0) {
                return (
                    <div key={item.id} className="row row-content align-items-center d-flex justify-content-center">
                        <div className="col-12 col-lg-4">
                            <img src={item.image} className="img-fluid" alt={item.alt} />
                        </div>
                        <div className="col-12 col-lg-7">
                            <h2 className="mt-3 mt-lg-0">{item.title}</h2>
                            <p>{item.description}</p>
                            <Link to={item.link} className="btn btn-info">{item.linkText}</Link>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div key={item.id} className="row flex-row-reverse row-content align-items-center d-flex justify-content-center">
                        <div className="col-12 col-lg-4">
                            <img src={item.image} className="img-fluid" alt={item.alt} />
                        </div>
                        <div className="col-12 col-lg-7">
                            <h2 className="mt-3 mt-lg-0">{item.title}</h2>
                            <p>{item.description}</p>
                            <Link to={item.link} className="btn btn-info">{item.linkText}</Link>
                        </div>
                    </div>
                )
            }

        })

        return (
            <React.Fragment>
                <header className="index-header vh-100 mb-5">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </header>
                <div className="container">
                    {service}
                    <RenderOpeningHours/>
                </div>
            </React.Fragment>

        );
    }
}

export default Home;
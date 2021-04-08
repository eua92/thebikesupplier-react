import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Repair extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="repair-header vh-100">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </header>
                <Breadcrumb className="mb-5">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Repair</BreadcrumbItem>
                </Breadcrumb>
                <div className="container">
                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-11 pb-3" style={{ borderBottom: "1px solid #d3d3d3" }}>
                            <h1>Repair your Bike</h1>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-11 pb-3" style={{ borderBottom: "1px solid #d3d3d3" }}>
                            <p>The Bike Supplier offers high quality repair services to any type of bike.
                            Our staff is highly equipped to handle any type of fix from a quick flat tire
                            change to a full bike tune.</p>
                            <h2 className="mb-3">Our most common services include:</h2>
                            <ul>
                                <li className="mb-2">Replace or fix a flat tire</li>
                                <li className="mb-2">Clean and lubricate the chain</li>
                                <li className="mb-2">Replace the chainrings</li>
                                <li className="mb-2">Lubricate brakes or cables</li>
                                <li className="mb-2">Replace or adjust v-brakes</li>
                                <li className="mb-2">Adjust the front or rear derailleur</li>
                                <li className="mb-2">Replace handlebar grips</li>
                                <li className="mb-2">Wheel truing</li>
                                <li className="mb-2">Adjust the brackets</li>
                                <li className="mb-2">Replace the pedals</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-11">
                            <h2 className="mb-3">Special offer - Full Bike Tune</h2>
                            <p>A full service in order to ensure that your bike is in perfect
                            condition. It includes a full bike checkup, cleaning, lubrication and
                            adjustment to brakes and shift cable, wheel truing, and bracket
                            adjustment.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Repair;
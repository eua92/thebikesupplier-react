import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RENTALBIKES } from '../shared/rentalBikes';
import RentModal from './RentModalComponent';

class Rent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rentalBikes: RENTALBIKES,
            isRentModalOpen: false
        }
        this.toggleRentModal = this.toggleRentModal.bind(this);
    }

    toggleRentModal() {
        this.setState({
            isRentModalOpen: !this.state.isRentModalOpen
        });
    }

    render() {
        const rentalBike = this.state.rentalBikes.map((item) => {
            return (
                <div className="col-md-6 col-lg-4 pb-4" key={item.id}>
                    <div className="item-box">
                        <figure className="hovereffect">
                            <img src={item.image} alt={item.name} className="img-fluid" />
                            <div className="overlay d-flex flex-row justify-content-center">
                                <Button
                                    color="info"
                                    className="info mt-auto mb-3"
                                    onClick={this.toggleRentModal}
                                >
                                    BOOK NOW
                                </Button>
                            </div>
                        </figure>
                        <h4 className="pb-2">{item.name}</h4>
                        <div className="row ml-auto">
                            <div className="col-6 text-left">
                                <span className="h6">Per Day:</span>
                                <br />
                                <span>&euro; {item.pricePerDay} </span>
                            </div>
                            <div className="col-6 text-left">
                                <span className="h6">Per Week:</span>
                                <br />
                                <span>&euro; {item.pricePerWeek}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <React.Fragment>
                <header className="rent-header vh-100">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </header>
                <Breadcrumb className="mb-5">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Rent</BreadcrumbItem>
                </Breadcrumb>
                <div className="container">
                    <div className="row mb-4">{rentalBike}</div>
                </div>
                <RentModal
                    isRentModalOpen={this.state.isRentModalOpen}
                    toggleRentModal={this.toggleRentModal}
                />
            </React.Fragment>
        )
    }
}

export default Rent;
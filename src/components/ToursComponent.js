import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { TOURS } from '../shared/tours';
import ToursModal from './ToursModalComponent';

class Tours extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tours: TOURS,
            isToursModalOpen: false
        }
        this.toggleToursModal = this.toggleToursModal.bind(this);
    }

    toggleToursModal() {
        this.setState({
            isToursModalOpen: !this.state.isToursModalOpen
        });
    }

    render() {

        const tour = this.state.tours.map((item) => {
            return (
                <div className="col-md-6 col-lg-4 pb-4" key={item.id}>
                    <div className="item-box">
                        <figure className="hovereffect">
                            <img src={item.image} alt={item.alt} className="img-fluid" />
                            <div className="overlay d-flex flex-row justify-content-center">
                                <Button
                                    color="info"
                                    className="info mt-auto mb-3"
                                    onClick={this.toggleToursModal}
                                >
                                    BOOK NOW
                                </Button>
                            </div>
                        </figure>
                        <h4 className="pb-3">{item.name}</h4>
                        <div className="row ml-auto">
                            <div className="col-8 text-left">
                                <p className="lead mb-0">Duration:</p>
                                <p className="font-weight-bold">{item.duration}</p>
                            </div>
                            <div className="col-4 text-left">
                                <p className="lead mb-0">Level:</p>
                                <p className="font-weight-bold">{item.level}</p>
                            </div>
                            <div className="col-8 text-left">
                                <p className="lead mb-0">Distance:</p>
                                <p className="font-weight-bold">{item.distance}</p>
                            </div>
                            <div className="col-4 text-left">
                                <p className="lead mb-0">Price:</p>
                                <p className="font-weight-bold">&euro; {item.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <React.Fragment>
                <header className="tours-header vh-100">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </header>
                <Breadcrumb className="mb-5">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Tours</BreadcrumbItem>
                </Breadcrumb>
                <div className="container">
                    <div className="row mb-4">{tour}</div>
                </div>
                <ToursModal
                    isToursModalOpen={this.state.isToursModalOpen}
                    toggleToursModal={this.toggleToursModal}
                />
            </React.Fragment>
        )
    }
}

export default Tours;
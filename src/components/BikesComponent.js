import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Collapse,
    Button,
    CardBody,
    Card,
    CardHeader
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderCard(props) {
    const bike = props.bikeType.map((item) => {
        return (
            <div className="col-md-6 col-lg-4 pb-4" key={item.id}>
                <div className="item-box">
                    <figure className="hovereffect">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid"
                        />
                        <div className="overlay d-flex flex-row justify-content-center">
                            <Button
                                color="info"
                                className="info mt-auto mb-3 mr-3"
                                onClick={props.toggleWishListModal}
                            >
                                <i className="fa fa-heart"></i>
                            </Button>
                            <Button
                                color="info"
                                className="info mt-auto mb-3 mr-3"
                                onClick={() => {
                                    props.toggleQuickviewModal();
                                    props.quickview(item.image, item.name);
                                }}
                            >
                                <i className="fa fa-eye"></i>
                            </Button>
                            <Button
                                color="info"
                                className="info mt-auto mb-3 mr-3"
                                onClick={() => {
                                    props.addProduct(
                                        item.id,
                                        item.image,
                                        item.name,
                                        item.price
                                    );
                                    props.calculateTotalPrice();
                                }}
                            >
                                <i className="fa fa-shopping-cart"></i>
                            </Button>
                        </div>
                    </figure>
                    <h5 className="h6">{item.name.toUpperCase()}</h5>
                    <h6 className="h5">&euro; {item.price}</h6>
                </div>
            </div>
        );
    });
    return (
        <Card>
            <CardHeader>
                <h5 className="mb-0">
                    <Button color="link" onClick={props.toggleCard}>
                        {props.title}
                    </Button>
                </h5>
            </CardHeader>
            <Collapse isOpen={props.isOpen}>
                <CardBody>
                    <div className="row">{bike}</div>
                </CardBody>
            </Collapse>
        </Card>
    );
}

class Bikes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <header className="bikes-header vh-100">
                    <div className="row">
                        <div className="col-12"></div>
                    </div>
                </header>
                <Breadcrumb className="mb-5">
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Bikes</BreadcrumbItem>
                </Breadcrumb>
                <div className="container">
                    <div className="mb-5">
                        <RenderCard
                            title="Road Bikes"
                            bikeType={this.props.roadBikes}
                            toggleWishListModal={this.props.toggleWishListModal}
                            toggleQuickviewModal={
                                this.props.toggleQuickviewModal
                            }
                            toggleCard={this.props.toggleRoadBikes}
                            isOpen={this.props.isRoadBikesOpen}
                            quickview={this.props.quickview}
                            addProduct={this.props.addProduct}
                            calculateTotalPrice={this.props.calculateTotalPrice}
                        />
                        <RenderCard
                            title="Mountain Bikes"
                            bikeType={this.props.mountainBikes}
                            toggleWishListModal={this.props.toggleWishListModal}
                            toggleQuickviewModal={
                                this.props.toggleQuickviewModal
                            }
                            toggleCard={this.props.toggleMountainBikes}
                            isOpen={this.props.isMountainBikesOpen}
                            quickview={this.props.quickview}
                            calculateTotalPrice={this.props.calculateTotalPrice}
                        />
                        <RenderCard
                            title="Electric Bikes"
                            bikeType={this.props.electricBikes}
                            toggleWishListModal={this.props.toggleWishListModal}
                            toggleQuickviewModal={
                                this.props.toggleQuickviewModal
                            }
                            toggleCard={this.props.toggleElectricBikes}
                            isOpen={this.props.isElectricBikesOpen}
                            quickview={this.props.quickview}
                            calculateTotalPrice={this.props.calculateTotalPrice}
                        />
                        <RenderCard
                            title="Children's Bikes"
                            bikeType={this.props.childrenBikes}
                            toggleWishListModal={this.props.toggleWishListModal}
                            toggleQuickviewModal={
                                this.props.toggleQuickviewModal
                            }
                            toggleCard={this.props.toggleChildrenBikes}
                            isOpen={this.props.isChildrenBikesOpen}
                            quickview={this.props.quickview}
                            calculateTotalPrice={this.props.calculateTotalPrice}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Bikes;

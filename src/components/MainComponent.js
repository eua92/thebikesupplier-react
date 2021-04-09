import React from "react";
import Home from "./HomeComponent";
import Bikes from "./BikesComponent";
import Rent from "./RentComponent";
import Repair from "./RepairComponent";
import Tours from "./ToursComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponents";
import Navigation from "./NavComponent";
import SignUp from "./SignUpComponent";
import Footer from "./FooterComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { ROADBIKES } from "../shared/roadBikes";
import { MOUNTAINBIKES } from "../shared/mountainBikes";
import { ELECTRICBIKES } from "../shared/electricBikes";
import { CHILDRENBIKES } from "../shared/childrenBikes";
import LoginModal from "./LoginModalComponent";
import WishListModal from "./WishListModalComponent";
import BasketModal from "./BasketModalComponent";
import QuickviewModal from "./QuickviewModalComponent";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadBikes: ROADBIKES,
            mountainBikes: MOUNTAINBIKES,
            electricBikes: ELECTRICBIKES,
            childrenBikes: CHILDRENBIKES,
            isRoadBikesOpen: false,
            isMountainBikesOpen: false,
            isElectricBikesOpen: false,
            isChildrenBikesOpen: false,

            isNavOpen: false,
            isLoginModalOpen: false,
            isWishListModalOpen: false,
            isBasketModalOpen: false,

            areLinksOpen: false,
            isAccountOpen: false,

            isQuickviewModalOpen: false,
            quickviewImage: "",
            quickviewTitle: "",

            basketProducts: [],
            totalPrice: 0
        };
        this.toggleRoadBikes = this.toggleRoadBikes.bind(this);
        this.toggleMountainBikes = this.toggleMountainBikes.bind(this);
        this.toggleElectricBikes = this.toggleElectricBikes.bind(this);
        this.toggleChildrenBikes = this.toggleChildrenBikes.bind(this);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleWishListModal = this.toggleWishListModal.bind(this);
        this.toggleBasketModal = this.toggleBasketModal.bind(this);

        this.toggleLinks = this.toggleLinks.bind(this);
        this.toggleAccount = this.toggleAccount.bind(this);

        this.toggleQuickviewModal = this.toggleQuickviewModal.bind(this);
        this.quickview = this.quickview.bind(this);

        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
    }

    toggleRoadBikes() {
        this.setState({
            isRoadBikesOpen: !this.state.isRoadBikesOpen
        });
    }

    toggleMountainBikes() {
        this.setState({
            isMountainBikesOpen: !this.state.isMountainBikesOpen
        });
    }

    toggleElectricBikes() {
        this.setState({
            isElectricBikesOpen: !this.state.isElectricBikesOpen
        });
    }

    toggleChildrenBikes() {
        this.setState({
            isChildrenBikesOpen: !this.state.isChildrenBikesOpen
        });
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleLoginModal() {
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen
        });
    }

    toggleWishListModal() {
        this.setState({
            isWishListModalOpen: !this.state.isWishListModalOpen
        });
    }

    toggleBasketModal() {
        this.setState({
            isBasketModalOpen: !this.state.isBasketModalOpen
        });
    }

    toggleLinks() {
        this.setState({
            areLinksOpen: !this.state.areLinksOpen
        });
    }

    toggleAccount() {
        this.setState({
            isAccountOpen: !this.state.isAccountOpen
        });
    }

    toggleQuickviewModal() {
        this.setState({
            isQuickviewModalOpen: !this.state.isQuickviewModalOpen
        });
    }

    quickview(image, name) {
        this.setState({
            quickviewImage: image,
            quickviewTitle: name
        });
    }

    addProduct(id, image, name, price) {
        let tempProducts = this.state.basketProducts;
        tempProducts.push({
            id: id,
            image: image,
            name: name,
            price: price
        });
        this.setState({
            basketProducts: tempProducts
        });
    }

    removeProduct(id) {
        let tempProducts = this.state.basketProducts.filter(
            (item) => item.id !== id
        );
        this.setState({
            basketProducts: tempProducts
        });
    }

    calculateTotalPrice() {
        let total = 0;
        for (let i = 0; i < this.state.basketProducts.length; i++) {
            total += this.state.basketProducts[i].price;
        }
        this.setState({
            totalPrice: total
        });
    }

    render() {
        console.log(this.state.totalPrice);
        const HomePage = () => {
            return <Home />;
        };

        return (
            <React.Fragment>
                <Router>
                    <Navigation
                        isNavOpen={this.state.isNavOpen}
                        toggleNav={this.toggleNav}
                        isLoginModalOpen={this.state.isLoginModalOpen}
                        toggleLoginModal={this.toggleLoginModal}
                        isWishListModalOpen={this.state.isWishListModalOpen}
                        toggleWishListModal={this.toggleWishListModal}
                        isBasketModalOpen={this.state.isBasketModalOpen}
                        toggleBasketModal={this.toggleBasketModal}
                        productsQuantity={this.state.basketProducts.length}
                    />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route
                            path="/bikes"
                            component={() => (
                                <Bikes
                                    roadBikes={this.state.roadBikes}
                                    mountainBikes={this.state.mountainBikes}
                                    electricBikes={this.state.electricBikes}
                                    childrenBikes={this.state.childrenBikes}
                                    isRoadBikesOpen={this.state.isRoadBikesOpen}
                                    toggleRoadBikes={this.toggleRoadBikes}
                                    isMountainBikesOpen={
                                        this.state.isMountainBikesOpen
                                    }
                                    toggleMountainBikes={
                                        this.toggleMountainBikes
                                    }
                                    isElectricBikesOpen={
                                        this.state.isElectricBikesOpen
                                    }
                                    toggleElectricBikes={
                                        this.toggleElectricBikes
                                    }
                                    isChildrenBikesOpen={
                                        this.state.isChildrenBikesOpen
                                    }
                                    toggleChildrenBikes={
                                        this.toggleChildrenBikes
                                    }
                                    isWishListModalOpen={
                                        this.state.isWishListModalOpen
                                    }
                                    toggleWishListModal={
                                        this.toggleWishListModal
                                    }
                                    isQuickviewModalOpen={
                                        this.state.isQuickviewModalOpen
                                    }
                                    toggleQuickviewModal={
                                        this.toggleQuickviewModal
                                    }
                                    quickview={this.quickview}
                                    addProduct={this.addProduct}
                                    calculateTotalPrice={
                                        this.calculateTotalPrice
                                    }
                                />
                            )}
                        />
                        <Route path="/rent" component={() => <Rent />} />
                        <Route path="/repair" component={() => <Repair />} />
                        <Route path="/tours" component={() => <Tours />} />
                        <Route path="/about" component={() => <About />} />
                        <Route path="/contact" component={() => <Contact />} />
                        <Route path="/signup" component={() => <SignUp />} />
                        <Redirect to="/home" />
                    </Switch>
                    <Footer
                        isLoginModalOpen={this.state.isLoginModalOpen}
                        toggleLoginModal={this.toggleLoginModal}
                        isWishListModalOpen={this.state.isWishListModalOpen}
                        toggleWishListModal={this.toggleWishListModal}
                        isBasketModalOpen={this.state.isBasketModalOpen}
                        toggleBasketModal={this.toggleBasketModal}
                        areLinksOpen={this.state.areLinksOpen}
                        toggleLinks={this.toggleLinks}
                        isAccountOpen={this.state.isAccountOpen}
                        toggleAccount={this.toggleAccount}
                    />
                    <LoginModal
                        isLoginModalOpen={this.state.isLoginModalOpen}
                        toggleLoginModal={this.toggleLoginModal}
                    />
                    <WishListModal
                        isWishListModalOpen={this.state.isWishListModalOpen}
                        toggleWishListModal={this.toggleWishListModal}
                    />
                    <BasketModal
                        isBasketModalOpen={this.state.isBasketModalOpen}
                        toggleBasketModal={this.toggleBasketModal}
                        products={this.state.basketProducts}
                        removeProduct={this.removeProduct}
                        totalPrice={this.state.totalPrice}
                        calculateTotalPrice={this.calculateTotalPrice}
                    />
                    <QuickviewModal
                        isQuickviewModalOpen={this.state.isQuickviewModalOpen}
                        toggleQuickviewModal={this.toggleQuickviewModal}
                        bikeImage={this.state.quickviewImage}
                        bikeTitle={this.state.quickviewTitle}
                    />
                </Router>
            </React.Fragment>
        );
    }
}

export default Main;

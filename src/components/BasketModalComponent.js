import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';

class BasketModal extends React.Component {

    render() {

        const items = this.props.products.map((item) => {
            return (
                <tr key={item.id}>
                    <td><img src={item.image} alt={item.name} className="img-fluid" /><span>{item.name}</span></td>
                    <td><input className="items-quantity" type="number" min="0" /></td>
                    <td><button className="btn btn-danger" type="button">REMOVE</button></td>
                    <td>{item.price}</td>
                </tr>
            )
        })

        return (
            <Modal isOpen={this.props.isBasketModalOpen} toggle={this.props.toggleBasketModal} className="modal-lg" >
                <ModalHeader toggle={this.props.toggleBasketModal}>Basket</ModalHeader>
                <ModalBody>
                    <Form>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col"></th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="3" className="text-right lead">Total</td>
                                        <td className="lead">€ 0</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="d-flex justify-content-center mt-5 mb-3">
                            <Button type="submit" color="info" className="btn-lg mr-5">Purchase</Button>
                            <Button color="info" className="btn-lg" onClick={this.props.toggleBasketModal}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        )

    }
}

export default BasketModal;
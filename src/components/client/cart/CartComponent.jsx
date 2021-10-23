import React, { Component } from 'react';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CartComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: this.props.checkModal
        }
    }
    
    changeStatusModel = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={() => this.changeStatusModel()}  className="modalCart">
                    <ModalHeader>a</ModalHeader>
                    {/* {
                        this.props.sendDataProductsCartDatas.map((item, key) => (
                            <Modal.Body>
                                <div>
                                    <h6>{item.productName}</h6>
                                    <h6>{item.productCost}</h6>
                                    <img src={require(`../../${item.productImage}`).default} style={{ width: 100 }} alt="" />
                                </div>

                            </Modal.Body>
                        ))
                    } */}
                    <Modal.Footer>
                        <Link to={{
                            pathname: "/payment",
                            state: this.state.retrieveDataCarts
                        }}>
                            <button className="btn btn-success">Payment</button>
                        </Link>
                        <Button
                            onClick = {() => this.changeStatusModel()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CartComponent;
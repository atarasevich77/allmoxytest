import React, {useState} from 'react';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import {Button, Modal} from "react-bootstrap";
import productService from "../../services/productService";

const CreateProduct = (props) => {
    const [showModal, setShowForm] = useState(false);
    const [product, setProduct] = useState({});

    const handleCloseModal = () => {
        setProduct({});
        setShowForm(false);
    }

    const onHandleSubmit = () => {
        props.addProduct(product);
        handleCloseModal();
    }

    return (
        <>
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={() => setShowForm(true)}/>
            </Fab>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <div className="row">
                            <div className="col">
                                <input type="text"
                                    className="form-control"
                                    onChange={(e) => setProduct({...product, title: e.target.value})}
                                    placeholder="Title"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="input-group">
                                <textarea className="md-textarea form-control"
                                          rows="3"
                                          onChange={(e) => setProduct({...product, description: e.target.value})}
                                          placeholder="Describe your product"
                                />
                        </div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="row">
                            <div className="col">
                                <input type="number"
                                       className="form-control"
                                       onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
                                       placeholder="Price"/>
                            </div>
                            <div className="col">
                                <input type="number"
                                       className="form-control"
                                       onChange={(e) => setProduct({...product, quantity: Number(e.target.value)})}
                                       placeholder="Quantity"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Upload</span>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" />
                                <label className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onHandleSubmit}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CreateProduct;
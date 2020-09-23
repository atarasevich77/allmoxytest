import React, {useState} from 'react';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import {Button, Modal} from "react-bootstrap";
import ImageUploading from 'react-images-uploading';

const CreateProduct = (props) => {
    const [showModal, setShowForm] = useState(false);
    const [product, setProduct] = useState({});
    const [image, setImage] = useState({});
    const [fileName, setFileName] = useState('Choose image');

    const handleFileUpload = (imageList) => {
        setImage(imageList);
        setFileName(imageList[0]['file'].name);
        setProduct({...product, image: imageList[0]});
    }

    const handleCloseModal = () => {
        setProduct({});
        setFileName('Choose image');
        setShowForm(false);
    }

    const onHandleSubmit = () => {
        props.addProduct(product);
        handleCloseModal();
    }

    return (
        <>
            <Fab size="small" color="primary" aria-label="add" className="ml-auto mb-4 mr-2">
                <AddIcon onClick={() => setShowForm(true)}/>
            </Fab>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <div className="input-group">
                            <input type="text"
                                   className="form-control"
                                   onChange={(e) => setProduct({...product, title: e.target.value})}
                                   placeholder="Title"/>
                        </div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="input-group">
                                <textarea className="md-textarea form-control"
                                          rows="3"
                                          onChange={(e) => setProduct({...product, description: e.target.value})}
                                          placeholder="Describe a product"
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
                            <div className="custom-file">
                                <ImageUploading value={image} onChange={handleFileUpload} dataURLKey="data_url">
                                    {({onImageUpload}) => (
                                        <>
                                            <div className="upload__image-wrapper">
                                                <button onClick={onImageUpload}>
                                                    <label className="custom-file-label">{fileName}</label>
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </ImageUploading>
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
import React, {useState} from 'react';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import green from "@material-ui/core/colors/green";
import ImageUploading from 'react-images-uploading';

const ProductItem = (props) => {
    const { product } = props;
    const [editMode, setEditMode] = useState(false);

    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(product.quantity);
    const [image, setImage] = useState({});
    const [fileName, setFileName] = useState('choose image');

    const handleFileUpload = (imageList) => {
        setImage(imageList[0]);
        setFileName(imageList[0]['file'].name);
    }

    const onDeleteHandle = (id) => {
        props.deleteProduct(id);
    }

    const onEditHandle = () => {
        const newItem = {...product, title: title, description: description, price: price, quantity: quantity, image: image};
        props.editProduct(newItem);
        handleCancel();
    }

    const handleCancel = () => {
        setEditMode(false);
    }

    return (
        <tr>
            {editMode ?
                <>
                    <td>
                        <input type="text" className="form-control" value={title}
                               onChange={(e) => setTitle(e.target.value)}/>
                    </td>
                    <td>
                        <input type="text" className="form-control" value={description}
                               onChange={(e) => setDescription(e.target.value)}/>
                    </td>
                    <td>
                        <input type="number" className="form-control" value={price}
                               onChange={(e) => setPrice(Number(e.target.value))}/>
                    </td>
                    <td>
                        <input type="number" className="form-control" value={quantity}
                               onChange={(e) => setQuantity(Number(e.target.value))}/>
                    </td>
                    <td>
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
                    </td>
                    <td>
                        <SaveIcon style={{ color: green[500] }} onClick={onEditHandle}/>
                    </td>
                    <td>
                        <CancelIcon  color="secondary" onClick={handleCancel}/>
                    </td>
                </>
                :
                <>
                    <td>
                        {product.title}
                    </td>
                    <td>
                        {product.description}
                    </td>
                    <td>
                        {product.price}
                    </td>
                    <td>
                        {product.quantity}
                    </td>
                    <td>
                        <img src={('image' in product) ? product.image['data_url'] : null} height='80' />
                    </td>
                    <td>
                        <EditIcon color="action" onClick={() => setEditMode(true)}/>
                    </td>
                    <td>
                        <DeleteIcon color="secondary" onClick={() => onDeleteHandle(product._id)}/>
                    </td>
                </>
            }
        </tr>
    );
};

export default ProductItem;
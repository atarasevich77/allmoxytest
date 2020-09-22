import React, {useEffect, useState} from 'react';

const ProductsTable = (props) => {
    const products = props.products;

    const onDeleteHandle = (id) => {
        props.deleteProduct(id);
    }

    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Image</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                (products && products.length > 0) ?
                    products.map((product, index) =>
                        <tr key={product._id}>
                            <th>
                                {++index}
                            </th>
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
                                {product.image}
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary">Edit</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary" onClick={() => onDeleteHandle(product._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                    :
                    <tr>
                        <td colSpan="8" className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </td>
                    </tr>
            }
            </tbody>
        </table>
    );
};

export default ProductsTable;
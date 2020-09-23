import React from 'react';
import ProductItem from "./ProductItem";

const ProductsTable = (props) => {
    const products = props.products;

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
                        <ProductItem key={product._id}
                                     index={++index}
                                     product={product}
                                     deleteProduct={props.deleteProduct}
                                     editProduct={props.editProduct}
                        />
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
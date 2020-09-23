import React, {useState} from 'react';
import ProductItem from "./ProductItem";

const ProductsTable = (props) => {
    const {products} = props;
    const [sortedField, setSortedField] = useState(null);

    let sortedProducts = [...products];
    if (sortedField !== null) {
        sortedProducts.sort((a, b) => {
            if (a[sortedField] < b[sortedField]) {
                return -1;
            }
            if (a[sortedField] > b[sortedField]) {
                return 1;
            }
            return 0;
        });
    }

    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">
                    <span onClick={() => setSortedField('title')}>Title</span>
                </th>
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
                products.map((product, index) =>
                    <ProductItem key={product._id}
                                 index={++index}
                                 product={product}
                                 deleteProduct={props.deleteProduct}
                                 editProduct={props.editProduct}
                    />
                )
            }
            </tbody>
        </table>
    );
};

export default ProductsTable;
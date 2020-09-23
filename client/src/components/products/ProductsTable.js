import React, {useMemo, useState} from 'react';
import ProductItem from "./ProductItem";

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'asc';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'asc'
        ) {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort };
};

const ProductsTable = (props) => {
    const { items, requestSort } = useSortableData(props.products);
    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">
                    <button className="btn btn-light btn-sm" onClick={() => requestSort('title')}>Title</button>
                </th>
                <th scope="col">
                    <button className="btn btn-light btn-sm" onClick={() => requestSort('description')}>Description</button>
                </th>
                <th scope="col">
                    <button className="btn btn-light btn-sm" onClick={() => requestSort('price')}>Price</button>
                </th>
                <th scope="col">
                    <button className="btn btn-light btn-sm" onClick={() => requestSort('quantity')}>Quantity</button>
                </th>
                <th scope="col"><button className="btn btn-light btn-sm" disabled={true}>Image</button></th>
                <th scope="col"><button className="btn btn-light btn-sm" disabled={true}>Edit</button></th>
                <th scope="col"><button className="btn btn-light btn-sm" disabled={true}>Delete</button></th>
            </tr>
            </thead>
            <tbody>
            {
                items.map((product, index) =>
                    <ProductItem key={product._id}
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
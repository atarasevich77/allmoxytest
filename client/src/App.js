import React, {useEffect, useState} from "react";
import CreateProduct from "./components/createProduct/CreateProduct";
import {makeStyles} from '@material-ui/core/styles';
import ProductsTable from "./components/products/ProductsTable";
import Footer from "./components/footer/Footer";
import productService from "./services/productService";

function App() {
    const [products, setProducts] = useState(null);

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        },
        main: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(2),
        },
    }));
    const classes = useStyles();

    const getAllProducts = () => {
        productService.getAll()
            .then(response => {
                setProducts(response);
            })
            .catch(error =>
                console.log(error)
            )
    }

    const addProduct = (product) => {
        productService.createProduct(product)
            .then(() => {
                getAllProducts()
            })
            .catch(error => {
                console.log(error)
            })
    }

    const editProduct = (product) => {
        productService.editProduct(product)
            .then(() => {
                getAllProducts()
            })
            .catch(error => {
                console.log(error)
            })
    }

    const deleteProduct = (id) => {
        productService.deleteProduct(id)
            .then(() => {
                getAllProducts()
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className={classes.root}>
            <div className="container-fluid w-75">
                <div className="row p-2">
                    <h3>Products</h3>
                </div>
                {(products && products.length > 0) ?
                    <div className="row">
                        <ProductsTable
                            products={products}
                            editProduct={editProduct}
                            deleteProduct={deleteProduct}
                        />
                        <CreateProduct addProduct={addProduct}/>
                    </div>
                    :
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
            </div>
            <Footer/>
        </div>
    );
}

export default App;

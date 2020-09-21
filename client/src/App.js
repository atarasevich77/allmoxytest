import React, {useState, useEffect} from "react";
import productService from './services/productService';

function App() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        if (!products) {
            getProducts();
        }
    }, []);

    const getProducts = async () => {
        let res = await productService.getAll();
        console.log(res);
        setProducts(res);
    }

    return (
        <div className="App">
            <ul className="list">
                {(products && products.length > 0)
                    ? (
                            products.map(product =>
                                (
                                    <li key={product._id} className="list_item product">
                                        <h3 className="product_title">{product.title}</h3>
                                        <p className="product_description">{product.description}</p>
                                    </li>
                                )
                            )
                        )
                    :
                    <p>No products found</p>
                }
            </ul>
        </div>
    );
}

export default App;

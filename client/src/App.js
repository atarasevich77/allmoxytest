import React from "react";
import CreateProduct from "./components/createProduct/CreateProduct";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import ProductsTable from "./components/products/ProductsTable";
import Footer from "./components/footer/Footer";

function App() {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        },
        main: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Products
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    <CreateProduct />
                </Typography>
                <Typography variant="body1">
                    <ProductsTable />
                </Typography>
            </Container>
            <Footer />
        </div>
    );
}

export default App;

import React from 'react';
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const Footer = () => {

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary">
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/kano-kenji/allmoxytest" target="blank">Github</Link>
                {' '}repository of{' '}
                <Link color="inherit" href="https://allmoxytest.herokuapp.com" target="blank">Allmoxytest</Link>
                {' '}project by Alexander Tarasevich{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const useStyles = makeStyles((theme) => ({
        footer: {
            padding: theme.spacing(3, 2),
            marginTop: 'auto',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        },
    }));
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Copyright />
            </Container>
        </footer>
    );
};

export default Footer;
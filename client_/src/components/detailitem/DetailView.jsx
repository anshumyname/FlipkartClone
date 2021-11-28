
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { LocalOffer as Badge } from "@material-ui/icons";
import { useParams } from "react-router";
import { Box, makeStyles, TableBody, TableCell,Table, TableRow, Typography , Grid} from "@material-ui/core";
import ActionItems from "./ActionItems";

import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#F2F2F2',
    },
    container: {
        // margin: '0 80px',
        background: '#fff',
        display: 'flex',
        [theme.breakpoints.down('md')]:{
            margin: 1,
            padding: '15px'
        }
    },
    rightcontainer: {
        marginTop: '50px',
        '& > *': {
            marginTop: '10px',

        },


    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *': {
            fontSize: 14,
            marginTop: 10
        }
    },
    grey: {
        color: '#878787',
    },
    price: {
        fontSize: 28,
        fontWeight: 600,
    },
    badge: {
        fontSize: 14,
        marginRight: 10,
        color: '#00CC00'

    }

}));





const DetailView = () => {
    const { id } = useParams();
    const { product } = useSelector(state => state.getProductDetails);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
     const date = new Date(new Date().getTime() + (5*24*60*60*1000) );

    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch])
    return (
        <Box className={classes.component}>
            {
                product &&

                <Grid container className={classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItems product={product}/>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightcontainer}>
                        <Typography>
                            {product.title.longTitle}
                        </Typography>
                        <Typography className={clsx(classes.smallText, classes.grey)}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{ width: 77, marginLeft: 20 }}></img></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.grey}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388e3c' }}>{product.price.discount} off</span> &nbsp;&nbsp;&nbsp;
                        </Typography>
                        <Typography style={{margintTop: 20, fontWeight: 600}}>
                            Available Offers
                        </Typography>
                        <Box className={classes.smallText}>
                            <Typography><Badge className={classes.badge}/>Bank Offer10% Instant Discount on RBL Bank Credit and Debit Cards T&C</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik T&C</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer15% Instant discount on first Pay Later order of ₹500 and above T&C</Typography>
                        </Box>

                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.grey}>Delievery</TableCell>
                                    <TableCell style={{fontWeight: 600}}>{date.toDateString()} | ₹40</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.grey}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow >
                                <TableRow >
                                    <TableCell className={classes.grey}>Seller</TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style={{color: '#2874f0'}}>Super Comet</span>
                                        <Typography>GST Invoice Available</Typography>
                                        <Typography>14 Days Return Policy</Typography>
                                        <Typography>View more sellers starting from ₹300</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <img src={sellerURL} style={{width: 390}}/>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.grey}>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>

                </Grid>

            }
        </Box>
    )
}

export default DetailView;

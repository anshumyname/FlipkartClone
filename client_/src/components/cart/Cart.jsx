import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Box, Typography, Button, Grid } from '@material-ui/core';
import { removeFromCart } from '../../redux/actions/cartActions.js';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart.jsx';
import TotalView from './TotalView.jsx';
import { post } from '../../utils/paytm.js';
import { payUsingPaytm } from '../../service/api.js';

const useStyles = makeStyles(theme => ({
    component: {
        padding: '30px 135px',
        display: 'flex',

        [theme.breakpoints.down('md')]: {
            padding: '15px 0px',
        }

    },
    left: {
        // width: '67%'
        marginLeft: '65px',
        [theme.breakpoints.down('sm')]:{
            padding: '10px',
            marginLeft: '0px'
        }
    },
    right: {
        
    },
    header: {
        padding: '15px 24px',
        background: '#fff',

    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        borderTop: '1px solid #f0f0f0',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 /10%)'

    },
    placeorder: {
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 50,
        display: 'flex',
        marginLeft: 'auto'

    },
}));


const Cart = () => {

    const { cartItems } = useSelector(state => state.cart);
    const classes = useStyles();
    const dipatch = useDispatch();

    const removeItem = (id) => {
        dipatch(removeFromCart(id));
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }

    return (
        <>
            {
                cartItems.length ?
                    <Box>
                        <Grid container className={classes.component}>
                            <Grid item lg={7} md={7} sm={12} xs={12} className={classes.left}>
                                <Box className={classes.header}>
                                    <Typography style={{ fontWeight: 600, fontSize: 18 }}>My Cart ({cartItems.length})</Typography>
                                </Box>
                                {
                                    cartItems.map(item => (
                                        <CartItem item={item} removeItem={removeItem} />
                                    ))
                                }
                                <Box className={classes.bottom}>
                                    <Button onClick={()=> buyNow()} variant="contained" className={classes.placeorder}>PLACE ORDER</Button>
                                </Box>
                            </Grid>
                            <Grid item lg={3} md={3} sm={12} xs={12} className={classes.right}>
                                <TotalView cartItems={cartItems} />
                            </Grid>

                        </Grid>
                    </Box>

                    : <EmptyCart />
            }
        </>
    )
}

export default Cart;
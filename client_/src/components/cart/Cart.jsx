import { useEffect } from 'react';
import  {useDispatch, useSelector} from 'react-redux';
import {makeStyles, Box,Typography, Button }from '@material-ui/core';
import { removeFromCart} from '../../redux/actions/cartActions.js';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart.jsx';
import TotalView from './TotalView.jsx';

const useStyles = makeStyles({
    component: {
        padding: '30px 135px',
        display:'flex',

    },
    left: {
        width: '67%'
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
})


const Cart = () => {

    const {cartItems} = useSelector(state => state.cart);
    const classes = useStyles();
    const dipatch = useDispatch();
    
    const removeItem= (id) => {
        dipatch(removeFromCart(id));
    }

    return (
        <>
            {
                cartItems.length? 
                    <Box className ={classes.component}>
                        <Box className={classes.left}>
                            <Box className={classes.header}>
                                <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography>
                            </Box>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} removeItem={removeItem}/>
                                ))
                            }
                            <Box className={classes.bottom}>
                                <Button variant="contained" className={classes.placeorder}>PLACE ORDER</Button>
                            </Box>
                        </Box>
                        
                        <TotalView cartItems={cartItems}/>
                        
                    </Box>    

                    
                    : <EmptyCart />
            }
        </>
    )
}

export default Cart;
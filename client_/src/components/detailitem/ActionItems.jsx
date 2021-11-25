import { Button, Box, makeStyles } from "@material-ui/core";
import { ShoppingCart,  FlashOn } from "@material-ui/icons";
import { useDispatch} from 'react-redux';
import clsx from "clsx";
import { addToCart } from "../../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles({
    leftContainer: {
        padding: '40px 0 0 80px',

    },
    image: {
        padding: '15px 20px',
        border:  '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        height: 50,
        width: '46%',
        borderRadius: 2

    },
    addtocart: {
        background: '#ff9f00',
        color: '#fff',
        marginRight: 10,
        
    },
    buynow: {
        background: '#fb641b',
        color: '#fff'
    }

})

const ActionItems= ({product}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addtocart = () => {
        dispatch(addToCart(product.id));
        navigate('/cart');
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.image} /><br />
            <Button variant="contained" className={clsx(classes.button,classes.addtocart)} onClick={()=> addtocart()}><ShoppingCart />Add to Cart</Button>
            <Button variant="contained" className={clsx(classes.button, classes.buynow)}><FlashOn />Buy Now</Button>
        </Box>
        
    )   
}

export default ActionItems;
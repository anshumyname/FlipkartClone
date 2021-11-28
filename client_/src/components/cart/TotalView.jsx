import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
    component: {
        // width: '30%',
        padding: '10px',
        background: '#fff',
        marginLeft: 15,
    },
    header: {
        padding: '16px 24px',
        borderBottom: '1px solid #f0f0f0',

    },
    container: {
        padding: '15px 24px',
        '& > *': {
            marginTop: 20,
            fontSize: 14,

        }
    },
    gray: {
        color: '#878787',
    },
    price: {
        float: 'right'
    },
    totalamount: {
        fontSize: 18,
        fontWeight: 600,
        borderTop: '1px dashed #e0e0e0',
        padding: '20px 0',
        borderBottom: '1px dashed #e0e0e0'
    }


})



const TotalView = ({ cartItems }) => {
    const classes = useStyles();
    const [ price, setprice] = useState(0);
    const [discount, setdiscount]  = useState(0);
    const totalAmount = () => {
        let price=0, discount=0;
        cartItems.map(item => {
            
            price+=item.price.mrp;
            discount+=(item.price.mrp - item.price.cost);
        })
        setprice(price);
        setdiscount(discount);
    }

    useEffect(() => {
        totalAmount();
    }, [cartItems])
     return (
        <Box className={classes.component}>
            <Box className={classes.header}>
                <Typography className={classes.gray}>PRICE DETAILS</Typography>
            </Box>
            <Box className={classes.container}>
                <Typography >PRICE ( {cartItems.length} item ) <span className={classes.price}>₹{price}</span></Typography>
                <Typography>Discount <span className={classes.price}>-₹{discount}</span></Typography>
                <Typography>Delievery Charge <span className={classes.price}>₹40</span></Typography>
                <Typography className={classes.totalamount}>Total Amount <span className={classes.price}>₹{price-discount+40}</span></Typography>
                <Typography style={{color: 'green'}}>You will Save ₹{discount -40} on this order</Typography>
            </Box>
        </Box>
    )

}

export default TotalView;
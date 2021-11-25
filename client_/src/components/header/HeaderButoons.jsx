import { Button, Box, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart} from '@material-ui/icons'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import Profile from "./Profile";

import { LoginContext } from "../../context/ContextProvider";
import { useSelector } from "react-redux";



const useStyles = makeStyles({
    login: {
         background: '#ffffff',
         color: '#2874f0',
         textTransform: 'none',
         fontWeight: 600,
         borderRadius: 2,
         padding: '5px 40px',
         boxShadow: 'none'
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: '50px',
            fontSize: 12,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff'
        }
    },
    container: {
        display: 'flex'
    }
})


const HeaderButtons = () => {
    const classes = useStyles();
    const [ open, setopen] = useState(false);
    const {account, setAccount} = useContext(LoginContext);
    const { cartItems  } = useSelector(state => state.cart);

    const openLoginDialog = () => {
        
        setopen(true);
    }
    return (
        <Box className={classes.wrapper}>
        {
            account ?
            <Profile account={account}  setAccount={setAccount}/>
            :
            <Link to="/">
                <Button variant="contained" className={classes.login} onClick={() => openLoginDialog()}>Login</Button>
            </Link> 
            
        }
            <Link to="/"><Typography style={{marginTop: 5}}>More</Typography></Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={cartItems.length} color="secondary"> 
                    <ShoppingCart />
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Link>
            <Login open={open} setopen={setopen} setAccount={setAccount}/> 
        </Box>
    )
}

export default HeaderButtons;
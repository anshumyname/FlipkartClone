import { Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import { authenticateSignUp, authenticateLogin } from '../../service/api';


const useStyles = makeStyles({
    component: {
        height: '70vh',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *':{
            marginTop:20
        }
    },
    text: {
        color: '#878787',
        fontSize:12,

    },
    loginBtn: {
        textTransform: 'none',
        background: '#fb641b',
        color: '#FFFFFF',
        height: '48px',
        borderRadius: 2,

    },
    createtext: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    },
    requestBtn: {
        textTransform: 'none',
        background: '#FFFFFF',
        color: '#2874f0',
        height: '48px',
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'

    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        marginTop: 10,
        fontWeight: 600,
        lineHeight: 0,

    } 
})

const initalValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist, and Recommendations',

    },
    signup: {
        view: 'signup',
        heading: 'Looks like youre new here',
        subHeading: 'Sign up with a mobile number',
    },
    
}

const signupinitvalues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const logininitvalues = {
    username: '',
    password: '',
}
const Login = ({ open, setopen , setAccount}) => {

    const classes = useStyles();
    const [account, setaccount] = useState(initalValue.login);
    const [signup, setsignup] = useState(signupinitvalues);
    const [login , setlogin] = useState(logininitvalues);
    const [error, seterror ] = useState(false);

    const signUP = async () => {
        var response = await authenticateSignUp(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username)
    }

    const handleClose = () => {

        setopen(false);
        setaccount(initalValue.login);
    }

    const toggleAccount= () => {
        setaccount(initalValue.signup);
    }   

    const onInputChange = (e) => {
        setsignup({...signup, [e.target.name]: e.target.value})
    }

    const onValueChange = (e) => {
        setlogin({...login, [e.target.name]: e.target.value})
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(login);
        if(!response){
            seterror(true);
            return;
        }
        handleClose();
        seterror(false);
        setAccount(login.username);
    }
     
    return (
        <Dialog open={open} onClose={() => handleClose()}>
            <DialogContent className={classes.component}>
                <Box style={{display: 'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant='h5' style={{fontWeight: 600}}>{account.heading}</Typography>
                        <Typography style={{marginTop: '20px'}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view==='login'?
                    
                    <Box className={classes.login}>
                        <TextField onChange={(e)=> onValueChange(e)} name="username" label="Enter Email/Mobile number"/>
                        <TextField onChange={(e)=> onValueChange(e)} name="password" label="Enter password"/>
                        {
                            error && <Typography className={classes.error}>Invalid username or password</Typography>
                        }
                        <Typography className={classes.text}>
                            By continuing you agree to Flipkart's Terms of Use and Privacy Policy
                        </Typography>
                        <Button variant="contained" onClick={()=> loginUser()} className={classes.loginBtn}>Login</Button>
                        <Typography className={classes.text} style={{textAlign: 'center'}}>OR</Typography>
                        <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                        <Typography className={classes.createtext} onClick={()=> toggleAccount()}>New to Flipkart? Create an account</Typography>
                    </Box> :

                    <Box className={classes.login}>
                        <TextField onChange={(e)=> onInputChange(e)} name="firstname" label="Enter FirstName"/>
                        <TextField onChange={(e)=> onInputChange(e)} name="lastname" label="Enter LastName"/>
                        <TextField onChange={(e)=> onInputChange(e)} name="username" label="Enter Username"/>
                        <TextField onChange={(e)=> onInputChange(e)} name="email" label="Enter Email"/>
                        <TextField onChange={(e)=> onInputChange(e)} name="password" label="Enter password"/>
                        <TextField onChange={(e)=> onInputChange(e)} name="phone" label="Enter Phone number"/>
                        <Button variant="contained" className={classes.loginBtn} onClick={()=> signUP()}>Signup</Button>
                        
                    </Box>
                }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;
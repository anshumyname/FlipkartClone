import { AppBar, Toolbar, makeStyles, Typography, Box } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButoons';

const useStyles = makeStyles({
    header: {
        background: '#2874f0',
        height: 55

    },
    logo: {
        width: 75,
    },
    suburl: {
        width: 10,
        marginLeft: 4,

    },
    container: {
        display: 'flex',
        height: 10
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration: 'none',
        color: '#fff'
    },
    subHeading: {
        fontStyle: 'italic',
        fontSize: 10,
    }
})


const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar)


const Header = () => {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <>
            <AppBar position="static" className={classes.header}>
                <ToolBar>
                    <Link to='/' className={classes.component}>
                        <img src={logoURL} className={classes.logo} />
                        <Box className={classes.container}>
                            <Typography className={classes.subHeading}>Explore <Box component="span" style={{color: '#EEE500'}}>Plus</Box></Typography>
                            <img src={subURL} className={classes.suburl} />
                        </Box>
                    </Link>
                    <SearchBar />
                    <HeaderButtons />
                </ToolBar>
                
            </AppBar>
        </>
    )
}

export default Header;
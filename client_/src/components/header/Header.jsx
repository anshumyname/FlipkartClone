import { AppBar, Toolbar, makeStyles, Typography, Box, Drawer, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButoons';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
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
    },
    list: {
        widht: 250,
    },
    menubutton: { 
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    headerbutton: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))


const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar)


const Header = () => {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setopen] = useState(false);

    const handleClose = () => {
        setopen(false);
    }

    const handleOpen = () => {
        setopen(true);
    }

    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <listItem button>
                    <HeaderButtons />
                </listItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="static" className={classes.header}>
                <ToolBar>
                    <IconButton color="inherit" className={classes.menubutton} onClick={handleOpen}>
                        <Menu />
                    </IconButton>
                    <Drawer open={open} onClose={handleClose}>
                        {list()}
                    </Drawer>

                    <Link to='/' className={classes.component}>
                        <img src={logoURL} className={classes.logo} />
                        <Box className={classes.container}>
                            <Typography className={classes.subHeading}>Explore <Box component="span" style={{ color: '#EEE500' }}>Plus</Box></Typography>
                            <img src={subURL} className={classes.suburl} />
                        </Box>
                    </Link>
                    <SearchBar />
                    <span className={classes.headerbutton}><HeaderButtons /></span>
                </ToolBar>

            </AppBar>
        </>
    )
}

export default Header;
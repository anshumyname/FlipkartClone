import { makeStyles, Typography } from "@material-ui/core";
import { MenuItem, Menu } from "@material-ui/core";
import { useState } from "react";
import { PowerSettingsNew } from "@material-ui/icons";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component: {
        marginTop: '40px',
    },
    logout: {
        marginLeft: '20px',
        fontSize: 14,

    }
})

const Profile = ({ account, setAccount }) => {

    const classes = useStyles();
    const [open, setopen] = useState(false);
    const handleClose = () => {
        setopen(false);
    }

    const handleClick = (event) => {
        setopen(event.currentTarget);
    }
    const logout =() => {
        setAccount('');
    }
    return (
        <>
            <Typography style={{ marginTop: '6px', cursor: 'pointer' }}  onClick={handleClick}>
                Hi {account}!
            </Typography>
            
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick={() => {handleClose(); logout();}}>
                    <PowerSettingsNew fontSize="small" color="primary" />
                        <Typography className={classes.logout}>
                            Logout
                        </Typography>
                </MenuItem>
            </Menu>
        </>

    )

}

export default Profile;
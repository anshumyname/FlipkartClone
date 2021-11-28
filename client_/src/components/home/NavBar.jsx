import { Box, Typography } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { navData } from "../../constants/data";

const useStyles = makeStyles(theme => ({
    component: {
        display: 'flex',
        margin: '25px 130px',
        justifyContent: 'space-between',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px',
        

    },
    image: {
        width: 64,
        
        
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }

}))

const NavBar = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                        <img className={classes.image} src={data.url}/>
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))
            }
            
        </Box>
    )
}

export default NavBar;
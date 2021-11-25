import { ImageURL } from "../../constants/data";
import { Box } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'

    }
})

const MidSection = () => {
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    const classes = useStyles();
    return (
        <>
            <Box className={classes.wrapper}>
                {
                    ImageURL.map(image => (
                        <img src={image} style={{ width: '33%' }} />
                    ))
                }
            </Box>
            <img src={coronaURL} style={{width: '100%', marginTop: '20px'}}/>
        </>
    )

}

export default MidSection;
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Slide from "./Slide";
import MidSection from "./MidSection";
// import { products } from "../../constants/data";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { getProducts as listProducts} from '../../redux/actions/productActions.js';


const useStyles = makeStyles({
    component: {
        padding: '10px',
        background: '#f2f2f2'

    },
    rightWrapper: {
        background: '#FFFFFF',
        padding: 5,
        margin: '120x 0 0 10px',
        width: '17%'
    }
})


const Home = () => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const classes = useStyles();

    const dispatch = useDispatch();

    const {products} = useSelector(state => state.getProducts);
    
    useEffect(() => {
        dispatch(listProducts());
    },[dispatch])

    return (
        <div>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{display: 'flex'}}>
                    <Box style={{width: '83%'}}>
                        <Slide timer={true} title="Deal of the Day" products={products}/>
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={adURL} style={{width: 230}} />
                    </Box>
                </Box>
                <MidSection />
                <Slide timer={false} title="Discounts For You" products={products}/>
                <Slide timer={false} title="Suggested Items" products={products}/>
            </Box>

        </div>
    )
}

export default Home;
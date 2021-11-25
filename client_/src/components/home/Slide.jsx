import { Box, Button, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom';
import DetailView from '../detailitem/DetailView';

import Countdown from 'react-countdown';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const useStyles = makeStyles({
    component: {
        marginTop: 12,
        background: '#FFFFFF'
    },
    deal: {
        padding: '15px 20px',
        display: 'flex'
    },
    dealtext: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25,
    },
    timer: {
        display: 'flex',
        color: '#f7f7f7f',
        marginLeft: 10,
        alignItems: 'center',
    },
    image: {
        height: 150,

    },
    button: {
        marginLeft: 'auto',
        background: '#2874f0',
        borderRadius: 2,
        fontSize: '13px'
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    wrapper: {
        padding: '35px 15px',
    }

})


const Slide = ({ timer, title , products}) => {
    const classes = useStyles();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <span>{hours}:{minutes}:{seconds} left</span>
    }

    return (
        <Box>
            <Box className={classes.deal}>
            <Typography className={classes.dealtext}>{title}</Typography>
                {
                    timer &&
                    <>
                        
                        <img src={timerURL} style={{ width: 24 }} />
                        <Countdown renderer={renderer} date={Date.now() + 5.04e+7} className={classes.timer} />
                        <Button variant='contained' color='primary' className={classes.button}>View ALL</Button>
                    </>
                }
            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={['tablet', 'mobile']}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`}>
                        <Box textAlign="center" className={classes.wrapper}>
                            <img className={classes.image} src={product.url} />
                            <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Typography>
                            <Typography className={classes.text} style={{ color: 'green' }}>{product.discount}</Typography>
                            <Typography className={classes.text} style={{ color: '#212121', opacity: '0.6' }}>{product.tagline}</Typography>
                        </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Slide;
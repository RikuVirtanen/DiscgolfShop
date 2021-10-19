import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    logo: {
        width: '100%',
        height: '60vh',
        alignSelf: 'center',
    }
});

function CarouselMUI() {
    var items = [
        {
            image: "images/bag.jpg"
        },
        {
            image: "images/redshirt.jpg"
        },
        {
            image: "images/11th.jpg"
        },
        {
            image: "images/throw.jpg"
        },
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props) {

    const classes = useStyles();

    return (

        <img src={props.item.image} alt="" className={ classes.logo }/>

    )
}

export default CarouselMUI;
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, Button, Typography, CardMedia, CardContent } from '@mui/material';

function CarouselMUI() {
    var items = [
        {
            name: "Tarjous #1",
            description: "Probably the most random thing you have ever seen!",
            image: "images/throw.jpg"
        },
        {
            name: "Tarjous #2",
            description: "Hello World!",
            image: "images/11th.jpg"
        }
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
    return (
        <Card sx={{ bgcolor: 'pink' , minHeight: 200, marginTop: 0, padding: 5, alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
            <CardContent>
                <Typography color='text.secondary'>
                    <h2>{props.item.name}</h2>
                </Typography>
            </CardContent>
            <CardContent>
                <Typography color='text.secondary'>
                    <p>{props.item.description}</p>
                </Typography>
            </CardContent>
            <CardContent>
                <CardMedia image={ props.item.image } />
            </CardContent>
            <CardContent>
                <Button className="CheckButton">
                    <Typography color='text.secondary'>Check it out!</Typography>
                </Button>
            </CardContent>
        </Card>
    )
}

export default CarouselMUI;
import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function CarouselMUI() {
    var items = [
        {
            image: "images/bag.jpg",
            caption: "Experience the world!"
        },
        {
            image: "images/redshirt.jpg",
            caption: "Feel the world around you"
        },
        {
            image: "images/11th.jpg",
            caption: "New experiences and world of fun"
        },
        {
            image: "images/throw.jpg",
            caption: "Join the club!"
        },
    ]

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }

    return (
        <div>
            <Carousel
            data={items} 
            time={2000}
            width='100vw'
            height='60vh'
            captionStyle={captionStyle}
            radius='0px'
            slideNumber={false}
            slideNumberStyle={null}
            captionPosition='bottom'
            automatic={true}
            dots={true}
            pauseIconColor='white'
            pauseIconSize='40px'
            slideBackgroundColor='darkgrey'
            slideImageFit='cover'
            thumbnails={true}
            thumbnailsWidth='10vw'
            sx={{
                textAlign: 'center',
                maxWidth: '100vw',
                maxHeight: '60vh',
                margin: '40px auto'
            }}
            />
        </div>
        

    )
}



export default CarouselMUI;
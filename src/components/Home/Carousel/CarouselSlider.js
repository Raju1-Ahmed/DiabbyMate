import React from 'react';
import Carousel from 'react-material-ui-carousel';
import SliderContent from './SliderContent';
import Vector from "../../../asset/service/Vector.png"
import Vector1 from "../../../asset/service/Vector (1).png"


const CarouselSlider = () => {
    var items = [
        {
            name: "Testimonials",
            description: "See what our happy customers have to say about us!"
        },
        {
            name: "Testimonials",
            description: "See what our happy customers have to say about us!"

        }
    ]
    return (
        <div style={{ background: '#F6FFFB' , }} >
            <Carousel
            
            NextIcon={<img src={Vector} />}
            PrevIcon={<img src={Vector1} />}
            >
                {
                    items.map((item, i) => <SliderContent key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
};

export default CarouselSlider;
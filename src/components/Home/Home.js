import React from 'react';
import Header from './Header';
import OurService from './OurService';
import WhyChooseUs from './WhyChooseUs';
import CarouselSlider from './Carousel/CarouselSlider';

const Home = () => {
    return (
        <div>
            <Header/>
            <OurService/>
            <WhyChooseUs/>
            <CarouselSlider/>
        </div>
    );
};

export default Home;
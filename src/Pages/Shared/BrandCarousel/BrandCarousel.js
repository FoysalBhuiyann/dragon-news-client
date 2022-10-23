import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import scene1 from '../../../assets/brands/scene1.jpg';
import scene2 from '../../../assets/brands/scene2.jpg';


const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={scene1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={scene2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;
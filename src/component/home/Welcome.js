import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Welcome.css";
import GetPopularItem from './PopularItem';
import { useMediaQuery } from 'react-responsive';

function Welcome({ list, setList }) {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <Carousel controls={true} className={isMobile ? 'mobile-carousel' : ''}>
            {[...Array(3)].map((_, index) => (
                <Carousel.Item key={index}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="m-5">
                            <h1>추천 상품</h1>
                            <GetPopularItem isMobile={isMobile} />
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}



export default Welcome;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Welcome.css";
import GetPopularItem from './PopularItem';
import { useMediaQuery } from 'react-responsive';

function Welcome() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <Carousel>
            {/* 첫 번째 페이지 */}
            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <div className="m-2">
                        <GetPopularItem isMobile={isMobile} />
                    </div>
                </div>
            </Carousel.Item>

            {/* 두 번째 페이지 */}
            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <div className="m-2">
                        <GetPopularItem isMobile={isMobile} />
                    </div>
                </div>
            </Carousel.Item>

            {/* 세 번째 페이지 */}
            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <div className="m-2">
                        <GetPopularItem isMobile={isMobile} />
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Welcome;
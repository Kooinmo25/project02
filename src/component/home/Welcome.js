// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// // import CarouselImage from './CarouselImage';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Welcome() {
//     return (
//         <Carousel>
//             <Carousel.Item>
//                 <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
//                     <Card style={{ width: '18rem' }}>
//                         <Card.Img
//                             variant="top"
//                             src="https://mfhaoswulcnn3822236.cdn.ntruss.com/data/barrel_data/images/productNew/00/00/05/53/63/basic_0000055363_0.gif"
//                         />
//                         <Card.Body>
//                             <Card.Title>First Slide</Card.Title>
//                             <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
//                             <Button variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </Carousel.Item>

//             <Carousel.Item>
//                 <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
//                     <Card style={{ width: '18rem' }}>
//                         <Card.Img
//                             variant="top"
//                             src="https://cdn.stnsports.co.kr//news/photo/202404/214993_222908_517.jpg"
//                         />
//                         <Card.Body>
//                             <Card.Title>Second Slide</Card.Title>
//                             <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
//                             <Button variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </Carousel.Item>

//             <Carousel.Item>
//                 <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
//                     <Card style={{ width: '18rem' }}>
//                         <Card.Img
//                             variant="top"
//                             src="https://news.nateimg.co.kr/orgImg/sd/2023/08/23/120826869.1.jpg"
//                         />
//                         <Card.Body>
//                             <Card.Title>Third Slide</Card.Title>
//                             <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
//                             <Button variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </Carousel.Item>
//         </Carousel>
//     );
// }

// export default Welcome;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Welcome.css";

function Welcome() {
    return (
        <Carousel>
            <Carousel.Item>
                <Row className="justify-content-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300"
                            />
                            <Card.Body>
                                <Card.Title>First Slide 1</Card.Title>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300"
                            />
                            <Card.Body>
                                <Card.Title>First Slide 2</Card.Title>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item>
                <Row className="justify-content-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300"
                            />
                            <Card.Body>
                                <Card.Title>Second Slide 1</Card.Title>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300"
                            />
                            <Card.Body>
                                <Card.Title>Second Slide 2</Card.Title>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item>
                <Row className="justify-content-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300"
                            />
                            <Card.Body>
                                <Card.Title>Third Slide 1</Card.Title>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300"
                            />
                            <Card.Body>
                                <Card.Title>Third Slide 2</Card.Title>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    );
}

export default Welcome;
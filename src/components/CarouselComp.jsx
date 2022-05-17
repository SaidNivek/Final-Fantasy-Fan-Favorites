import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const CarouselComp = (props) => {
    return (
        <div className="carousel-div">
            <Carousel variant="dark" className="carousel" interval="2500">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={props.games[5].logo}
                    alt={props.games[5].name}
                    />
                    <Carousel.Caption>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={props.games[6].logo}
                    alt={props.games[6].name}
                    />
                    <Carousel.Caption>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={props.games[8].logo}
                    alt={props.games[8].name}
                    />
                    <Carousel.Caption>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComp;

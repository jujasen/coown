import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react'
import Person from '../img/person.png'
import Line from './Line';

const Feedback = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="m--b">
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="d-block w-100 feedback__item-bcg">
                </div>
                <Carousel.Caption>
                    <div className="feedback__item">
                        <div className="f f--j-center f--a-center">
                            <img className="feedback__img" src={Person} alt="person"></img>
                            <p className="feedback__caption">Ved hjelp av CO-OWN fant jeg et sted å bo sammen
med fantastiske mennesker, kan virkelig anbefales!</p>
                        </div>
                        <p className="feedback__person">Marianne (20)</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-block w-100 feedback__item-bcg">
                </div>

                <Carousel.Caption>
                    <div className="feedback__item">
                        <div className="f f--j-center f--a-center">
                            <img className="feedback__img" src={Person} alt="person"></img>
                            <p className="feedback__caption">Ved hjelp av CO-OWN fant jeg et sted å bo sammen
med fantastiske mennesker, kan virkelig anbefales!</p>
                        </div>
                        <p className="feedback__person">Marianne (20)</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-block w-100 feedback__item-bcg">
                </div>

                <Carousel.Caption>
                    <div className="feedback__item">
                        <div className="f f--j-center f--a-center">
                            <img className="feedback__img" src={Person} alt="person"></img>
                            <p className="feedback__caption">Ved hjelp av CO-OWN fant jeg et sted å bo sammen
med fantastiske mennesker, kan virkelig anbefales!</p>
                        </div>
                        <p className="feedback__person">Marianne (20)</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Line full/>
        </div>
    );
}

export default Feedback;
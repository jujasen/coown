import Image from '../img/interior.png';
import Layout from '../img/layout.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AptRes = (props) => {
    const { item } = props;
    const [filteredRooms, setFilteredRooms] = useState();
    const [lowestPrice, setLowestPrice] = useState();

    useEffect(() => {
        let result = item.rooms?.filter((room) => {
            return room.available === true;
        })
        setFilteredRooms(result);

    }, [item.rooms])

    useEffect(() => {
        let result = item.rooms.sort(function (a, b) {
            return a.price - b.price
        })
        setLowestPrice(result);

    }, [item.rooms])

    return (
        <Link to={`results/apt/${item.id}`}>
            <div className="aptres">
                <img className="aptres__img" src={Image} alt={item.title}></img>
                <div>
                    <p className="aptres__region">{item.region}</p>
                    <h3 className="aptres__title">{item.title}</h3>
                    <div className="f f--a-center f--j-space">
                        <div>
                            <p className="aptres__rooms">Ledige rom: {filteredRooms ? filteredRooms.length : ''} av {item.rooms.length}</p>
                            <p className="aptres__price"> fra kr {lowestPrice ? lowestPrice[0].price : ''}</p>
                        </div>
                        <img className="aptres__layout" src={Layout} alt={item.title + ' floor plans'}></img>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default AptRes;
import Image from '../img/interior2.svg';
import Coins from '../img/coins.svg'
import Layout from '../img/layout.svg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Subheading from './Subheading';

const RoomRes = (props) => {
    const { aptId, room } = props;

    useEffect(() => {


    }, [])

    return (
        <Link to={`${aptId}/${room.id}`}>
            <div className="aptres m--b">
                <img className="m--b-s" src={Image} alt={"room number " + room.id}></img>
                <div className="m--b-s">
                    <div className="m--b-s f f--a-center f--j-space">
                        <Subheading nomarg teal bold small title={"ROM " + room.id} />
                        <div className={`tag ${room.available ? 'tag--true' : 'tag--false'}`}>{room.available ? 'Ledig' : 'Solgt'}</div>
                    </div>
                    
                    <div className="f f--a-center f--j-space">
                        <div className="f f--a-center">
                            <img className="img--xs m--r" src={Coins} alt="coins"></img>
                            <div>
                                <p className="m--none">Prisantydning</p>
                                <p className="m--none">kr {room.price}</p>
                            </div>
                        </div>
                        <img className="img--s" src={Layout} alt="floorplan"></img>
                    </div>
                    
                </div>
            </div>
        </Link>
    );
}

export default RoomRes;
import Image from '../img/interior2.svg';
import Coins from '../img/coins-light.svg';
import Sale from '../img/sale.svg';
import Bid from '../img/bud.svg';
import Contact from '../img/kontakt.svg';
import Card from '../img/card-light.svg';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../utils/apartments.json';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Heading from '../components/Heading';
import Subheading from '../components/Subheading';
import Text from '../components/Text';
import RoomRes from '../components/RoomRes';
import Order from '../components/Order';
import ContactModal from '../components/ContactModal';

const Room = () => {

    const { id, aptId } = useParams();
    let history = useHistory();
    const [order, setOrder] = useState(false);
    const [contact, setContact] = useState(false);
    const [room, setRoom] = useState();
    const [apartment, setApartment] = useState();


    useEffect(() => {
        let apt;
        apt = data?.filter((apt) => {
            return apt.id === Number(aptId);
        });

        setApartment(apt[0]);
    }, [aptId])
    
    useEffect(() => {
        let room = apartment?.rooms?.filter((room) => {
            return room.id === Number(id);
        });
       if (room) {
           setRoom(room[0])
       }
    }, [id, apartment])

    return (
        <div className="apt page">
            {order ? <Order onChildClick={() => {
                setOrder(false)
            }}/> : ''}
            {contact ? <ContactModal onChildClick={() => {
                setContact(false)
            }} /> : ''}
            {room ?
                <div className="padded">
                    <div className="m--b" onClick={() => history.goBack()}>Tilbake</div>
                    <p>{room.title}</p>
                    <img className="m--b" src={Image} alt="interior"></img>
                    <Subheading small nomarg grey title={apartment.title} />
                    <Heading teal bold title={"ROM " + room.id} />
                    <div className="f f--a-center m--b-s">
                        <img className="img--xs  m--r" src={Coins} alt="coins"></img>
                        <div>
                            <Subheading small nomarg grey title={"Prisantydning"} />
                            <p className="m--none">{"kr " + room.price}</p>
                        </div>
                    </div>
                    <div className="f f--a-center m--b">
                        <img className="img--xs  m--r" src={Card} alt="bankcard"></img>
                        <div>
                            <Subheading small nomarg grey title={"Felleskostnader"} />
                            <p className="m--none">{"kr " + room.utilities}</p>
                        </div>
                    </div>
                    <div className="card m--b">
                        <div className="pointer f f--a-center p--b-s border-b"
                            onClick={() => {
                                setOrder(true);
                            }}
                        >
                            <img className="img--s m--r" alt="house" src={Sale}></img>
                            <p className="m--none text">Bestill komplett salgsoppgave</p>
                        </div>
                        <div className="f f--a-center p--b-s m--t-s border-b pointer"
                            onClick={() => {
                                setContact(true);
                            }}
                        >
                            <img className="img--s m--r" alt="floors" src={Contact}></img>
                            <p className="m--none text">Ta kontakt for spørsmål og visning</p>
                        </div>
                        <a href="https://tryggbudgivning.no/">
                            <div className="f f--a-center p--b-s m--t-s">
                                <img className="img--s m--r" alt="floors" src={Bid}></img>
                                <p className="m--none text">Gi bud</p>
                            </div>
                        </a>
                        
                    </div>
                    <Subheading grey title="Om rommet" />
                    <Text small text={room.description} />
                    {/* <Subheading grey title="Rom i kollektivet" />
                    {sortedRooms?.map(function (room) {
                        return (
                            <RoomRes key={room.id} aptId={apt.id} room={room} />
                        )
                    })} */}
                </div>

                :
                ''
            }


        </div>
    );
}

export default Room;
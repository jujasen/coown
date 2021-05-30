import Image from '../img/interior2.svg';
import Coins from '../img/coins-light.svg';
import Sale from '../img/sale.svg';
import Bid from '../img/bud.svg';
import Contact from '../img/kontakt.svg';
import Card from '../img/card-light.svg';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../utils/apartments.json';
import { useHistory } from "react-router-dom";
import Heading from '../components/Heading';
import Subheading from '../components/Subheading';
import Text from '../components/Text';
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
        <div className="apt page padded">
            {order ? <Order onChildClick={() => {
                setOrder(false)
            }}/> : ''}
            {contact ? <ContactModal onChildClick={() => {
                setContact(false)
            }} /> : ''}
            {room ?
                <div className="padded padding top">
                    <div className="m--b" onClick={() => history.goBack()}>Tilbake</div>
                    <p>{room.title}</p>
                    <img className="image image--center m--b" src={Image} alt="interior"></img>
                    <div className="flex">
                        <div className="marg--r">
                            <Subheading small nomarg grey title={apartment.title} />
                            <Heading teal bold title={"ROM " + room.id} />
                        </div>
                        <div className="flex flex--a-center">
                            <div className="f f--a-center m--b-s marg--r">
                                <img className="img--xs  m--r" src={Coins} alt="coins"></img>
                                <div>
                                    <Subheading small nomarg grey title={"Prisantydning"} />
                                    <p className="m--none">{"kr " + room.price}</p>
                                </div>
                            </div>
                            <div className=" marg--b-s f f--a-center m--b">
                                <img className="img--xs  m--r" src={Card} alt="bankcard"></img>
                                <div>
                                    <Subheading small nomarg grey title={"Felleskostnader"} />
                                    <p className="m--none">{"kr " + room.utilities}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="flex">
                    <div className="card m--b marg--r">
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
                    <div>
                            <Subheading grey title="Om rommet" />
                            <Text small text={room.description} />
                        </div>
                    </div>
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
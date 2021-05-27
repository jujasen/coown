import Image from '../img/interior2.svg';
import Layout from '../img/layout.svg';
import Coins from '../img/coins-light.svg';
import Card from '../img/card-light.svg'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../utils/apartments.json';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Heading from '../components/Heading';
import Subheading from '../components/Subheading';
import Text from '../components/Text';
import RoomRes from '../components/RoomRes';

const Room = () => {

    const { id, aptId } = useParams();
    let history = useHistory();
    const [allRooms, setAllRooms] = useState();
    const [room, setRoom] = useState();
    const [apartment, setApartment] = useState();

    // useEffect(() => {
    //     data?.filter(function (apt) {
    //         if (apt.id === Number(aptId)) {
    //             setApartment(apt)
    //             setAllRooms(apt?.rooms)
    //             apt.rooms.filter(function (room) {
    //                 if (room.id === Number(id)) {
    //                    setRoom(room)
    //                 } else {
    //                     return false;
    //                 }
    //             })
    //         } else {
    //             return false;
    //         }
    //     })
    // }, [id, aptId])

    useEffect(() => {
        let apt;
        apt = data?.filter((apt) => {
            return apt.id === Number(aptId);
        });

        setApartment(apt[0]);
    }, [aptId])

    console.log(apartment?.rooms)

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
            {room ? console.log(room): ''}
            {room ?
                <div className="padded">
                    <div className="m--b" onClick={() => history.goBack()}>Tilbake</div>
                    <p>{room.title}</p>
                    <img className="m--b" src={Image} alt="interior"></img>
                    <Subheading small nomarg grey title={apartment.title} />
                    <Heading teal bold title={"ROM " + room.id} />
                    <div className="f f--a-center m--b">
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
                    {/* <div className="card m--b">
                        <div className="f f--a-center m--b-s">
                            <img className="img--xs m--r" src={Key} alt="key"></img>
                            <Subheading nomarg grey title="Nøkkelinformasjon" />
                        </div>
                        <div className="f f--a-center m--b-s">
                            <img className="img--xs m--r" alt="house" src={House}></img>
                            <p className="m--none">Antall rom: {apt.rooms.length}</p>
                        </div>
                        <div className="f f--a-center">
                            <img className="img--xs m--r" alt="floors" src={Floors}></img>
                            <p className="m--none">Etasje: {apt.floor}</p>
                        </div>
                    </div> */}
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
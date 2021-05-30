import Image from '../img/interior.png';
import Key from '../img/key.svg';
import House from '../img/house.svg';
import Floors from '../img/floors.svg';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../utils/apartments.json';
import { useHistory } from "react-router-dom";
import Heading from '../components/Heading';
import Subheading from '../components/Subheading';
import Text from '../components/Text';
import RoomRes from '../components/RoomRes';
const Apartment = () => {

    const { id } = useParams();
    let history = useHistory();
    const [apt, setApt] = useState();
    const [sortedRooms, setSortedRooms] = useState();

    console.log(apt)

    useEffect(() => {
        data?.map(function (item) {
            if (item.id === Number(id)) {
                return setApt(item)
            } else
            return false;
        })
    }, [id])

    useEffect(() => {
        let result = apt?.rooms.sort(function (a, b) {
            return a.id - b.id
        })
        setSortedRooms(result);

    }, [apt])



    return (
        <div className="apt page">
            {apt ?
                <div className="padded padding top">
                    <div className="m--b" onClick={() => history.goBack()}>Tilbake</div>
                    <img className=" image image--center m--b" src={Image} alt="interior"></img>
                    <Heading teal bold title={apt.title}/>
                    <div className="flex">
                        <div className="card m--b marg--r">
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
                        </div>
                        <div>
                            <Subheading grey title="Om kollektivet" />
                            <Text small text={apt.description} />
                        </div>
                    </div>
                    
                    <Subheading grey title="Rom i kollektivet" />
                    <div className="flex flex--wrap">
                        {sortedRooms?.map(function (room) {
                            return (
                                <RoomRes key={room.id} aptId={apt.id} room={room} />
                            )
                        })}
                    </div>
                </div>

                :
                ''
            }


        </div>
    );
}

export default Apartment;
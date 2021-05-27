import Image from '../img/interior.png';
import Layout from '../img/layout.svg';
import Key from '../img/key.svg';
import House from '../img/house.svg';
import Floors from '../img/floors.svg';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../utils/apartments.json';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Heading from '../components/Heading';
import Subheading from '../components/Subheading';
import Text from '../components/Text';
const Apartment = () => {

    const { id } = useParams();
    let history = useHistory();
    const [apt, setApt] = useState();

    console.log(id)

    useEffect(() => {
        data?.map(function (item) {
            if (item.id === Number(id)) {
                setApt(item)
            }
        })
    }, [])



    return (
        <div className="apt page">
            {apt ?
                <div className="padded">
                    <div className="m--b" onClick={() => history.goBack()}>Tilbake</div>
                    <img className="m--b" src={Image} alt="interior"></img>
                    <Heading teal bold title={apt.title}/>
                    <div className="card m--b">
                        <div className="f f--a-center m--b-s">
                            <img className="img--xs m--r" src={Key} alt="key"></img>
                            <Subheading nomarg grey title="Nøkkelinformasjon" />
                        </div>
                        <div className="f f--a-center m--b-s">
                            <img className="img--xs m--r" src={House}></img>
                            <p className="m--none">Antall rom: {apt.rooms.length}</p>
                        </div>
                        <div className="f f--a-center">
                            <img className="img--xs m--r" src={Floors}></img>
                            <p className="m--none">Etasje: {apt.floor}</p>
                        </div>
                    </div>
                    <Subheading grey title="Om kollektivet"/>
                    <Text small text={apt.description}/>
                </div>

                :
                ''
            }


        </div>
    );
}

export default Apartment;
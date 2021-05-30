import Heading from '../components/Heading';
import Text from '../components/Text';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Layout from '../img/apartment.png';
import Interior from '../img/interior.png';
import Line from '../components/Line';
import Feedback from '../components/Feedback';
import Step from '../components/Step';
import Illustration from '../img/home-ill.svg';

const Home = () => {

    return (
        <div className="home">
            <div className="home__landing">
                <h1 className="home__title">Din inngangsbillett til boligmarkedet</h1>
                <h2 className="home__subtitle">Leiligheten for deg som drømmer om egen bolig men ikke har nok egenkapital</h2>

                <form>
                    <input className="form__input" placeholder="Søk etter sted"></input>
                    <Button title="Søk" center type="" submit />
                </form>
            </div>
            <div className="padded">
                <Heading center title="Smarte leiligheter designet for enmoderne livsstil" />
                <div className="flex flex--a-center flex--j-center">
                    <div>
                        <Text center text="Alle våre leiligheter er tegnet avledende arkitekter med ett mål for
øyet; Å gi deg mest mulig ut av
hver eneste kvadrat meter."/>
                        <Link className="block m--b" to="/results">
                            <Button title="Finn leilighet" center />
                        </Link>
                    </div>
                    <img className="m--b" src={Layout} alt="apartment illustration"></img>
                </div>
                <Line medium />
            </div>
            <div className="padded">
                <div className="flex flex--a-center flex--j-center marg--b">
                    <img className="marg--r" src={Interior} alt="apartment interior"></img>
                    <Text center text="Å bo sammen med andre har
mange fordeler. En av de er at du
slipper alltid å gjøre alt selv, hvor
ansvaret deles.

Det gjør hverdagen enklere - og
billigere."/>
                </div>
                <Line medium />
            </div>
            <Feedback />
            <div className="padded">
                <Heading center title="Å kjøpe leilighet sammen med andre er trygt og enkelt." />
                <Heading center title="Slik gjør du det!" />
            </div>
            <div className="flex flex--a-start flex--j-center ">
                <Step title="Finn leilighet" text="Via CoOwn finner du en en rekke nye og moderne leiligheter som er tilpasset for at 4 til 7 personer kan bo godt sammen." />

                <Step title="Legg inn bud" text="Å kjøpe en CoOwn leilighet er like enkelt som å kjøpe en hvilken som helst leilighet.
            Våre profesjonelle rådgivere vil hjelpe deg trygt og enkelt gjennom hele prosessen" />

                <Step title="Flytt inn" text="Selve flytteprosessen er enkel; Leilighetene kommer møblert og klar til bruk. Når du har kjøpt leilighet vil du få tildelt en 'Community Manager' fra CO-OWN som du kan ta kontakt med når som helst for spørsmål og hjelp med praktiske forhold." />
            </div>
            <div className="padded">
                <h2 className="heading heading--grey heading--center">Når tiden er inne for det:
                    <br/> Selg leiligheten videre - raskt og enkelt!
                </h2>
                <img src={Illustration} alt="woman hovering over house" ></img>
            </div>
        </div>
    );
}

export default Home;
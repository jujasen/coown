import Subheading from './Subheading';
import Button from './Button';
import X from '../img/x.png';

const Order = () => {

    return (
        <div className="popup">
            <div className=" card popup__card">
                <img className="img--xs" src={X} alt="cancel"></img>
                <Subheading small center grey title="Skriv inn din mail for å motta komplett salgsoppgave"/>
                <form>
                    <input className=" form__input form__input--border" placeholder="Skriv din mail"></input>
                    <Button title="Send" center type="" submit />
                </form>
            </div>
        </div>
    );
}

export default Order;
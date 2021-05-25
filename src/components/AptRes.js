import Image from '../img/interior.png'

const AptRes = (props) => {
    const { item } = props;

    //filter available rooms

    //filter lowest price available

    return (
        <div className="aptres">
            <img className="aptres__img" src={Image} alt={item.title}></img>
            <p className="aptres__region">{item.region}</p>
            <h3 className="aptres__title">{item.title}</h3>
            <p className="aptres__rooms">Ledige rom: {item.rooms.length}</p>
            <p className="aptres__price">kr 1 000 000</p>
        </div>
    );
}

export default AptRes;
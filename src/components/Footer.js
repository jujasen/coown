import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
import Line from './Line';
import Nav from 'react-bootstrap/Nav';
import Fb from '../img/fb.svg';
import Insta from '../img/insta.svg';
import Twitter from '../img/twitter.svg';
import In from '../img/linkedin.svg';

const Footer = () => {


    return (
        <>
        
            <footer className="footer">
                <div className="m--b f f--j-start f--a-center flex--j-center">
                    <Link to="/">
                        <img className="footer__logo" src={Logo} alt="logo"></img>
                    </Link>
                    <div>
                        <p className=" m--l footer__info-text">Co-Own AS <br /> Sentrumsbakken 12 <br /> 5000 Bergen</p>
                    </div>
                </div>
                <Line medium />
                <div className="f f--j-space f--a-center flex flex--j-space flex--a-center">
                    <div>
                        <Nav className="ml-auto">
                            <LinkContainer to="/">
                                <Nav.Link className="menu__link menu__link--s footer__link">Hjem</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/results">
                                <Nav.Link className="menu__link menu__link--s footer__link">Finn Leilighet</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </div>
                    <div className="m--b">
                        <p className="footer__info-text m--b-s">
                            Følg oss
                            </p>
                        <div>
                            <div className="f f--a-center m--b-s">
                                <img className="img--s m--r" src={Twitter} alt="twitter" />
                                <img
                                    className="img--s"
                                    src={In} alt="Linkedin" />
                            </div>
                            <div className="f f--a-center">
                                <img
                                    className="img--s m--r"
                                    src={Fb} alt="Facebook" />
                                <img
                                    className="img--s"
                                    src={Insta} alt="Instagram" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer__info-text m--b-s">All images from CoOwn are from a previous assignment at Noroff in which CoOwn gave permission to use them in projects</p>
                <p className="footer__info-text m--b-s">Other images from Pixabay & icons from Adobe XD free icons plugins</p>
            </footer>
        </>
    );
}

export default Footer;
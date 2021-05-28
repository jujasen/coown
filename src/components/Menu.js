import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../img/logo.svg';
import { LinkContainer } from 'react-router-bootstrap'

const Menu = () => {

    return (
        <Navbar fixed="top" collapseOnSelect className="menu" variant="dark" bg="dark" expand="lg">
            <Link to="/"><img className="menu__logo" src={Logo} alt="logo"></img></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link eventKey="1" className="menu__link">Hjem</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/results">
                        <Nav.Link eventkey="2" className="menu__link">Finn Leilighet</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;
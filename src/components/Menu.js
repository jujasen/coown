import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../img/logo.svg'

const Menu = () => {

    return (
        <Navbar fixed="top" collapseOnSelect className="menu" variant="dark" bg="dark" expand="lg">
            <Link to="/"><img className="menu__logo" src={Logo} alt="logo"></img></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="menu__link" to="/">Home</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;
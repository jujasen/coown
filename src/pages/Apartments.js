import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';


const Apartments = () => {

    return (
        <div className="apt page padded">
            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                <Dropdown.ItemText>Område</Dropdown.ItemText>
                <Dropdown.Item as="button">Fana</Dropdown.Item>
                <Dropdown.Item as="button">Ytrebygda</Dropdown.Item>
                <Dropdown.Item as="button">Arna</Dropdown.Item>
                <Dropdown.Item as="button">Bergenshus</Dropdown.Item>
                <Dropdown.Item as="button">Årstad</Dropdown.Item>
                <Dropdown.Item as="button">Laksevåg</Dropdown.Item>
                <Dropdown.Item as="button">Fyllingsdalen</Dropdown.Item>
                <Dropdown.Item as="button">Åsane</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default Apartments;
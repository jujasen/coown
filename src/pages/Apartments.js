import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Illustration from '../img/apartment-ill.svg';
import Heading from '../components/Heading';
import data from '../utils/apartments.json';
import AptRes from '../components/AptRes';


const Apartments = () => {
    const [area, setArea] = useState('Velg område');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        if (area !== 'Velg område') {
            let result = data?.filter((item) => {
                return item.region.includes(area);
            })
            setFilteredData(result);
        }
    }, [area])

    return (
        <div className="apt page padded">
            <div className="apt__filters f f--a-center f--j-around m--b marg--t">
                <DropdownButton id="dropdown-item-button" title={area}>
                    <Dropdown.Item
                    onClick={() => {
                        setArea('Fana')
                    }}
                    as="button">Fana</Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setArea('Ytrebygda')
                        }}
                    as="button">Ytrebygda</Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setArea('Arna')
                        }}
                    as="button">Arna</Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setArea('Bergenshus')
                        }}
                    as="button">Bergenshus</Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setArea('Årstad')
                        }}
                    as="button">Årstad</Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setArea('Laksevåg')
                        }}
                    as="button">Laksevåg</Dropdown.Item>
                    <Dropdown.Item 
                        onClick={() => {
                            setArea('Fyllingsdalen')
                        }}
                    as="button">Fyllingsdalen</Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setArea('Åsane')
                        }}
                    as="button">Åsane</Dropdown.Item>
                </DropdownButton>

            </div>
            {area === 'Velg område' ? 
                <div className="m--t-m flex flex--a-center flex--j-center">
                    <Heading center grey title="Velg område ved å bruke filtrene øverst" />
                    <img className="image" src={Illustration} alt="building with trees"></img>
                </div>
                :
                <div>
                    <Heading green bold uppercase title={'// ' + area}/>
                    <div className="flex flex--a-start flex--j-start">
                        {filteredData?.map(function (item) {
                            return (
                                <div key={item.id}>
                                    <AptRes item={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
        }
            
        </div>
    );
}

export default Apartments;
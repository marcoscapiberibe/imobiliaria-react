import '../Item/Item.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Item() {
  return (

    <ButtonGroup aria-label="Basic example">
      {/* <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button> */}
    
      <DropdownButton as={ButtonGroup} title="Pretensão" id="bg-nested-dropdown" variant="secondary" size="lg" className="mb-2">
        <Dropdown.Item eventKey="1">Comprar</Dropdown.Item>
        <Dropdown.Item eventKey="2">Alugar</Dropdown.Item>
      </DropdownButton>

      <DropdownButton as={ButtonGroup} title="Tipo" id="bg-nested-dropdown" variant="secondary" size="lg" className="mb-2">
        <Dropdown.Item eventKey="1">Apartamento</Dropdown.Item>
        <Dropdown.Item eventKey="2">Bangalô</Dropdown.Item>
        <Dropdown.Item eventKey="2">Casa</Dropdown.Item>
        <Dropdown.Item eventKey="2">Casa Comercial</Dropdown.Item>
        <Dropdown.Item eventKey="2">Galpão</Dropdown.Item>
        <Dropdown.Item eventKey="2">Granja/Fazenda</Dropdown.Item>
        <Dropdown.Item eventKey="2">Loja</Dropdown.Item>
        <Dropdown.Item eventKey="2">Prédio Comercial</Dropdown.Item>
        <Dropdown.Item eventKey="2">Sala Comercial</Dropdown.Item>
        <Dropdown.Item eventKey="2">Terreno</Dropdown.Item>
      </DropdownButton>

      <DropdownButton as={ButtonGroup} title="Bairro" id="bg-nested-dropdown" variant="secondary" size="lg" className="mb-2">
        <Dropdown.Item eventKey="1">Teste 01</Dropdown.Item>
        <Dropdown.Item eventKey="2">Teste 02</Dropdown.Item>
        <Dropdown.Item eventKey="1">Teste 03</Dropdown.Item>
        <Dropdown.Item eventKey="2">Teste 04</Dropdown.Item>
        <Dropdown.Item eventKey="1">Teste 05</Dropdown.Item>
        <Dropdown.Item eventKey="2">Teste 06</Dropdown.Item>
      </DropdownButton>
      

    </ButtonGroup>

  );
}

export default Item;
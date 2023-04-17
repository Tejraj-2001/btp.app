import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import "./assets.css"
function Dropdown_nav() {
  return (
    <div>
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Equipment</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
      <div><Dropdown.Item href="/transformer">Transformer</Dropdown.Item></div>
        <div> <Dropdown.Item href="/busbar">Bus bar</Dropdown.Item></div>
        <div> <Dropdown.Item href="/circuitbreaker">Circuit Breakers</Dropdown.Item></div>
        <div> <Dropdown.Item href="/capaciterbank">Capaciter Bank</Dropdown.Item></div>
        <div> <Dropdown.Item href="/relay">Relay</Dropdown.Item></div>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default Dropdown_nav;
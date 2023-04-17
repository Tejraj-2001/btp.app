import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import "./assets.css"
import "./dropdown.css"
function Dropdown_nav() {
  return (
    <div>
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Equipment</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
      <div className="links" ><Dropdown.Item><Link to="/transformer">Transformer</Link></Dropdown.Item></div>
      <div className="links"><Dropdown.Item><Link to="/busbar">Bus bar</Link></Dropdown.Item></div>
      <div className="links"><Dropdown.Item><Link to="/circuitbreaker">Circuit Breakers</Link></Dropdown.Item></div>
      <div className="links"><Dropdown.Item><Link to="/capaciterbank">Capaciter Bank</Link></Dropdown.Item></div>
      <div className="links"><Dropdown.Item><Link to="/relay">Relay</Link></Dropdown.Item></div>
        
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default Dropdown_nav;

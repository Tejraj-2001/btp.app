import ReactDOM from "react-dom/client";
import './App.css';
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import Transformer from "./components/list_of_equipment/transformer";
import Busbar from "./components/list_of_equipment/busbar";
import Circuitbreaker from "./components/list_of_equipment/circuitbreaker";
import Capaciterbank from "./components/list_of_equipment/capaciterbank";
import Relay from "./components/list_of_equipment/relay";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from './components/ContactForm'
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       
          <Route exact path="/" element={<Homepage />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/transformer" element={<Transformer />}>
          </Route>
          <Route path="/busbar" element={<Busbar />}>
          </Route>
          <Route path="/circuitbreaker" element={<Circuitbreaker />}>
          </Route>
          <Route path="/capaciterbank" element={<Capaciterbank />}>
          </Route>
          <Route path="/relay" element={<Relay />}>
          </Route>
          <Route path="/contact" element={<ContactForm />}>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

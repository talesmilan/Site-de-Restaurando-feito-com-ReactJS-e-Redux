import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent'
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurante Confusão</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;

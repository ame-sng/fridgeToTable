import logo from './logo.svg';
import './App.css';
// import Bootstraptest from './Components/Bootstraptest';
import {Navbar, Nav} from 'react-bootstrap'
// import Apitest from './Components/Apitest';
import SelectRecipe from './Components/FetchLink/SelectRecipe';

function App() {
  return (
    <>
    <Navbar sticky="top" bg="light" variant="pills">
    <Navbar.Brand href="#home">FRIDGE TO TABLE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Recipes</Nav.Link>
    </Nav>
    </Navbar>
    <div className="App">
      <header className="App-header">
        <SelectRecipe />
        {/* <Bootstraptest /> */}
        {/* <Apitest /> */}
      </header>
    </div>
    </>
  );
}

export default App;

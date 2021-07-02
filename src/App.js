import logo from './logo.svg';
import './App.css';
// import Bootstraptest from './Components/Bootstraptest';
import Apitest from './Components/Apitest';
import Navigation from './Components/Navigation';
import SelectRecipe from './Components/FetchLink/SelectRecipe';

function App() {
  return (
    <>
    <Navigation />
    <div className="App">
      <header className="App-header">
        <SelectRecipe />
        {/* <Bootstraptest /> */}
        <Apitest />
      </header>
    </div>
   </>
  );
}

export default App;

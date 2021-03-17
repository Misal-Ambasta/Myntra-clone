import './App.css';
import FilterContainer from './components/FilterContainer';
import Navbar from "./components/Navbar"
import Shirts from './components/Shirts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FilterContainer />
      <Shirts />
    </div>
  );
}

export default App;

import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import { StarshipProvider } from './context/StarshipContext';

function App() {

  return (
    <div className="App">
      <StarshipProvider>
        <Navbar />
        <Cards />
      </StarshipProvider>
    </div>
  );
}

export default App;

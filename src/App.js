import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Detail from './components/Detail';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Cards/>
        <Routes>
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;

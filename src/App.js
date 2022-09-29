import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error404 from "./Pages/Error404";
import { StarshipProvider } from "./context/StarshipContext";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Starships from "./Pages/Starships";

function App() {
  return (
    <div className="App">
      <StarshipProvider>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Home />} index />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/*" element={<Error404 />}></Route>
          <Route path="/starships" element={<Starships />}></Route>
        </Routes>
      </StarshipProvider>
    </div>
  );
}

export default App;

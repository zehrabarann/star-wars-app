import { Route, Routes } from "react-router-dom";
import App from "../../App";
import { StarshipProvider } from "../../context/StarshipContext";
import Detail from "../Detail";
import Error404 from "../Error404";
import Home from "../Home";
import Starships from "../Starships";

export default function Bootstrap() {
  return (
    <StarshipProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Home />} index />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error404 />}></Route>
        <Route path="/starships" element={<Starships />}></Route>
      </Routes>
    </StarshipProvider>
  );
}

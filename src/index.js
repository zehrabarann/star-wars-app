import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StarshipProvider } from './context/StarshipContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Detail from './components/Detail';
import Error404 from './components/Error404';
import Home from './components/Home';
import Starships from './components/Starships';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarshipProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}  />
          <Route path='/' element={<Home />} index />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/*" element={<Error404 />}></Route>
          <Route path="/starships" element={<Starships />}></Route>


        </Routes>
      </BrowserRouter>
    </StarshipProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import Game from "./Game";
import Splash from "./Splash";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";

// right way to use useNavigate is in child components, not at parent component. "Link" by itself will allow on click transit to page.
// either way import Router

export default function App() {


// use effect hook execute code inside function after the component mounts
// clearTimeout to prevent it from happening again if component unmounts before the timing
// useEffect is similar to componentDidMount()

  let navigate = useNavigate();

  function pageChange(url){
    return navigate(url)
  }

  return( 
    <React.Fragment>
        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item ms-3" onClick={()=>pageChange('/game')}>
                Game Page
              </li>
              <li className="nav-item ms-3" aria-current="page" onClick={()=>pageChange('/splash')}>
                Splash
              </li>
            </ul>
          </div>
        </nav>
     
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Splash />} />
          <Route path="/splash" element={<Splash />} />
        </Routes>
    </React.Fragment>
  )
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"

function Main() {
  return (
    <BrowserRouter>
   { /* ___________________________________________Header________________________________________________________ */}
                      <header>
                        <Link className="site-logo" to="/">#VanLife</Link>
                        <nav>
                          <Link to="/about">About</Link>
                        </nav>
                      </header>
     {/* ________________________________________________________________________________________________________ */}





   { /* ________________________________________________Routes___________________________________________________ */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* ________________________________________________________________________________________________________ */}


    </BrowserRouter> 
    
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);


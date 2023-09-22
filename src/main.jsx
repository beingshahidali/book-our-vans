import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import "./server"
import Vans from "../pages/Vans/Vans"
import VanDetail from '../pages/Vans/VanDetail';
import Layout from '../component/Layout'
import Dashboard from '../pages/Host/Dashboard';
import Reviews from '../pages/Host/Reviews';
import Income from '../pages/Host/Income';
import HostLayout from '../component/HostLayout';
import HostVans from '../pages/Host/HostVans';
import HostVanDetail from '../pages/Host/HostVanDetail';

function Main() {
  return (
    <BrowserRouter>

   { /* ________________________________________________Routes___________________________________________________ */}
     <Routes>
        <Route element={<Layout/>}>

            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            
            <Route path="vans">
                <Route index element={<Vans />} />
                <Route path=":id" element={<VanDetail />} />
            </Route>
          

            <Route path="host" element={<HostLayout />}>

                <Route index element={<Dashboard />} /> 
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetail />} />


                
            </Route>

        </Route>
      </Routes>
      {/* ________________________________________________________________________________________________________ */}


    </BrowserRouter> 
    
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);


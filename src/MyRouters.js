import React from "react";
import {BrowserRouter as Router,Routes,Route }from "react-router-dom";
import Dashboard from "./components/Dashboard";

const MyRoutes=(props)=>{
    <Router {...props}>
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dash" element={<Dashboard/>} />
       </Routes>
    </Router>
};
export default MyRoutes;
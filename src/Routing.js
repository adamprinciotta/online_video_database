import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import App from "./App";
import Submit from "./Submit";
import AboutContact from "./AboutContact";

function Routing() {
    return(
        <>
        <Navbar></Navbar>
        <div>
        </div>
        <Routes>
            <Route exact path="/" element={<App/>} />
            <Route exact path="/submit" element={<Submit />} />
            <Route exact path="/about" element={<AboutContact />} />
        </Routes></>
    )
}

export default Routing;
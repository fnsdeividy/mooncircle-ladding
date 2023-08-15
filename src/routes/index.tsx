import { Fragment } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SaibaMais from "../Pages/SaibaMais";
import Parcerias from "../Pages/Parcerias";
import Header from "../components/Header";

  const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/saiba-mais" element={<SaibaMais/>}/>
                    <Route path="parcerias" element={<Parcerias />}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SingUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import PricePredictor from "./pages/PricePredictor";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SingUp />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/price-predictor" element={<PricePredictor />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

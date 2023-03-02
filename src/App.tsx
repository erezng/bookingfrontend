import React, { useContext } from "react";
// import logo from './logo.svg';
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import Register from "./routes/Register";
import AuthContext from "./context/AuthContext";
import TopNavbar from "./components/Navbar";
import BrandBar from "./components/BrandBar";
import Addproperty from "./routes/AddProperty";
import ListHotels from "./routes/hotels/ListHotels";
import HotelDetails from "./routes/hotels/HotelDetails";
// import HotelContext from "./context/HotelContext";
function App() {
  const { isLoggedIn } = useContext(AuthContext);
  // const { card } = useContext(HotelContext);
  // console.log(card);

  return (
    <>
      <BrandBar />
      <TopNavbar />
      <Routes>
        <Route path="/hotels" element={<ListHotels />} />
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:_id" element={<HotelDetails />} />

        {isLoggedIn && <Route path="/about" element={<About />} />}
        <Route path="/addproperty" element={<Addproperty />} />
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}
      </Routes>
    </>
  );
}

export default App;

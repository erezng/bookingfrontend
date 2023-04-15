import { useContext } from "react";
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
import UpdateHotel from "./routes/hotels/UpdateHotel";
import AddFlight from "./routes/AddFlight";
import ListFlights from "./routes/hotels/ListFlights";
import FooterBar from "./components/FooterBar";
import Cart from "./features/Cart";
import Favorites from "./features/Favorites";


function App() {
  const { isLoggedIn } = useContext(AuthContext);
  


  return (
    <>
    {/* <div className='grid gap-4 grid-cols-2  md:grid-cols-4 lg:grid-cols-8  p-4'>
      {contents.map((content:any) => (
        <div key={content.id}>
          <img
            src={`${content.thumbnailUrl}`}
            alt={`${content.title}`}
            className='w-full h-full rounded'
          />
        </div>
      ))}
    </div> */}

      <BrandBar />
      <TopNavbar />
      <Routes>
        <Route path="/hotels" element={<ListHotels />} />
        <Route path="/flights" element={<ListFlights />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:_id" element={<HotelDetails />} />
        {isLoggedIn && <Route path="/about" element={<About />} />}
        <Route path="/addproperty" element={<Addproperty />} />
        <Route path="/addflight" element={<AddFlight />} />
        <Route path="/edit/:_id" element={<UpdateHotel />} />
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}
        
      </Routes>
      <FooterBar/>
    </>
  );
}

export default App;
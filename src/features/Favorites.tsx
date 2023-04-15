import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart,FaCartArrowDown,FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "../app/hooks";
import { Hotel } from "../@types";
import { toggleCart, toggleFavorite } from "./HotelSlice";

const Favorites = () => {
  const dispatch=useAppDispatch();
  const nav = useNavigate();
  const [hotels, sethotels] = useState<Hotel[]>([]);
  const favArray=localStorage.getItem("fav");      
  const isCart=localStorage.getItem("cart");

  const getHotels = () => {
    const url = "http://localhost:3001/api/hotels/allhotels";
    fetch(url)
      .then((res) => res.json())
      .then((json) => sethotels(json));
  };
  useEffect(getHotels, []);

  if(favArray){
    const favArr=JSON.parse(favArray);
  for (let i = 0; i <hotels.length; i++) {
    const index=favArr.findIndex((e:any)=>e===hotels[i]._id);
    if(index!==-1){
      hotels[i].isfav=true;
    }
    else{
      hotels[i].isfav=false;
    }
  }  
  if(isCart){
    const cartArr=JSON.parse(isCart);
  for (let i = 0; i <hotels.length; i++) {
    const index=cartArr.findIndex((e:any)=>e===hotels[i]._id);
    if(index!==-1){
      hotels[i].cart=true;
    }
    else{
      hotels[i].cart=false;
    }
  }  
  }
}
const favClicked=(hotel:Hotel)=>{
  dispatch(toggleFavorite(hotel?._id))
  const idfav:any=document.getElementById("fav");
  document.location.reload()
  // idfav.innerHTML=<FaRegHeart/>
}
  return (
    <div className="container">
      {hotels?.map((hotel) => (
        <div className="card" key={hotel._id}>
          <button id="fav" className="" onClick={()=>{favClicked(hotel)}}>
            {hotel?.isfav&&<FaHeart/>}
            {!hotel?.isfav&&<FaRegHeart/>}
            </button> 
          <button className="" onClick={()=>{dispatch(toggleCart(hotel?._id))}}>
            {!hotel?.cart&& <FaShoppingCart/>}
            {hotel?.cart&&<FaCartArrowDown/>}
          </button> 
          <h1 className="text-center">{hotel.name}</h1>
          <p>location:{hotel?.location}</p>
          <p>price:{hotel?.price}</p>
          <p>weekend:{hotel?.priceweekend}</p>
          <p><img className="w-100" src={hotel?.img} alt={hotel.name} /></p>
          <button         
          className="btn btn-info"
            onClick={() => {
              nav(`/hotels/${hotel._id}`);
            }}
          >
            click
          </button>
        </div>
      ))}
    </div>
  );
};
export default Favorites
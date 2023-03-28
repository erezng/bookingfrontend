import { useEffect, useState } from "react";
import { Hotel } from "../@types";
import { fetchHotels } from "../services/PropertyList.service";
import { FaHeart, FaRegHeart,FaCartArrowDown,FaShoppingCart } from "react-icons/fa";

const Cart = () => {
    const cartArr=localStorage.getItem("cart");
    const [cart,setCart]=useState<[]>([])
    if(cartArr){
        // setCart(JSON.parse(cartArr));    
    };
    const [hotels, sethotels] = useState<Hotel[]>([]);
    const getHotels = () => {
    const url = "http://localhost:3001/api/hotels/allhotels";
    fetch(url)
        .then((res) => res.json())
        .then((json) => sethotels(json));
    };
    useEffect(getHotels, []);
    // cart. loop
    //  newArrayOfHotels
    const newArray = cart.map((cartItem)=>{
        const filtercart:Hotel[]=hotels?.filter((hotel) => hotel._id === cartItem);
        return filtercart[0] // filtter return an array
    }) 
    // filtercart[0]
    // hotels?.forEach(hotel=>{
    // cart.forEach(id => {
    //     if(hotel._id!==id){
    //          hotels.pop()  
    //     }
    // });
    // });   
  return (
 <div className="container  ">
      {newArray?.map((hotel) => (
        <div className="card" key={hotel._id}>
          <button className="" onClick={()=>{}}>
            {hotel?.isfav&& <FaHeart/>}
            {!hotel?.isfav&&<FaRegHeart/>}
            </button> 
          <button className="" onClick={()=>{}}>
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
            //   nav(`/hotels/${hotel._id}`);
            }}
          >
            click
          </button>
        </div>
      ))}
    </div>
  )
  }

export default Cart
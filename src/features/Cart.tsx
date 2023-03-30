import { useEffect, useState } from "react";
import { Hotel } from "../@types";
import { FaHeart, FaRegHeart,FaCartArrowDown,FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const nav = useNavigate();
    const [cart,setCart]=useState<[]>([])
    const [hotels, sethotels] = useState<Hotel[]>([]);
    const [list, setList] = useState<Hotel[]>([])
    const getHotels = () => {
      const cartArr=localStorage.getItem("cart");
      if(cartArr){
        setCart(JSON.parse(cartArr)); 
        const url = "http://localhost:3001/api/hotels/allhotels";
        fetch(url)
         .then((res) => res.json())
         .then((json) => sethotels(json));
    };
    setList(cart.map((cartItem)=>{
        const filtercart:Hotel[]=hotels?.filter((hotel) => hotel._id === cartItem);
        console.log(filtercart);
        return filtercart[0] // filtter return an array
    }) )
  };
    useEffect(getHotels, []);
    
    // cart. loop
    //  newArrayOfHotels
    // 
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
      {list?.map((hotel) => (
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
              nav(`/hotels/${hotel._id}`);
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
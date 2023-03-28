import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hotel } from "../../@types";
import { FaHeart, FaRegHeart,FaCartArrowDown,FaShoppingCart } from "react-icons/fa";
import css from "./HotelDetails.module.scss"

const ListHotels = () => {
  const nav = useNavigate();
  const [hotels, sethotels] = useState<Hotel[] | undefined>();
  const getHotels = () => {
    const url = "http://localhost:3001/api/hotels/allhotels";
    fetch(url)
      .then((res) => res.json())
      .then((json) => sethotels(json));
  };
  useEffect(getHotels, []);

  return (
    <div className="container  ">
      {hotels?.map((hotel) => (
        <div className="card" key={hotel._id}>
          <button className={css.btn} onClick={()=>{}}>
            {hotel?.isfav&& <FaHeart/>}
            {!hotel?.isfav&&<FaRegHeart/>}
            </button> 
          <button className={css.btncart} onClick={()=>{}}>
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

export default ListHotels;

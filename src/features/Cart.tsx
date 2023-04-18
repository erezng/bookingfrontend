import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart,FaCartArrowDown,FaShoppingCart } from "react-icons/fa";
import css from "./Favorites.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { toggleCart, toggleFavorite } from "./HotelSlice";
import { Hotel } from "../@types";

const Favorites = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>()
 
  const hotels = useSelector((state:any) => state.content.hotels)
  const isLoading = useSelector((state:any) => state.content.isLoading)
  const error = useSelector((state:any) => state.content.error)

  if (isLoading) {
    return 'loading...'
  }

  if (error) {
    return error
  }
  let favHotels=hotels.filter((hotel:Hotel)=>hotel.cart>0
  )
  return (
    <div className="container">
      {favHotels?.map((hotel:any) => (
        <div className="card" key={hotel._id}>
          <button id="fav" className={css.btn} onClick={()=>{dispatch(toggleFavorite(hotel._id))}}>
            {hotel?.isfav&&<FaHeart/>}
            {!hotel?.isfav&&<FaRegHeart/>}
            </button> 
          <button className={css.btncart} onClick={()=>{dispatch(toggleCart(hotel?._id))}}>
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

export default Favorites;
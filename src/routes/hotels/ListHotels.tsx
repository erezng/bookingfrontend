import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart,FaCartArrowDown,FaShoppingCart } from "react-icons/fa";
import css from "./HotelDetails.module.scss"
import { fetchhotellist, toggleCart, toggleFavorite } from "../../features/HotelSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";

const ListHotels = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchhotellist())
  }, [dispatch])
  
  const hotels = useSelector((state:any) => state.content.hotels)
  const isLoading = useSelector((state:any) => state.content.isLoading)
  const error = useSelector((state:any) => state.content.error)

  if (isLoading) {
    return 'loading...'
  }

  if (error) {
    return error
  }

  return (
    <div className="container">
      {hotels?.map((hotel:any) => (
        <div className="card text-center" key={hotel._id}>
          <button id="fav" className={css.btn} onClick={()=>{dispatch(toggleFavorite(hotel._id))}}>
            {hotel?.isfav&&<FaHeart/>}
            {!hotel?.isfav&&<FaRegHeart/>}
            </button> 
          <button className={css.btncart} onClick={()=>{dispatch(toggleCart(hotel?._id))}}>
            {hotel.cart===0? <FaShoppingCart/>:<FaCartArrowDown/>}
          </button> 
          <h1 className="text-center">{hotel.name}</h1>
          <p>location:{hotel?.location}</p>
          <p>price:{hotel?.price}</p>
          <p>weekend:{hotel?.priceweekend}</p>
          <p><img className="w-100" src={hotel?.img} alt={hotel.name} /></p>
          <button         
          className="btn btn-primary"
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

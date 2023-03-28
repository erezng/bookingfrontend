import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Hotel } from "../../@types";
import { FaHeart, FaRegHeart,FaCartArrowDown,FaShoppingCart } from "react-icons/fa";
import css from "./HotelDetails.module.scss"
import { useAppDispatch } from "../../app/hooks";
import { toggleCart, toggleFavorite } from "../../features/HotelSlice";
const HotelDetails = () => {
  const nav = useNavigate();
  const dispatch=useAppDispatch();
  const { _id } = useParams();
  const [hotel, setHotel] = useState<Hotel>();
  const url = `http://localhost:3001/api/hotels/hotel/${_id}`;

  const getHotel = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setHotel(json));
  };
  useEffect(getHotel, []);

  const DeleteHotel = () => {
    fetch(`http://localhost:3001/api/hotels/delete/${_id}`, {
    method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => alert("Hotel deleted!"))
    nav(-1)
}

  return (
    <div className="container card">
      <button className={css.btn} onClick={()=>{dispatch(toggleFavorite(hotel?._id))}}>
      {hotel?.isfav&& <FaHeart/>}
      {!hotel?.isfav&&<FaRegHeart/>}
      </button> 
      <button className={css.btncart} onClick={()=>{dispatch(toggleCart(hotel?._id))}}>
      {!hotel?.cart&& <FaShoppingCart/>}
      {hotel?.cart&&<FaCartArrowDown/>}
      </button> 
      <h1>{hotel?.name}</h1>
      <p>location:{hotel?.location}</p>
      <p>price:{hotel?.price}</p>
      <p>weekend:{hotel?.priceweekend}</p>
      <p><img className="w-100" src={hotel?.img} alt={hotel?.name} /></p>
      <button className="btn btn-success"
        onClick={() => {
          nav(`/edit/${hotel?._id}`);
        }}
      >
        edit hotel
      </button>
      <button className="btn btn-danger"
      onClick={DeleteHotel}
      >
        Delete
      </button>
      <button
        className="btn btn-info"
        onClick={()=>nav(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default HotelDetails;

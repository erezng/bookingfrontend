import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Hotel } from "../../@types";
import { FaHeart, FaRegHeart,FaCartArrowDown,FaShoppingCart } from "react-icons/fa";
import css from "./HotelDetails.module.scss"
import { useAppDispatch } from "../../app/hooks";
import { toggleCart, toggleFavorite, fetchhotellist } from "../../features/HotelSlice";
import { AppDispatch } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
const HotelDetails = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>()
  const { _id } = useParams();
  // const [hotel, setHotel] = useState<Hotel>();
  // const url = `http://localhost:3001/api/hotels/hotel/${_id}`;
  // const favArray=localStorage.getItem("fav");
  // const [isfavorite, setIsfavorite] = useState(false);
  // useEffect(() => {
  //     dispatch(fetchhotellist())
  // }, [dispatch])
  //   const getHotel = () => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => setHotel(json));
  //     if(favArray){
  //       const favArr=JSON.parse(favArray);
  //       const index=favArr.findIndex((e:any)=>e===_id);
  //       // console.log(index);
  //       if(index===-1){
  //         setIsfavorite(false)
  //       }
  //       else setIsfavorite(true)
        
  // }
  // };
  // useEffect(getHotel, []);
  const hotels = useSelector((state:any) => state.content.hotels)
  const isLoading = useSelector((state:any) => state.content.isLoading)
  const error = useSelector((state:any) => state.content.error)
  const details =hotels.filter((hotel:Hotel)=>hotel._id===_id)

  if (isLoading) {
    return 'loading...'
  }

  if (error) {
    return error
  }

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
      <button className={css.btn} onClick={()=>{dispatch(toggleFavorite(details[0]._id))}}>
      {details[0]?.isfav&& <FaHeart/>}
      {!details[0]?.isfav&&<FaRegHeart/>}
      </button> 
      <button className={css.btncart} onClick={()=>{dispatch(toggleCart(details[0]._id))}}>
      {!details[0]?.cart&& <FaShoppingCart/>}
      {details[0]?.cart&&<FaCartArrowDown/>}
      </button> 
      <h1>{details[0]?.name}</h1>
      <p>location:{details[0]?.location}</p>
      <p>price:{details[0]?.price}</p>
      <p>weekend:{details[0]?.priceweekend}</p>
      <p><img className="w-100" src={details[0]?.img} alt={details[0]?.name} /></p>
      <button className="btn btn-success"
        onClick={() => {
          nav(`/edit/${details[0]._id}`);
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

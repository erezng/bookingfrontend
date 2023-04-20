import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hotel } from '../@types';
import { FaHeart, FaRegHeart,FaCartArrowDown,FaShoppingCart } from "react-icons/fa";
import css from ".././routes/hotels/Hotel.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from '../app/store';
import { fetchhotellist, toggleCart, toggleFavorite } from '../features/HotelSlice';
const Home = () => {
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
      <h2>Where to next? Find exclusive Genius rewards in every corner of the world!</h2>
      <div className="card-group">
      {hotels?.map((hotel:Hotel) => (
      <Card key={hotel._id}>
      <Card.Img className="img-card" variant="top" src={hotel.img} />
      <Card.Body>
        <button id="fav" className={css.btn} onClick={()=>{dispatch(toggleFavorite(hotel._id))}}>
          {hotel?.isfav&&<FaHeart/>}
          {!hotel?.isfav&&<FaRegHeart/>}
        </button> 
          <button className={css.btncart} onClick={()=>{dispatch(toggleCart(hotel?._id))}}>
          {hotel.cart===0? <FaShoppingCart/>:<FaCartArrowDown/>}
        </button>
  
        <Card.Title>{hotel.name}</Card.Title>
        <Card.Text>
          {hotel.location}
        </Card.Text>
        <Button variant="primary"
          onClick={() => {
          nav(`/hotels/${hotel._id}`);
          }}>
          Click here!
        </Button>
      </Card.Body>
    </Card>
      ))}
</div>
    </div>
  )
}

export default Home
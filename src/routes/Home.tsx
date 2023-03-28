import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hotel } from '../@types';
import { FaHeart, FaRegHeart,FaCartArrowDown,FaShoppingCart } from "react-icons/fa";
import css from ".././routes/hotels/Hotel.module.scss"

const Home = () => {
  const nav = useNavigate();
  const [hotels, sethotels] = useState<Hotel[] | undefined>();
  const getHotels = () => {
    const url = "http://localhost:3001/api/hotels/allhotels";

    fetch(url)
      .then((res) => res.json())
      .then((json) => sethotels(json));
  };
  useEffect(getHotels, []);
  const [searchInput, setSearchInput] = useState("");
 
  const handleChange = (e:any) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    hotels?.filter((hotel) => {
    return hotel.name.match(searchInput);
});
}



  return (
    <div className="container">
      <h2>Where to next, erez?
          Find exclusive Genius rewards in every corner of the world!</h2>



      <div className="card-group">
      {hotels?.map((hotel) => (
        <Card key={hotel._id} style={{ width: '18rem' }}>

      <Card.Img variant="top" src={hotel.img} />
      <Card.Body>
          <button className={css.btn} onClick={()=>{}}>
            {hotel?.isfav&& <FaHeart/>}
            {!hotel?.isfav&&<FaRegHeart/>}
          </button> 
  
        <Card.Title>{hotel.name}</Card.Title>
        <Card.Text>
          {hotel.location}
          
        </Card.Text>
        <Button variant="primary"
            onClick={() => {
            nav(`/hotels/${hotel._id}`);
            }}>Take a look</Button>
            
      </Card.Body>
              <button className={css.btncart} onClick={()=>{}}>
            {!hotel?.cart&& <FaShoppingCart/>}
            {hotel?.cart&&<FaCartArrowDown/>}
          </button> 
    </Card>
      ))}
</div>
    </div>
  )
}

export default Home
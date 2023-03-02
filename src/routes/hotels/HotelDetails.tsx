import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Hotel } from "../../@types";

const HotelDetails = () => {
  const { _id } = useParams();
  const [hotel, setHotel] = useState<Hotel>();
  const url = `http://localhost:3001/api/hotels/hotel/${_id}`;

  const getHotel = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setHotel(json));
  };
  useEffect(getHotel, []);
  return (
    <div>
      <h2>{hotel?.name}</h2>
      {/* <button onClick={}>edit hotel</button> */}
    </div>
  );
};

export default HotelDetails;

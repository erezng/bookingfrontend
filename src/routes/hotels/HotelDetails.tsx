import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Hotel } from "../../@types";

const HotelDetails = () => {
  const nav = useNavigate();

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
      <button
        onClick={() => {
          nav(`/edit/${hotel?._id}`);
        }}
      >
        edit hotel
      </button>
    </div>
  );
};

export default HotelDetails;

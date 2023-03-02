import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hotel } from "../../@types";

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
    <div>
      {hotels?.map((hotel) => (
        <div key={hotel._id}>
          <p>{hotel.name}</p>
          <button
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

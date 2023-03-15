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
    <div className="container ">
      {hotels?.map((hotel) => (
        <div className="card" key={hotel._id}>
          <p className="text-center">{hotel.name}</p>
          <p>location:{hotel?.location}</p>
          <p>price:{hotel?.price}</p>
          <p>weekend:{hotel?.priceweekend}</p>
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

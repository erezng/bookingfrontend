import { useState, useEffect } from "react";
import { Hotel } from "../../@types";

const ListHotels = () => {
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
        <p key={hotel._id}>{hotel.name}</p>
      ))}
    </div>
  );
};

export default ListHotels;

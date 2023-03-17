import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flight } from "../../@types";

const ListFlights = () => {
  const nav = useNavigate();
  const [flights, setFlights] = useState<Flight[] | undefined>();
  const getHotels = () => {
    const url = "http://localhost:3001/api/flight/allflights";

    fetch(url)
      .then((res) => res.json())
      .then((json) => setFlights(json));
  };
  useEffect(getHotels, []);

  return (
    <div className="container  ">
      {flights?.map((flight) => (
        <div className="card" key={flight._id}>
          <h1 className="text-center">{flight.from}</h1>
          <p>location:{flight?.dst}</p>
          <p>price:{flight?.price}</p>

          <button         
          className="btn btn-info"
            onClick={() => {
              nav(`/flight/${flight._id}`);
            }}
          >
            click
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListFlights;

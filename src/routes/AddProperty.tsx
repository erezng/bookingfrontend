import * as Yup from "yup";
import { Hotel } from "../@types";
import addservice from "../services/Add.hotel.service";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Addproperty = () => {
  const nav = useNavigate();
  const [errMessage, setErrMessage] = useState<string | undefined>(undefined);
  const [name, setName] = useState("");
  const [rooms, setRooms] = useState(1);
  const [location, setLocation] = useState("");
  const [toilets, setToilets] = useState(1);
  const [img, setImg] = useState("");
  const [showers, setShowers] = useState(1);
  const [price, setPrice] = useState(1);
  const [priceweekend, setPriceweekend] = useState(1);
  // const {name,rooms,location,toilets,showers,img}=formvalues;
  const addHotelToDb = () => {
    const newHotel = {
      name,
      rooms,
      location,
      toilets,
      showers,
      img,
      price,
      priceweekend
    };
    fetch("http://localhost:3001/api/hotels/addproperty", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHotel),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {errMessage && <div>${errMessage}</div>}
      <div className="d-flex flex-column  p-4 rounded container">
        <label htmlFor="name" className="font-bolder">
          Hotel name:
        </label>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="d-flex flex-column  p-4 rounded container">
        <label htmlFor="rooms" className="font-bolder">
          Rooms:
        </label>
        <input
          className="form-control"
          type="number"
          value={rooms}
          onChange={(e) => {
            setRooms(+e.target.value);
          }}
        />
      </div>
      <div className="d-flex flex-column  p-4 rounded container">
        <label htmlFor="location" className="font-bolder">
          location:
        </label>
        <input
          className="form-control"
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </div>
      <div className="d-flex flex-column  p-4 rounded container">
        <label htmlFor="toilets" className="font-bolder">
          toilets:
        </label>
        <input
          className="form-control"
          type="number"
          value={toilets}
          onChange={(e) => {
            setToilets(+e.target.value);
          }}
        />
      </div>
      <div className="d-flex flex-column  p-4 rounded container">
        <label htmlFor="showers" className="font-bolder">
          showers:
        </label>
        <input
          className="form-control"
          type="number"
          value={showers}
          onChange={(e) => {
            setShowers(+e.target.value);
          }}
        />
      </div>
      <div className="d-flex flex-column  p-4 rounded container">
        <label htmlFor="img" className="font-bolder">
          img:
        </label>
        <input
          className="form-control"
          type="text"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
      </div>
            <div className="d-flex flex-column  p-4 rounded container">
        <label htmlFor="price" className="font-bolder">
          price:
        </label>
        <input
          className="form-control"
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(+e.target.value);
          }}
        />
      </div>
            <div className="d-flex flex-column  p-4 rounded container">
        <label htmlFor="priceweekend" className="font-bolder">
          priceweekend:
        </label>
        <input
          className="form-control"
          type="number"
          value={priceweekend}
          onChange={(e) => {
          setPriceweekend(+e.target.value);
          }}
        />
      </div>
      <button
        className="btn btn-success"
        onClick={() => {
          addHotelToDb();
          Swal.fire("Your Hotel has been added", "", "success");
        }}
      >
        Add My Hotel
      </button>
    </div>
  );
};

export default Addproperty;

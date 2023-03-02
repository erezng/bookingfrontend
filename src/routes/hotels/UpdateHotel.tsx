import * as Yup from "yup";
import { Hotel } from "../../@types";
import addservice from "../../services/Add.service";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateHotel = () => {
  //Get hotel details from server
  const nav = useNavigate();
  const { _id } = useParams();
  const [hotel, setHotel] = useState<Hotel>();
  const [errMessage, setErrMessage] = useState<string | undefined>(undefined);
  const url = `http://localhost:3001/api/hotels/hotel/${_id}`;
  const getHotel = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setHotel(json));
  };
  useEffect(getHotel, []);

  const [name, setName] = useState(hotel?.name);
  const [rooms, setRooms] = useState(hotel?.rooms ?? 1);
  const [location, setLocation] = useState(hotel?.location ?? "");
  const [toilets, setToilets] = useState(hotel?.toilets ?? 1);
  const [img, setImg] = useState(hotel?.img ?? "");
  const [showers, setShowers] = useState(hotel?.showers ?? 1);

  const updateHotelToDb = () => {
    const newHotel = {
      name,
      rooms,
      location,
      toilets,
      showers,
      img,
    };
    fetch(`http://localhost:3001/api/hotels/update/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHotel),
    })
      .then((res) => res.json())
      .catch(() => Swal.fire("Your Hotel has been added", "", "success"));
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
      <button
        className="btn btn-success"
        onClick={() => {
          updateHotelToDb();
          Swal.fire("Updated successfully!", "", "success");
        }}
      >
        Update My Hotel
      </button>
    </div>
  );
};

export default UpdateHotel;

import axios from "axios";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
// import { HotelContext } from "../../context/HotelContext";
import useApi from "../../services/Useapi.service";
import "./hotel.css";
export const url = "http://localhost:3001/api/hotels/allhotels";

const HotelList = () => {
  const [showNameUpdate, setShowNameUpdate] = useState(false);
  const [nameInput, setNameInput] = useState(null);
  // const { card } = useContext(HotelContext);
  const hotels = useApi(url);
  return hotels.map((item: any) => item);

  // <Button onClick={() => setShowNameUpdate((state) => !state)}>
  //   Update name{" "}
  // </Button>
  // {item.name}
  // <div className={showNameUpdate ? "" : "hide_class"}>
  //   <input
  //     type="text"
  //     placeholder="הכנס שם חדש"
  //     onChange={(e) => setNameInput(e.target.value)}
  //     required
  //   />
  //   <Button onClick={() => updateName(item?._id)}>Send</Button>
  // </div>
  // <br />
  // {item?.rooms}
  // <br />
  // {item?.showers}
  // <br />
  // {item?.toilets}
  // <br />
  // <img src={item?.img} alt="" />
  // <br />
  // {item?.location}
};

export default HotelList;

import { useEffect, useState } from "react";
import { Hotel } from "./../@types.d";
import axios from "axios";

export const url = "http://localhost:3001/api/hotels";

export const fetchHotels = () => axios.get(url + "/allhotels");

export const updateName = async (updatedvalues: Hotel) => {
  await axios
    .put(`${url}/update/${updatedvalues._id}`, updatedvalues)
    .then((res) => console.log(res.data));
};

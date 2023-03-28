import { useEffect, useState } from "react";
import { Hotel } from "./../@types.d";
import axios from "axios";

export const url = "http://localhost:3001/api/hotels";

export const fetchHotels = () =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json as Hotel[])
    .then((hotels) => {
      hotels.forEach((a) => {
         a.isfav = false;
         a.cart=false;
      });
      return fetchHotels;
    });
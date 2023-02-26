import axios from "axios";

const baseURL = "http://localhost:3001";

const adding = (
  name: string,
  rooms: number,
  location: string,
  ac: boolean,
  toilets: number,
  showers: number,
  img: string
) => {
  return axios.post(baseURL + "/addproperty", {
    name,
    rooms,
    location,
    ac,
    toilets,
    showers,
    img,
  });
};

export default adding;

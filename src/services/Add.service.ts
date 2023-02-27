import axios from "axios";

const baseURL = "http://localhost:3001/api/hotels/addproperty";

const adding = (
  name: string,
  rooms: number,
  location: string,
  toilets: number,
  showers: number,
  img: string
) => {
  return axios.post(baseURL, {
    name,
    rooms,
    location,
    toilets,
    showers,
    img,
  });
};

export default adding;

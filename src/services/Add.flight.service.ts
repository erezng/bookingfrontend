import axios from "axios";

const baseURL = "http://localhost:3001/api/hotels/addproperty";

const adding = (
  from:string,
  dst:string,
  price:number
) => {
  return axios.post(baseURL, {
    from,dst,price
  });
};

export default adding;

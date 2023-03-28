import { Hotel } from './../@types.d';
 export const fetchHotels = () => {
    const url = "http://localhost:3001/api/hotels/allhotels";
    const list=fetch(url)
      .then((res) => res.json())
      .then((json) =>(json as Hotel[]));
      return list;
  };
  
import { Hotel } from "./../@types.d";
import { useEffect, useState } from "react";
// export const url = "http://localhost:3001/api/hotels/allhotels";

const useApi = (url: string) => {
  const [hotel, setHotel] = useState<Hotel[]>();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setHotel(result));
  }, [url]);

  return hotel as Hotel[];
};

export default useApi;

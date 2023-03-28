import { Hotel } from "./../@types.d";
import { useEffect, useState } from "react";

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

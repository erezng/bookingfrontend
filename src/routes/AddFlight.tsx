import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Flight } from "../@types";

const AddFlight = () => {
  const nav = useNavigate();
  const [errMessage, setErrMessage] = useState<string | undefined>(undefined);
  const [from, setFrom] = useState("");
  const [dst, setDst] = useState("");
  const [price, setPrice] = useState(0);
  const addFlightToDb = () => {
      const newFlight = {
        from,
        dst,
        price
}
 fetch("http://localhost:3001/api/flight/addflight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFlight),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  };
  return (
    <div className="container">
      {errMessage && <div>${errMessage}</div>}
      <div className="d-flex flex-column  p-4 rounded container">
        <label htmlFor="from" className="font-bolder">
          from:
        </label>
        <input
          className="form-control"
          type="text"
          value={from}
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        />
      </div>
      <div className="d-flex flex-column  p-4 rounded container">
        <label htmlFor="dst" className="font-bolder">
          dst:
        </label>
        <input
          className="form-control"
          type="text"
          value={dst}
          onChange={(e) => {
            setDst(e.target.value);
          }}
        />
      </div>
      <div className="d-flex flex-column  p-4 rounded container">
        <label htmlFor="price" className="font-bolder">
          price:
        </label>
        <input
          className="form-control"
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(+e.target.value);
          }}
        />
      </div>
      
      <button
        className="btn btn-success"
        onClick={() => {
          addFlightToDb();
          Swal.fire("Your Flight has been added", "", "success");
        }}
      >
        Add flight
      </button>
    </div>
  );
};
export default AddFlight
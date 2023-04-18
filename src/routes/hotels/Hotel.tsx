import { BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import Swal from "sweetalert2";
import css from "./CardItem.module.scss";
import { Hotel } from "../../@types";

const CardItem = (props: Hotel) => {
  const nav = useNavigate();
  return (
    <div className={css.container}>
      <div className={`card ${css.card}`}>
        <h2 className={css.title}>{props.name}!!!</h2>

        <img
          src={props.img}
          width="400px"
          height="400px"
          alt=""
          className={css.img}
        />
        <button
          className={css.btn}
          onClick={() => {
          }}
        >
        </button>

        <button
          className={css.pencil}
          onClick={() => {
            nav(`/cards/edit/${props._id}`);
          }}
        >
          <BsPencil />
        </button>
        <button
          className={css.btntrash}
          onClick={() => {
            Swal.fire({
              title: "Are you sure you want to delete the card?",
              showDenyButton: true,
              confirmButtonText: "Yes",
              denyButtonText: `No`,
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Deleted!", "", "success");
              } else if (result.isDenied) {
                Swal.fire("Keeping the card", "", "info");
              }
            });
          }}
        >
          <BsTrash />
        </button>
        <button
          className={css.moredetails}
          onClick={() => {
            nav(`/card/details/${props._id}`);
          }}
        >
          Choose me!
        </button>
      </div>
    </div>
  );
};
export default CardItem;

// import {Card,deleteCard, toggleFavorite} from "../../features/superhero/superheroSlice"
import { BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// import css from "./CardItem.module.scss"
import { Hotel } from "../../@types";
import { useAppDispatch } from "../../app/hooks";

const CardItem = (props: Hotel) => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  return <></>;
};
export default CardItem;

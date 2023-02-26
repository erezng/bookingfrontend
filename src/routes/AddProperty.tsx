import * as Yup from "yup";
import { ListHotel } from "../@types";

const Addproperty = () => {
    const initialValues={
        name:"",
        rooms:1,
        location:"",
        ac:false,
        toilets:1,
        showers:1,
        img:""
    }
    const validationschema=Yup.object({
        user: Yup.string().min(3, "Name is too short").required(),
        rooms: Yup.number(),
        loaction: Yup.string().min(3, "Name is too short").required(),
        ac: Yup.boolean(),
        toilets: Yup.number(),
        showers: Yup.number(),
        img: Yup.string().min(3, "Name is too short").required(),
    })

    const handleAdd=(formvalues:ListHotel)=>{
        const {name,rooms,location,ac,toilets,showers,img}=formvalues;
        
    }
  return (
    <div>Addproperty</div>
  )
}

export default Addproperty
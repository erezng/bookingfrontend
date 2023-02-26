import * as Yup from "yup";
import { ListHotel } from "../@types";
import addservice from "../services/Add.service";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

const Addproperty = () => {
    const nav = useNavigate();
    const [errMessage, setErrMessage] = useState<string | undefined>(undefined);

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
        addservice(name,rooms,location,ac,toilets,showers,img)
        .then((res) => {
        console.log(res.data);
        alert("hotel saved!"); //swal //modal
        //swal
        nav("/");
      })
      .catch((e) => {
        console.log(e);
        setErrMessage(JSON.stringify(e.response.data));
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };
        
    // }
  return (
    <div>
      {errMessage && <div>${errMessage}</div>}
      <Formik
        initialValues={initialValues}
        onSubmit={handleAdd}
        validationSchema={validationschema}
      >
        <Form className="w-50 mx-auto">
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Field
              name="name"
              type="text"
              className="form-control"
              id="name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="alert alert-danger"
            />
            
        </div>
        <div>
            <label htmlFor="rooms" className="form-label">
              rooms
            </label>
            <Field
              name="rooms"
              type="number"
              className="form-control"
              id="rooms"
            />
            <ErrorMessage
              name="rooms"
              component="div"
              className="alert alert-danger"
            />
        </div>
        <div>
            <label htmlFor="location" className="form-label">
              location
            </label>
            <Field
              name="location"
              type="text"
              className="form-control"
              id="location"
            />
            <ErrorMessage
              name="location"
              component="div"
              className="alert alert-danger"
            />
        </div> 
        <div>
            <label htmlFor="ac" className="form-label">
              ac
            </label>
            <Field
              name="ac"
              type="boolean"
              className="form-control"
              id="ac"
            />
            <ErrorMessage
              name="ac"
              component="div"
              className="alert alert-danger"
            />
        </div>      
        <div>
            <label htmlFor="toilets" className="form-label">
              toilets
            </label>
            <Field
              name="toilets"
              type="number"
              className="form-control"
              id="toilets"
            />
            <ErrorMessage
              name="toilets"
              component="div"
              className="alert alert-danger"
            />
        </div>
        <div>
            <label htmlFor="showers" className="form-label">
              showers
            </label>
            <Field
              name="showers"
              type="number"
              className="form-control"
              id="showers"
            />
            <ErrorMessage
              name="showers"
              component="div"
              className="alert alert-danger"
            />
        </div>
        <div>
            <label htmlFor="img" className="form-label">
              img
            </label>
            <Field
              name="img"
              type="text"
              className="form-control"
              id="img"
            />
            <ErrorMessage
              name="img"
              component="div"
              className="alert alert-danger"
            />
        </div>
          <div className="col-12">
            <button
            //   disabled={isLoading}
              className="btn btn-primary"
              type="submit"
            >
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>

  )
}

export default Addproperty
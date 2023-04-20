import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"

const About = () => {
  const {username}=useContext(AuthContext)
  const token=localStorage.getItem("token")
//   if(!token){
//     return <Navigate to="/"/>;
//   }
// fetch("http://localhost:3001/api/books/all", {
//     headers: { "Authorization": token },
//   })
//     .then((res)=>res.json)
//     .then((data)=>{
//       console.log(data);
//     })
  return (
    <div className="container">
    <h1>Booking your vacation!</h1>
    Founded in 2023 in Hadera, Booking.com give the users great expirience of booking the perfect vacation!

    By investing in the technology that helps take the friction out of travel, Booking.com seamlessly connects millions of travellers with memorable experiences, a range of transport options and incredible places to stay - from homes to hotels and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, Booking.com enables properties all over the world to reach a global audience and grow their businesses.

    Booking.com is available in 43 languages and offers more than 28 million total reported accommodation listings, including over 6.6 million listings alone of homes, apartments and other unique places to stay. No matter where you want to go or what you want to do, Booking.com makes it easy and backs it all up with 24/7 customer support.


    </div>
  )
}

export default About
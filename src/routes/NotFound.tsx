import { Link } from "react-router-dom";

export default function NotFound() {
    return (
    <div className="container">
        <h1>Oops! You seem to be lost.</h1>
        <p>Click here to go home</p>
        <Link to='/'>Home</Link>
    </div>
    )
}
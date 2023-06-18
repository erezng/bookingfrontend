import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import css from "./NavBar.module.scss";
import { FaHotel, FaFlagUsa } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { HiOutlineBellAlert } from "react-icons/hi2";

function clearLocalStorage() {
  localStorage.clear();
  document.location.reload();

  return <NavLink to="/" />;
}
function BrandBar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <FaHotel /> Booking.git
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isLoggedIn && (
              <NavLink className={css.title} to="/register">
                Register
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink className={css.title} to="/login">
                Login
              </NavLink>
            )}
            
          </Nav>
          <Nav>
              <NavLink className={css.title} to="/about">
                About
              </NavLink>
            <NavLink className={css.title} to="/">
              <FaFlagUsa />
            </NavLink>
            <NavLink className={css.title} to="/">
              <BsCoin />
            </NavLink>
            <NavLink className={css.title} to="/">
              <BiHelpCircle />
            </NavLink>
            <NavLink className={css.title} to="/">
              <HiOutlineBellAlert />
            </NavLink>
          {isLoggedIn && (
          <NavLink className={css.title} to="/addproperty">
              List your property
            </NavLink>
            )}
            {isLoggedIn && (
              <button onClick={clearLocalStorage} className="btn btn-danger">
                logout
              </button>
            )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BrandBar;

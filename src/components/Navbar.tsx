import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import css from "./NavBar.module.scss";
import { MdLocalHotel, MdFlight, MdAttractions } from "react-icons/md";
import { RiSuitcaseLine } from "react-icons/ri";
import { FaCar, FaTaxi } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

function TopNavbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={css.title} to="/hotels">
              <MdLocalHotel /> Stay
            </NavLink>
            <NavLink className={css.title} to="/flights">
              <MdFlight /> Flight
            </NavLink>
            <NavLink className={css.title} to="/">
              <RiSuitcaseLine /> Stay+Flight
            </NavLink>
            <NavLink className={css.title} to="/">
              <FaCar /> Car rentals
            </NavLink>
            <NavLink className={css.title} to="/">
              <MdAttractions /> Attractions
            </NavLink>
            <NavLink className={css.title} to="/">
              <FaTaxi /> Airport taxi
            </NavLink>
          </Nav>
          <NavLink className={css.title} to="/addflight">
              List your flight
            </NavLink>
            <NavLink className={css.title} to="/cart">
              <BsCart3 />
            </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;

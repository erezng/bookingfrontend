import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import css from "./NavBar.module.scss"
import {SiApacherocketmq} from "react-icons/si"

function BrandBar() {
      const {isLoggedIn}=useContext(AuthContext)

  return (
    
      <Navbar bg="primary" variant="dark">
      <Container>
          <Navbar.Brand href="/"><SiApacherocketmq/>Booking.git</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isLoggedIn &&<NavLink className={css.title} to="/register">Register</NavLink>}
            {!isLoggedIn &&<NavLink className={css.title} to="/login">Login</NavLink>}
          </Nav>
             <Nav>
            {isLoggedIn&& <NavLink className={css.title} to="/about">About</NavLink>}
            <NavLink className={css.title} to="/">USD</NavLink>
            <NavLink className={css.title} to="/">USA</NavLink>
            <NavLink className={css.title} to="/">?</NavLink>
            <NavLink className={css.title} to="/">#Alert</NavLink>
            <NavLink className={css.title} to="/">List your property</NavLink>
            <NavLink className={css.title} to="/">erez</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BrandBar;
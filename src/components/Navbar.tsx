import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import css from "./NavBar.module.scss"
import {SiApacherocketmq} from "react-icons/si"

function TopNavbar() {
      const {isLoggedIn}=useContext(AuthContext)

  return (
    
      <Navbar bg="primary" variant="dark">
      <Container>
          {/* <Navbar.Brand href="/"><SiApacherocketmq/></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn&& <NavLink className={css.title} to="/about">About</NavLink>}
            <NavLink className={css.title} to="/">Stay</NavLink>
            <NavLink className={css.title} to="/">Flight</NavLink>
            <NavLink className={css.title} to="/">Stay+Flight</NavLink>
            <NavLink className={css.title} to="/">Car rentals</NavLink>
            <NavLink className={css.title} to="/">Attractions</NavLink>
            <NavLink className={css.title} to="/">Airport taxi</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
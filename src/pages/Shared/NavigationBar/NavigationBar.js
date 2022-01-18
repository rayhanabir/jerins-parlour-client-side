import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from '../../../Image/logo.png';
import './NavigationBar.css';

const NavigationBar = () => {
  const {user, logOut} = useAuth()
  return (
    <>
      <Navbar bg='light' expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
              <img width={'100px'} className="ms-5" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/service'>Services</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/appointment'>Appointment</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/review'>review</Link></li>
               
              </ul>
              
            </Nav>
           
              {user.email ?
              <Button className="me-5" variant="outline-success" onClick={logOut}>LogOut</Button>
              :
              
              <Button className="me-5" variant="outline-success">Login</Button>}
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;


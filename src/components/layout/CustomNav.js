import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAlt } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar"





const CustomNav = () => {

  const handleLoginNGO=()=>{
    if(localStorage.getItem('loggedInNgo')){
      localStorage.clear()
      navigate('/')
    }
    else
    navigate('/login')
  }

  const handleLoginUser=()=>{
    if(localStorage.getItem('loggedInUser')){
      localStorage.clear()
      navigate('/')
    }
    else
    navigate('/loginUser')
  }
  const navigate=useNavigate()
  
  return (
    
    <Navbar expand="sm" className="header-nav" style={{"position":"fixed","top":"0","zIndex":"3"}}>
      <Container fluid className="px-5">
        <Navbar.Brand href="/" className="navbar-brand">
          <FontAwesomeIcon icon={faHandshakeAlt} className="navbar-brand-2" > </FontAwesomeIcon>
          Helping Hands
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="me-auto">

            <ButtonGroup aria-label="Basic example">
              <Button variant="outline-dark"><Link to="/" className="nav-link">Home</Link></Button>
              <Button variant="outline-dark"><Link to="/donations" className="nav-link">Donations</Link></Button>
              <Button variant="outline-dark"><Link to="/events" className="nav-link">Events</Link></Button>
              <Button variant="outline-dark"> <Link to="/articles" className="nav-link">Articles</Link></Button>
              {/* <Button variant="outline-dark"> <div className="nav-link" onClick={()=>handleLogin()} style={{"color":"#ff8000"}}>{localStorage.getItem('loggedInNgo')?"Log Out":"Log In"}</div></Button> */}
             
            {!(localStorage.getItem("loggedInNgo")||localStorage.getItem("loggedInUser"))&&  <Button variant="outline-dark"  className="nav-link"> <Dropdown style={{"width": "94px !important"}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{background:"transparent" ,boxShadow:"none" , color:"#FF8000"}}>Login</Dropdown.Toggle>
                  <Dropdown.Menu className="modify">
                     <Dropdown.Item  onClick={()=>handleLoginNGO()}>NGO</Dropdown.Item>
                      <Dropdown.Item  onClick={()=>handleLoginUser()}>User</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </Button>
                }
                {(localStorage.getItem("loggedInNgo")||localStorage.getItem("loggedInUser"))&&<UserAvatar/>}


            </ButtonGroup>



            {/* using auth0 */}
            {/* {isAuthenticated && (<li className="nav-link"><p>Welcome {user.email}</p></li>)}

            {isAuthenticated ? (<li>
              <Button variant="outline-warning" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </Button>
            </li>

            ) : (
              <li className="nav-link">
                <Button variant="outline-warning" size="sm" onClick={() => loginWithRedirect()}>
                  Log In
                </Button>
              </li>
            )} */}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CustomNav;






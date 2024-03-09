
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAlt } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';

import { Scale } from "@mui/icons-material";
import shadows from "@mui/material/styles/shadows";
import { fontGrid } from "@mui/material/styles/cssUtils";

function App() {

  const handleback = () => {
    navigate("/")
  };

  const navigate=useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
    const host="https://helpinghands-backend.onrender.com"
    const handleSubmit = () => {
  
      if(localStorage.getItem('loggedInUser')){
        navigate("/")
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        toast.error("Please enter a valid email address.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      axios.post("https://helpinghands-backend.onrender.com/donor/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        if(response.data.status==="SUCCESS"){
          console.log(response)
          localStorage.setItem('loggedInUser',true)
          localStorage.setItem('email',email)
          setTimeout(() => {
            toast.success(response.data.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/");

          }, 1000);
        }
        else{
          toast.error(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  
  
    };
  
  return (
    <div >

      
 
      <div className='d-flex flex-row ps-5 pt-5'>
        <div style={{ fontSize: "35px" , paddingRight: "10px" }}>
          <FontAwesomeIcon icon={faHandshakeAlt} className="navbar-brand-2" style={{ color: '#FF8000' }} > </FontAwesomeIcon>
        </div>
        {/* <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/> */}
        <span className="h1 fw-bold mb-0">Helping Hands</span>
      </div>


      
        
      <MDBContainer lg  >
      <div className="container2">
        <MDBRow>
        <ToastContainer
                      position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />
          <MDBCol sm='6'>
          <MDBIcon onClick={handleback} icon='arrow-circle-left' style={{fontSize:"35px" , marginLeft:"2rem", marginTop:"5.2rem", display:"block", position:"absolute"}}/>

          {/* <button class="back-button" onclick={handleback}>Back</button> */}

            <div style={{ paddingTop: '35px', paddingLeft: '50px', fontSize: '18px'}}>


              <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4' >
              <div className="form-column">
                <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', fontSize: '35px' }} >User Login</h3>


                <MDBInput wrapperClass='mb-4 mx-5 w-75' label='Email address' id='formControlLg' type='email' onChange={handleEmailChange} required size="lg" />
                <MDBInput wrapperClass='mb-4 mx-5 w-75' label='Password' id='formControlLg' type='password' onChange={handlePasswordChange} required size="lg" />
                <MDBBtn className="mb-4 px-5 mx-5 w-50" color='info' size='lg' onClick={handleSubmit}>Login</MDBBtn>
                <p className='ms-5'>Don't have an account? <a href="#!" class="link-info"><Link to="/registerUser">Register</Link></a></p>
              </div>
            </div>
            </div>
          </MDBCol>
          
          <div className="image-column"> 
          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=626&ext=jpg&ga=GA1.2.1697258466.1677494383&semt=sph" alt="Login image" className="w-125" 
            style={{alignContent:'flex-end' ,height:'31rem', width:'25rem'}}/>
          </MDBCol>
          </div>
        </MDBRow>
        </div>
      </MDBContainer>
    </div>
    
  );
}

export default App;
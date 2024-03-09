import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAlt } from "@fortawesome/free-solid-svg-icons";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';

function App() {

  const handleback = () => {
    navigate("/")
  };





  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    setProfileImage(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };



  const handleSubmit = () => {
    // Here you can add your register logic
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
    axios.post("https://helpinghands-backend.onrender.com/donor/signup", {
      email: email,
      password: password,
      name: name,
      profileImage: profileImage
    })
      .then((response) => {
        console.log(response)
        

        if (response.data.message === "Verification email sent")
        setTimeout(() => {
          toast.warn(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/loginUser");
        }, 0);
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
      });
    setEmail("");
    setPassword("");
    setName("");
    setProfileImage("");
  };

  return (
    <div >

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

      <div className='d-flex flex-row ps-5 pt-5' >
        <div style={{ fontSize: "35px", paddingRight: "10px" }}>
          <FontAwesomeIcon icon={faHandshakeAlt} className="navbar-brand-2" style={{ color: '#FF8000' }} > </FontAwesomeIcon>
        </div>
        {/* <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/> */}
        <span className="h1 fw-bold mb-0">Helping Hands</span>
      </div>




      <MDBContainer lg  >
        <div className="container2">
          <MDBRow>

            <MDBCol sm='6'>
              <MDBIcon onClick={handleback} icon='arrow-circle-left' style={{ fontSize: "35px", marginLeft: "2rem", marginTop: "5.2rem", display: "block", position: "absolute" }} />

              {/* <button class="back-button" onclick={handleback}>Back</button> */}

              <div style={{ paddingTop: '35px', paddingLeft: '50px', fontSize: '18px' }}>


                <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4' >
                  <div className="form-column">
                    <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', fontSize: '35px' }} >Register User</h3>

                    <MDBInput wrapperClass='mb-4' label='Name' value={name} onChange={handleNameChange} id='form1' type='text' required />

                    <MDBInput wrapperClass='mb-4' value={profileImage} onChange={handleProfileImageChange} label='Profile Image Link' id='form3' type='text' />
                    <MDBInput wrapperClass='mb-4' value={email} onChange={handleEmailChange} label='Email' id='form3' type='email' required />
                    <MDBInput wrapperClass='mb-4' value={password} onChange={handlePasswordChange} label='Password' id='form4' type='password' required />
                    <MDBBtn className='w-100 mb-4' color='info' size='md' onClick={handleSubmit}>sign up</MDBBtn>

                    <p className='ms-5'>Already have an account? <a href="#!" class="link-info"><Link to="/loginUser">Login</Link></a></p>

                  </div>
                </div>
              </div>
            </MDBCol>

            <div className="image-column">
              <MDBCol sm='6' className='d-none d-sm-block px-0'>
                <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?size=626&ext=jpg&ga=GA1.1.1697258466.1677494383&semt=sph" alt="Register image" className="w-125"
                  style={{ alignContent: 'flex-end', height: '31rem', width: '30rem' }} />
              </MDBCol>
            </div>
          </MDBRow>
        </div>
      </MDBContainer>
    </div>

  );
}

export default App;
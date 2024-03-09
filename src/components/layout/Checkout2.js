import { useLocation } from 'react-router-dom';
import * as React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { VerifiedRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const steps = ['Personal Information', 'Payment details', 'Review your order'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm  />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();

export default function Checkout() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const donationCardId = searchParams.get('donationCardId');
    const [activeStep, setActiveStep] = React.useState(0);
    const navigate = useNavigate()

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            const email = localStorage.getItem('email');
            const donationAmount = localStorage.getItem('donationAmount');
            const loggedInNgo = localStorage.getItem('loggedInNgo');
            const loggedInUser = localStorage.getItem('loggedInUser');
            const host = "https://helpinghands-backend.onrender.com"
            if (loggedInNgo === "true") {
                axios.put(`${host}/api/auth/users/${email}/donate/${donationAmount}`)
                  .then(response => {
                    console.log(response.data);
                    setActiveStep(activeStep + 1);
                  })
                  .catch(error => {
                    console.log(error.response.data);
                  });

                  axios.put(`${host}/api/auth/donation-cards/${donationCardId}/update-fund/${donationAmount}`)
                  .then(response => {
                      console.log(response.data);
                      setActiveStep(activeStep + 1);
                  })
                  .catch(error => {
  
                      console.log(error.response.data);
                  });

              } else if (loggedInUser === "true"){
                axios.put(`${host}/api/auth/donors/${email}/donate/${donationAmount}`)
                  .then(response => {
                    console.log(response.data);
                    setActiveStep(activeStep + 1);
                  })
                  .catch(error => {
                    console.log(error.response.data);
                  });

                  axios.put(`${host}/api/auth/donation-cards/${donationCardId}/update-fund/${donationAmount}`)
                  .then(response => {
                      console.log(response.data);
                      setActiveStep(activeStep + 1);
                  })
                  .catch(error => {
  
                      console.log(error.response.data);
                  });
              }

              else{
                toast.error("You must login first!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                navigate('/')
              }
            }
           

      
        else {
            setActiveStep(activeStep + 1);
        }
        
    };


    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleBackTo = () => {
        navigate("/")
    };

    return (
        
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
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
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <div style={{ fontFamily: "sans-serif", fontSize: "40px", fontWeight: "bolder" }}>
                        Donate Us
                    </div>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>

                            <div style={{ display: "flex", justifyContent: 'center' }}>
                                <Avatar sx={{ m: 1, bgcolor: 'green', color: "white", marginTop: "1rem" }}> <VerifiedRounded /> </Avatar>
                            </div>

                            <div style={{ fontFamily: "sans-serif", fontWeight: "bold", display: "flex", justifyContent: 'center', marginTop: "2rem" }}>
                                Payment Successful !
                            </div>
                            <div variant="subtitle1" style={{ fontFamily: "sans-serif", display: "flex", justifyContent: 'center', marginTop: "1rem" }}>
                                Thank you so much for your kind donation, your generosity will help us make a real impact in making world a better place.
                            </div>

                            <div style={{ fontFamily: "sans-serif", fontWeight: "bold", display: "flex", justifyContent: 'center' }}> <Button
                                variant="contained"
                                onClick={handleBackTo}
                                sx={{ mt: 7, ml: 1 }}
                            >
                                GO BACK TO WEBSITE
                            </Button>
                            </div>


                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 7, ml: 1 }}>
                                        Back
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 7, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'Donate' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
            </Container>
        </ThemeProvider>
    );
}
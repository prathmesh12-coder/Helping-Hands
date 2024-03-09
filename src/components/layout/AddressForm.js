import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function AddressForm() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [donationAmount, setAmount] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [lastNameError, setLastNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [amountError, setAmountError] = React.useState(false);

  
  const handleFirstNameChange = (event) => {
    const input = event.target.value;
    setFirstName(input);
    setFirstNameError(!/^[a-zA-Z]+$/.test(input));
  };

  const handleLastNameChange = (event) => {
    const input = event.target.value;
    setLastName(input);
    setLastNameError(!/^[a-zA-Z]+$/.test(input));
  };


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!/^\S+@\S+\.\S+$/.test(event.target.value));
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    setAmountError(event.target.value === '' || isNaN(event.target.value));
    localStorage.setItem('donationAmount', event.target.value);
  };

  return (
    <React.Fragment>
      <div style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "20px" }}>
        Personal Information
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={firstName}
            onChange={handleFirstNameChange}
            error={firstNameError}
            helperText={firstNameError ? 'Please enter your first name' : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={lastName}
            onChange={handleLastNameChange}
            error={lastNameError}
            helperText={lastNameError ? 'Please enter your last name' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? 'Please enter a valid email address' : ''}
          />
        </Grid>
        <Grid item xs={12} mt={3}>
          <TextField
            id="state"
            name="amount"
            label="Amount"
            required
            fullWidth
            variant="standard"
            value={donationAmount}
            onChange={handleAmountChange}
            error={amountError}
            helperText={amountError ? 'Please enter a valid donation amount' : ''}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

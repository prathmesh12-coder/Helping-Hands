import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function PaymentForm() {
  const [cardName, setCardName] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [expDate, setExpDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [cardNameError, setCardNameError] = React.useState(false);
  const [cardNumberError, setCardNumberError] = React.useState(false);
  const [expDateError, setExpDateError] = React.useState(false);
  const [cvvError, setCvvError] = React.useState(false);

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
    setCardNameError(!/^[a-zA-Z]+ [a-zA-Z]+$/.test(event.target.value));
    localStorage.setItem('cardName', event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
    setCardNumberError(!/^\d{16}$/.test(event.target.value));
    localStorage.setItem('cardNumber', event.target.value);

  };

  const handleExpDateChange = (event) => {
    setExpDate(event.target.value);
    setExpDateError(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(event.target.value));
    localStorage.setItem('date', event.target.value);

  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
    setCvvError(!/^\d{3}$/.test(event.target.value));
  };

  return (
    <React.Fragment>
      <div style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "20px" }}>
        Payment method
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={cardName}
            onChange={handleCardNameChange}
            error={cardNameError}
            helperText={cardNameError ? 'Please enter a valid name on card' : ''}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={cardNumber}
            onChange={handleCardNumberChange}
            error={cardNumberError}
            helperText={cardNumberError ? 'Please enter a valid card number' : ''}
            
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            placeholder='MM/YY'
            value={expDate}
            onChange={handleExpDateChange}
            error={expDateError}
            helperText={expDateError ? 'Please enter a valid expiry date' : ''}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={cvv}
            onChange={handleCvvChange}
            error={cvvError}
            helperText={cvvError ? 'Please enter a valid CVV' : ''}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

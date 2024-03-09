import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Helping Hands',
    desc: 'Grateful for your generous donation. Thanks!',
    price: '₹2000',
  }
];

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: localStorage.getItem('cardName') },
  { name: 'Card number', detail: localStorage.getItem('cardNumber') },
  { name: 'Expiry date', detail: localStorage.getItem('date') },
];

export default function Review() {
  return (
    <React.Fragment>
      <div style={{fontFamily:"sans-serif", fontWeight:"bold", fontSize:"20px"}}>
        Order summary
      </div>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">₹{localStorage.getItem("donationAmount")}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700, fontFamily: "sans-serif !important" }}>
          ₹{localStorage.getItem("donationAmount")}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6} >
        <div style={{fontFamily:"sans-serif", fontWeight:"bold", fontSize:"20px"}}>
            Payment details
          </div>
          <Grid container>
          <React.Fragment key={0}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{"Card Type"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{"Visa"}</Typography>
                </Grid>
              </React.Fragment>
              <React.Fragment key={1}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{"Name"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{localStorage.getItem("cardName")}</Typography>
                </Grid>
              </React.Fragment>
              <React.Fragment key={2}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{"Card Number"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{localStorage.getItem("cardNumber")}</Typography>
                </Grid>
              </React.Fragment>
              <React.Fragment key={3}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{"Expiry"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{localStorage.getItem("date")}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>



    </React.Fragment>
  );
}
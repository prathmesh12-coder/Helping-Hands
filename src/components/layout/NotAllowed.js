import React from 'react'
import notallowed from "./error.gif.gif"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function NotAllowed() {
  return (
    <div style={{ "height": "100vh", "width": "100vw", "display": "flex", "flexDirection": "column", "gap": "0.5rem", "alignItems": "center" }}>
      <img src={notallowed} style={{ "height": "30rem", "width": "30rem" }} />
      <h1>You have already created a donation card <br /></h1>
      <h1 style={{textAlign:"center"}}> For more info contact admin</h1>
      <Link to="/">
        <Button style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          border: '2px solid #333',
          borderRadius: '5px',
          color: '#333',
          padding: '10px 20px',
          textDecoration: 'none',
          transition: 'all 0.2s ease-in-out',
        }}>
          Go to homepage
        </Button>
      </Link>

    </div>
  )
}

export default NotAllowed
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import UserAvatarContent from './UserAvatarContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



export default function TriggersTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const host="https://helpinghands-backend.onrender.com"
  const [user,setUser]=useState(null)
  useEffect(()=>{      
      const getUserProfile=async (path)=>{
          console.log("request is",`${host}/api/auth/${path}`)
          try {
            const response = await axios.get(`${host}/api/auth/${path}`, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
        
            const json = response.data;
            console.log("got user", json);
            setUser(json[0])
          } catch (error) {
            console.error(error);
          }
      
          
          //  setUser(json[0])    
          }
          if(localStorage.getItem("loggedInUser"))
          {
              getUserProfile(`getspecificdonor/${localStorage.getItem("email")}`);
              console.log(user)  
          }
          else if(localStorage.getItem("loggedInNgo"))
          {
              getUserProfile(`getspecificuser/${localStorage.getItem("email")}`);
              console.log(user)  
          }
    },[])
  return (
    <div>
 
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title=<UserAvatarContent user={user}/>
              >
                <Button onClick={handleTooltipOpen} >      <Avatar alt="NO IMG" src={user?.profileImage} />
</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
    </div>
  );
}




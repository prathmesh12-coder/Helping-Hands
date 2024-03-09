import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProgressBar from '../components/common/Progressbar'
import { showLoading } from '../actions/loading'
import { hideLoading } from '../actions/loading'

function Verify() {
    const {userId}=useParams()
    const host="https://helpinghands-backend.onrender.com"
    const [user,setUser]=useState(null)
    const navigate=useNavigate()
    const [message,setMessage]=useState("Your email verification is under progress")
    useEffect(()=>{
      
        const getUserProfile=async ()=>{
            const response=await fetch(`${host}/user/verifyuser/${userId}`,{
                method: 'POST',
               
              });
        
              const json=await response.json();
              if(json.message==="success"){
                  setMessage("Your email was verified successfully")

                  setTimeout(function() {
                    navigate("/")
                }, 2000);
              }
              
              console.log(json)

            }
                getUserProfile();
               
                
      },[])
    return (
    <div style={{"fontSize":"3rem","color":"green","display":"flex","justifyContent":"center","alignItems":"center","height":"100vh","width":"100vw"}}>
           {message==="Your email verification is under progress"&&showLoading }
           {message==="Your email was verified successfully"&&"Your email was verified successfully!!"}
    </div>
  )
}

export default Verify
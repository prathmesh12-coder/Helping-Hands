import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SupportSection = () => {
    const [funds,setFunds]=useState(0)
        useEffect(() => {
            const getBlogProfile = async () => {
              const response = await fetch(`https://helpinghands-backend.onrender.com/api/auth/donations-sum`, {
                method: 'GET'
              });
        
              const json = await response.json();
              setFunds(json)
            }
            getBlogProfile();
        
          }, [])  
    

    return (
        <section id="support" className="my-5">
            <div
                className="container-fluid support-background d-flex align-items-center justify-content-center"
            >
                <div className="row">
                    <div className="content-container text-center">
                        <h3 className="mb-5">
                            We have raised <span> &#8377;{funds} </span> 
                            as a <span> NGO </span> in total
                        </h3>

                        {/* <button
                            className="btn action-btn rounded-pill px-md-5 py-md-3 px-sm-3 py-sm-1"
                        >
                            Discover More
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SupportSection;
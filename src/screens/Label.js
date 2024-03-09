import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import ProgressBar from '../components/common/Progressbar';

const DonationCard = ({ donationcard }) => {
    const [percentage, setPercentage] = React.useState(0);
    
    return (
      <div className="col-lg-4 col-md-12 mb-5">
        <Link to={`/getspecificdonationcard/${donationcard._id}`} style={{ textDecoration: "none" }}>
          <ScrollAnimation
            animateIn="flipInX"
            afterAnimatedIn={() =>
              setPercentage((donationcard.currentFund / donationcard.goalFund) * 100)
            }
          >
            <div className="card-container">
              <div className="img-container position-relative">
                <img src={donationcard.image} alt="" style={{"height":"20rem" ,"width":"100%"}} />
                <div className="category-date-container px-4 py-2 rounded-pill position-absolute bottom-left">
                  <p>{donationcard.label}</p>
                </div>
              </div>
              <div className="progress-container px-3 pt-5 pb-3">
                <ProgressBar percentage={percentage} />
                <div className="statistics-container d-flex align-items-center justify-content-between">
                  <p>
                    <span className="currency">&#8377;{donationcard.currentFund} </span>
                    Raised
                  </p>
                  <p>
                    <span className="currency">&#8377;{donationcard.goalFund} </span>Goal
                  </p>
                </div>
              </div>
              <div className="content-container mx-3 my-3">
                <h4>{donationcard.title}</h4>
                <p>{donationcard.summary.slice(0, 70)}...</p>
              </div>
            </div>
          </ScrollAnimation>
        </Link>
      </div>
    );
  };
function Label() {
    const {labelId}=useParams()
    const host = "https://helpinghands-backend.onrender.com"
  const [rows, setRows] = useState(null)
    useEffect(() => {
        const getBlogProfile = async () => {
          const response = await fetch(`${host}/api/auth/getlabel/${labelId}`, {
            method: 'GET'
          });
    
          const json = await response.json();
          setRows(json)
          console.log(json)
        }
        getBlogProfile();
    
    
      }, [])
  return (
  <>
    <div ><h1 style={{"textAlign":"center"}}>{labelId}</h1></div>
    <div className='row' style={{"padding":"1rem"}}>
    {rows&& Object.keys(rows).map((index) => {
                return <DonationCard donationcard={rows[index]} />;
            })}
    </div>
  </>
  )
}

export default Label
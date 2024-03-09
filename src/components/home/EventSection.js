import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {

    const formatDate = (time) => {
      const [timePart, datePart] = time.split(' ');
      const [day, month, year] = datePart.split(' ');
      const formattedDate = `${day}${day === '1' || day === '21' || day === '31' ? 'st' : day === '2' || day === '22' ? 'nd' : day === '3' || day === '23' ? 'rd' : 'th'} ${month}`;
      return { formattedDate: datePart, formattedTime: timePart };
    }
    
    function getDateAndMonth(dateStr) {
      const date = new Date(dateStr);
      const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
      const day = date.getDate();
      return `${day} ${month}`;
    }
    

  const { formattedDate, formattedTime } = formatDate(event.time);
  

  return (
    <div className="col-lg-4 col-md-12 mb-5">
      <Link to={`/events/${event._id}`} style={{ textDecoration: "none" }}>
        <div className="card-container">
          <div className="img-container position-relative">
            <img src={event.image} alt="https://th.bing.com/th/id/OIP.se6duPKpArNz0YnywnnYHQHaHa?w=158&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{"height":"20rem"}} />
            <div className="category-date-container text-center px-4 py-3 position-absolute top-0 rounded-border">
              <p>{getDateAndMonth(event?.time)}</p>
            </div>
          </div>
          <div className="content-container p-5">
            <h4>{event?.title}</h4>
            <div className="time-place-container">
              <p>
                <i className="fa-solid fa-clock" style={{paddingRight:"0.5rem", paddingTop:"1rem"}}></i>{(formattedTime)} {(formattedDate)}
              </p>
              <p>
                <i className="fa-solid fa-location-dot" style={{paddingRight:"0.5rem"}}></i> {event?.location}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const EventSection = ({ events, loading, totalcards }) => {
  
  // https://helpinghands-backend.onrender.com
  const host = "https://helpinghands-backend.onrender.com"
  const [rows, setRows] = useState(null)
  var rand=0
  useEffect(() => {
    const getBlogProfile = async () => {
      const response = await fetch(`${host}/api/auth/getevent`, {
        method: 'GET'
      });

      const json = await response.json();
      setRows(json)
    }
    getBlogProfile();


  }, [])
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="loading-circle"></div>
      </div>
    );
  } else {
    return (
      <section id="events" className="my-5">
        <div className="container">
          <div className="row text-center py-4">
            <h2 style={{marginTop:"2rem"}}>Upcoming Events</h2>
          </div>
          <div className="row" >
            {rows&&Object.keys(rows).map((index) => {
              if (index < totalcards) {
                return <EventCard event={rows[index]} />;
              }
            })}
          </div>
        </div>
      </section>
    );
  }
};
export default EventSection;

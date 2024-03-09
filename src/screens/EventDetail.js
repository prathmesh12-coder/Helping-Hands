import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialIconsContainer from "../components/common/SocialIconsContainer";
import { getEventData } from "../actions/events";
import { getArticleData } from "../actions/articles";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  };

  return ComponentWithRouterProp;
};
const EventDetail = ({ dispatch, event, loading }) => {
  useEffect(() => {
    dispatch(getEventData());
  }, []);
  
 
  
  function getDateAndMonth(dateStr) {
    const date = new Date(dateStr);
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    const day = date.getDate();
    return `${day} ${month}`;
  }

  function getTime(dateStr) {
    const dateTimeParts = dateStr.split(" ");
    const time = dateTimeParts[0]; // Extract the time part (e.g., "9:00")
    const meridiem = dateTimeParts[1]; // Extract the meridiem part (e.g., "pm")
    return `${time} ${meridiem}`;
  }
  
  
  const {eventId}=useParams()
  const host = "https://helpinghands-backend.onrender.com"
  const [rows, setRows] = useState(null)
  var rand=0
  useEffect(() => {
    const getBlogProfile = async () => {
      const response = await fetch(`${host}/api/auth/getspecificevent/${eventId}`, {
        method: 'GET'
      });

      const json = await response.json();
      setRows(json)
      console.log(json)
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
      <section id="event-detail">
        {rows&&<div className="container my-5">
          <div className="row">
            <div className="col-md-12">
              <div className="img-container position-relative">
                <img
                  src={rows?.image}
                  alt=""
                  className="all-round-borders"
                />
                <div className="category-date-container text-center px-lg-4 py-lg-3 px-3 py-2 position-absolute top-0 rounded-border">
                  {/* <p>{separteDateMonth("date")}</p>
                  <p>{separteDateMonth("month")}</p> */}
                  {getDateAndMonth( rows.time)}
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-7 col-lg-8">
              <div className="event-summary mb-5">
                <h3 className="mb-3">Event Summary</h3>
                <p className="mid-grey">{rows?.desc}</p>
              </div>
              <div className="event-info">
                <h4 className="mb-3">Event Detail</h4>
                <p className="mid-grey">{rows?.summary}</p>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="info-card-container d-flex align-items-center justify-content-center mb-3 px-2 pt-5 pb-3">
                <div className="info-card-content d-flex flex-column align-items-center">
                  <h4 className="mb-3">Event Info</h4>
                  <ul>
                    <li className="event-info-list">
                      <p>
                        Time: <span>{getTime(rows?.time)}</span>
                      </p>
                    </li>
                    <li className="event-info-list">
                      <p>
                        Date: <span>{getDateAndMonth(rows?.time)} 2023</span>
                      </p>
                    </li>
                    <li className="event-info-list">
                      <p>
                        Location: <span>{rows?.location}</span>
                      </p>
                    </li>
                    <li className="event-info-list">
                      <p>
                        Phone: <span>{rows?.phone}</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <SocialIconsContainer page="Event" />
            </div>
          </div>
        </div>}
      </section>
    );
  }
};
const mapStateToProps = ({ events, loading }, props) => {
  const { event_id } = props.router.params;
  const eventIndex = Object.keys(events).filter(
    (eventIdex) => events[eventIdex].id == event_id
  );
  console.log("event id", event_id);
  return {
    event: events[eventIndex],
    loading,
  };
};
export default withRouter(connect(mapStateToProps)(EventDetail));

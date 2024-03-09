import React, {useEffect} from 'react';
import {getEventData} from '../actions/events';
import {connect} from "react-redux";
import EventSection from "../components/home/EventSection";

const Events = ({dispatch, events, loading,Header,Footer}) => {

    useEffect(() => {
        dispatch(getEventData());
    }, []);
    return (
        <>
        {Header} 
            <EventSection events={events} loading={loading} totalcards={12}/>
            {Footer}
        </>
    )
}

const mapStateToProps = ({events, loading}) => ({ events, loading });
export default connect(mapStateToProps)(Events);

import {getEvents} from '../utils/api';
import {showLoading, hideLoading} from "./loading";

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

const receiveEvents = (returnDataArr) => {
    return {
        type: RECEIVE_EVENTS,
        events: returnDataArr
    }
}

export const getEventData = () => {

    return (dispatch) => {
        dispatch(showLoading());
        getEvents().then((returnDataArr) => {
            dispatch(receiveEvents(returnDataArr));
            dispatch(hideLoading());
        });
    }
}
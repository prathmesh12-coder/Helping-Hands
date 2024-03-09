import {RECEIVE_EVENTS} from "../actions/events";

const events = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_EVENTS:
            return {
                ...state,
                ...action.events
            }
        default:
            return state;
    }
}

export default events;
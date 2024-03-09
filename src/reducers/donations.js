import {RECEIVE_DONATIONS} from "../actions/donations";

const donations = (state = {}, action) => {
    console.log('Action Donations', action.donations);
    switch (action.type) {
        case RECEIVE_DONATIONS:
            return {
                ...state,
                ...action.donations
            }
        default:
            return state;
    }
}

export default donations;
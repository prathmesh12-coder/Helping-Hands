import {getDonations} from '../utils/api';
import {showLoading, hideLoading} from "./loading";

export const RECEIVE_DONATIONS = 'RECEIVE_DONATIONS';

const receiveDonations = (returnDataArr) => {
    console.log('return data arr', returnDataArr);
    return {
        type: RECEIVE_DONATIONS,
        donations: returnDataArr
    }
}

export const getDonationData = () => {

    return (dispatch) => {
        dispatch(showLoading());
        getDonations().then((returnDataArr) => {
            dispatch(receiveDonations(returnDataArr));
            dispatch(hideLoading());
        });
    }
}
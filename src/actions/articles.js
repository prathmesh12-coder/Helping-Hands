import {getArticles} from '../utils/api';
import {showLoading, hideLoading} from "./loading";

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

const receiveArticles = (returnDataArr) => {
    return {
        type: RECEIVE_ARTICLES,
        articles: returnDataArr
    }
}

export const getArticleData = () => {

    return (dispatch) => {
        dispatch(showLoading());
        getArticles().then((returnDataArr) => {
            dispatch(receiveArticles(returnDataArr));
            dispatch(hideLoading());
        });
    }
}
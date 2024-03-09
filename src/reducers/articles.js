import {RECEIVE_ARTICLES} from "../actions/articles";

const articles = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ARTICLES:
            return {
                ...state,
                ...action.articles
            }
        default:
            return state;
    }
}

export default articles;
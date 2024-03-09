import {combineReducers} from "redux";
import donations from './donations';
import events from './events';
import articles from './articles';
import loading from "./loading";

export default combineReducers({donations, events, articles, loading});
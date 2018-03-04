import { combineReducers } from 'redux';
import AppConfig from '../package.json';
// import reviews from './listing/reviews.reducer';

const initialApplicationState = {
	version: AppConfig.version
};
const application = (state = initialApplicationState, action) => state;

const reviews = (state = [], action) => state;

export default combineReducers({
	application,
	reviews,
});
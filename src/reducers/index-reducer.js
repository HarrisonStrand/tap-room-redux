import formVisibleReducer from './form-visible-reducer';
import itemListReducer from './item-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	formVisibleOnPage: formVisibleReducer,
	masterItemList: itemListReducer
});

export default rootReducer;
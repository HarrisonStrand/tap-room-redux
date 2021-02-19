import rootReducer from '../../reducers/index-reducer';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {

	test('Should return default state if no action type is recognized', () => {
		expect(rootReducer({}, { type: null })).toEqual({
			masterKegList: {},
			formVisibleOnPage: false
		});
	});

	test('Check that initial state of kegListReducer matches rootReducer', () => {
		expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
	});

	test('Check that initial state of formVisibleReducer matches rootReducer', () => {
		expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
	});

});
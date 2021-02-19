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

	test('Check that ADD_KEG action works for kegListReducer and rootReducer', () => {
		const action = {
			type: 'ADD_KEG',
			name: 'RPM IPA',
			brand: 'Boneyard Brewery',
			price: 6,
			ABV: 7,
			pints: 100,
			stock: '',
			id: 2
		}
		store.dispatch(action);
		expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
	});

});
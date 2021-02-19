import rootReducer from '../../reducers/index-reducer';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import itemListReducer from '../../reducers/item-list-reducer';
import { ADD_ITEM, TOGGLE_FORM } from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {

	test('Should return default state if no action type is recognized', () => {
		expect(rootReducer({}, { type: null })).toEqual({
			masterItemList: {},
			formVisibleOnPage: false
		});
	});

	test('Check that initial state of itemListReducer matches rootReducer', () => {
		expect(store.getState().masterItemList).toEqual(itemListReducer(undefined, { type: null }));
	});

	test('Check that initial state of formVisibleReducer matches rootReducer', () => {
		expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
	});

	test('Check that ADD_ITEM action works for itemListReducer and rootReducer', () => {
		const action = {
			type: ADD_ITEM,
			category: 'KEG',
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

	test('Check that TOGGLE_FORM action works for formVisibleReducer and rootReducer', () => {
		const action = {
			type: TOGGLE_FORM
		}
		store.dispatch(action);
		expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
	});

});
import { ADD_ITEM, DELETE_ITEM } from '../../actions/ActionTypes';
import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

	let action;
	const currentState = {
		1: {
			category: 'KEG',
			name: 'lager',
			brand: 'Ecliptic Brewery',
			price: 5,
			ABV: 6,
			pints: 100,
			stock: '',
			id: 1
			},
		2: {
			category: 'KEG',
			name: 'RPM IPA',
			brand: 'Boneyard Brewery',
			price: 6,
			ABV: 7,
			pints: 100,
			stock: '',
			id: 2
			},
		};

	const itemData = {
		category: 'KEG',
		name: 'lager',
		brand: 'Ecliptic Brewery',
		price: 5,
		ABV: 6,
		pints: 100,
		stock: '',
		id: 1
		};

		test('Should return default state if there is no action type passed int the reducer', () => {
			expect(itemListReducer({}, { type: null })).toEqual({});
		});

		test('Should successfully add a new Item to masterItemList', () => {
			const { name, brand, price, ABV, pints, stock, id } = itemData;
			action = {
				type: ADD_ITEM,
				category: 'KEG',
				name: name,
				brand: brand,
				price: price,
				ABV: ABV,
				pints: pints,
				stock: stock,
				id: id,
			};

			expect(itemListReducer({}, action)).toEqual({
				[id] : {
					category: category,
					name: name,
					brand: brand,
					price: price,
					ABV: ABV,
					pints: pints,
					stock: stock,
					id: id
				}
			});
		});

		test('Should successfully delete a item', () => {
			action = {
				type: DELETE_ITEM,
				id: 1
			};

			expect(itemListReducer(currentState, action)).toEqual({
				2: {
					category: 'KEG',
					name: 'RPM IPA',
					brand: 'Boneyard Brewery',
					price: 6,
					ABV: 7,
					pints: 100,
					stock: '',
					id: 2
					},
			});
		});

});
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
			amount: 100,
			stock: '',
			size: '',
			id: 1
			},
		2: {
			category: 'KEG',
			name: 'RPM IPA',
			brand: 'Boneyard Brewery',
			price: 6,
			ABV: 7,
			amount: 100,
			stock: '',
			size: '',
			id: 2
			},
		};

	const itemData = {
		category: 'KEG',
		name: 'lager',
		brand: 'Ecliptic Brewery',
		price: 5,
		ABV: 6,
		amount: 100,
		stock: '',
		size: '',
		id: 1
		};

		test('Should return default state if there is no action type passed int the reducer', () => {
			expect(itemListReducer({}, { type: null })).toEqual({});
		});

		test('Should successfully add a new Item to masterItemList', () => {
			const { category, name, brand, price, ABV, amount, stock, size, id } = itemData;
			action = {
				type: ADD_ITEM,
				category: category,
				name: name,
				brand: brand,
				price: price,
				ABV: ABV,
				amount: amount,
				stock: stock,
				size: size,
				id: id,
			};

			expect(itemListReducer({}, action)).toEqual({
				[id] : {
					category: category,
					name: name,
					brand: brand,
					price: price,
					ABV: ABV,
					amount: amount,
					stock: stock,
					size: size,
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
					amount: 100,
					stock: '',
					size: '',
					id: 2
					},
			});
		});

});
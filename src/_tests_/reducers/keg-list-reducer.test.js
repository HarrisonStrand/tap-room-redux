import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

	let action;
	const currentState = {
		1: {
			name: 'lager',
			brand: 'Ecliptic Brewery',
			price: 5,
			ABV: 6,
			pints: 100,
			stock: '',
			id: 1
			},
		2: {
			name: 'RPM IPA',
			brand: 'Boneyard Brewery',
			price: 6,
			ABV: 7,
			pints: 100,
			stock: '',
			id: 2
			},
		};

		const kegData = {
			name: 'lager',
			brand: 'Ecliptic Brewery',
			price: 5,
			ABV: 6,
			pints: 100,
			stock: '',
			id: 1
			};

		test('Should return default state if there is no action type passed int the reducer', () => {
			expect(kegListReducer({}, { type: null })).toEqual({});
		});

		test('Should successfully add a new Keg to masterKegList', () => {
			const { name, brand, price, ABV, pints, stock, id } = kegData;
			action = {
				type: 'ADD_KEG',
				name: name,
				brand: brand,
				price: price,
				ABV: ABV,
				pints: pints,
				stock: stock,
				id: id,
			};

			expect(kegListReducer({}, action)).toEqual({
				[id] : {
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

		test('Should successfully delete a keg', () => {
			action = {
				type: 'DELETE_ITEM',
				id: 1
			};

			expect(kegListReducer(currentState, action)).toEqual({
				2: {
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
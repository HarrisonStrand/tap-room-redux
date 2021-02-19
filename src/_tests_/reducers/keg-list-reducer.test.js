import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

	let action;
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

});
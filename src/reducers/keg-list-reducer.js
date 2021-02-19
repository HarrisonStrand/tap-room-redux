export default (state = {}, action) => {
	const { name, brand, price, ABV, pints, stock, id } = action;
	switch (action.type) {
		case 'ADD_KEG':
			return Object.assign({}, state, {
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
		default:
				return state;
		}
	};
import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
	const { category, name, brand, price, ABV, pints, stock, id } = action;
	switch (action.type) {
		case c.ADD_ITEM:
			return Object.assign({}, state, {
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
			case c.DELETE_ITEM:
				let newState = {...state};
				delete newState[id];
				return newState;
			default:
				return state;
		}
	};
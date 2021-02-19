import rootReducer from '../../reducers/index-reducer';

describe('rootReducer', () => {

	test('Should return default state if no action type is recognized', () => {
		expect(rootReducer({}, { type: null })).toEqual({
			masterKegList: {},
			formVisibleOnPage: false
		});
	});
});
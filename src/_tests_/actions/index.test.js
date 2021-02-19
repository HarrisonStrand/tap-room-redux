import * as actions from './../../actions';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
        name: 'RPM IPA',
        brand: 'Boneyard Brewery',
        price: 6,
        ABV: 7,
        pints: 100,
        stock: '',
        id: 2
      })).toEqual({
        type: 'ADD_KEG',
        name: 'RPM IPA',
        brand: 'Boneyard Brewery',
        price: 6,
        ABV: 7,
        pints: 100,
        stock: '',
        id: 2
    });
  });
});
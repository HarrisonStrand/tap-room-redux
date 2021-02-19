import { DELETE_ITEM, TOGGLE_FORM } from '../../actions/ActionTypes';
import * as actions from './../../actions';

describe('tap room actions', () => {
  it('deleteItem should create DELETE_ITEM action', () => {
    expect(actions.deleteItem(1)).toEqual({
      type: DELETE_ITEM,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_ITEM action', () => {
    expect(actions.addItem({
        category: 'KEG',
        name: 'RPM IPA',
        brand: 'Boneyard Brewery',
        price: 6,
        ABV: 7,
        amount: 100,
        stock: '',
        size: '',
        id: 2
      })).toEqual({
        category: 'KEG',
        type: 'ADD_ITEM',
        name: 'RPM IPA',
        brand: 'Boneyard Brewery',
        price: 6,
        ABV: 7,
        amount: 100,
        stock: '',
        size: '',
        id: 2
    });
  });
});
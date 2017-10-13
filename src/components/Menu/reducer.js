import createReducer from '../../lib/createReducer';
import { SELECT_ITEM } from './actions';

const initialState = {
  selectedItem: 'home',
};

const selectItem = (state, { payload }) => ({
  ...state, selectedItem: payload,
});

export default createReducer(initialState, {
  [SELECT_ITEM]: selectItem,
});

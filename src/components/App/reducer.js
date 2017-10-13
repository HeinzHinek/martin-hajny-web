import createReducer from '../../lib/createReducer';
import { CHANGE_LOCALE } from './actions';

const initialState = {
  locale: 'en',
};

const changeLocale = (state, { payload }) => ({
  ...state, locale: payload,
});

export default createReducer(initialState, {
  [CHANGE_LOCALE]: changeLocale,
});

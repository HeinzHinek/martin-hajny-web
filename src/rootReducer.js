import { combineReducers } from 'redux';
import { reducer as localeSelector } from './components/LocaleSelector';
import { reducer as menu } from './components/Menu';

const rootReducer = combineReducers({
  localeSelector,
  menu,
});

export default rootReducer;

import { combineReducers } from 'redux';
import { reducer as app } from './components/App';
import { reducer as menu } from './components/Menu';

const rootReducer = combineReducers({
  app,
  menu,
});

export default rootReducer;

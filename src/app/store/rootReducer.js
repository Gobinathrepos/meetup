import { combineReducers } from 'redux';
import eventReducer from '../../feature/events/eventReducer';
import testReducer from '../../feature/reducer/testReducer';

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer
})

export default rootReducer;

import {createStore} from 'redux';
import testReducer from '../../feature/reducer/testReducer';

export default function configureStore() {
  return createStore(testReducer)
}

import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import testReducer from '../../feature/reducer/testReducer';

export default function configureStore() {
  return createStore(testReducer, devToolsEnhancer())
}

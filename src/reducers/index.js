import * as redux from 'redux';
import counter from './counter-reducer'

const reducers = redux.combineReducers({
  counter
});


export default reducers;

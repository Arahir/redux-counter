import {createStore} from 'redux';
import reducers from './reducers';
import counterActions from './actions/counter-actions';

const store = createStore(reducers);

const render = () => {
  document.getElementById('counter').innerText = store.getState().counter;
}

store.subscribe(render);
render();

document.getElementById('counter-increase').onclick = () => {
  store.dispatch(counterActions.increment());
};

document.getElementById('counter-decrease').onclick = () => {
  store.dispatch(counterActions.decrement());
};

import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

const render = () => {
  document.getElementById('counter').innerText = store.getState().counter;
}

store.subscribe(render);
render();

document.getElementById('counter-increase').onclick = () => {
  store.dispatch({type: 'INCREMENT'});
};

document.getElementById('counter-decrease').onclick = () => {
  store.dispatch({type: 'DECREASE'});
};

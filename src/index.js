import {createStore} from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
      break;
    case 'DECREASE':
      return state - 1;
      break;
    default:
      return state;
  };
}
const store = createStore(counter);

const render = () => {
  document.getElementById('counter').innerText = store.getState();
}

store.subscribe(render);
render();

document.getElementById('counter-increase').onclick = () => {
  store.dispatch({type: 'INCREMENT'});
};

document.getElementById('counter-decrease').onclick = () => {
  store.dispatch({type: 'DECREASE'});
};

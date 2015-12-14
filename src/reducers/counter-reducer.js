const INITIAL_STATE = 0;
const counter = (state = INITIAL_STATE, action) => {
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

export default counter;

const increment = () => {
  return {type: 'INCREMENT'};
}

const decrement = () => {
  return {type: 'DECREASE'};
}

export default {
  increment,
  decrement
}

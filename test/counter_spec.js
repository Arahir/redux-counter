import {expect} from 'chai';
import {createStore} from 'redux';
import reducers from '../src/reducers';

describe('counter', () => {
  let store;
  beforeEach((done) => {
    store = createStore(reducers);

    done();
  });

  it('defaulted to 0', () => {
    expect(store.getState().counter).to.equal(0);
  });

  it('calling increment 1 time should increment the counter', () => {
    store.dispatch({type: 'INCREMENT'});
    expect(store.getState().counter).to.equal(1);
  });

  it('calling increment 2 times should add 2 to the counter', () => {
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    expect(store.getState().counter).to.equal(2);
  });


  it('calling increment then decrease should return to the initial state', () => {
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'DECREASE'});
    expect(store.getState().counter).to.equal(0);
  });

  it('calling the reducer with a bad action should return the current state', () => {
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'DECREMENT'});
    expect(store.getState().counter).to.equal(1);
  })
});

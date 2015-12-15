import {expect} from 'chai';
import {createStore} from 'redux';
import reducers from '../src/reducers';
import counterActions from '../src/actions/counter-actions';


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
    store.dispatch(counterActions.increment());
    store.dispatch(counterActions.increment());
    expect(store.getState().counter).to.equal(2);
  });


  it('calling increment then decrease should return to the initial state', () => {
    store.dispatch(counterActions.increment());
    store.dispatch(counterActions.decrement());
    expect(store.getState().counter).to.equal(0);
  });

  it('calling the reducer with a bad action should return the current state', () => {
    store.dispatch(counterActions.increment());
    store.dispatch({type: 'decrement'});
    expect(store.getState().counter).to.equal(1);
  })
});

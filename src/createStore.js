import candyReducer from './reducers/candyReducer'
import countReducer from './reducers/countReducer'

export default function createStore(reducer) {
  let state

  function dispatch(action) {
    state = reducer(state, action)
  }

  function getState(){
    return state
  }

  dispatch({type: '@@INIT'})

  return {dispatch, getState}
}

function render() {
  const container = document.getElementById('container');
}

let candyStore = createStore(candyReducer)
let countStore = createStore(countReducer)


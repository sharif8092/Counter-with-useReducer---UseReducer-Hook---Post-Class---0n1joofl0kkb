import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const initialState = {
  count : 0
}
const App = () => {
const [state,dispatch] = useReducer(counterReducer,initialState)
  return (
    <div id="main">
        <span id="counter">{state.count}</span>
        <button id="increment-btn" onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        <button id="Decrement-btn" onClick={()=>dispatch({type:"DECREMENT"})} >
        Decrement </button>
        
    </div>
  )
}


export default App;

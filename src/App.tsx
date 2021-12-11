import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from './state'

function App() {
  const account = useSelector((state: State) => state.account)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney, reset } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <div className="container">
        <h1 className="acount">{ account }</h1>
        <div className="button">
          <button onClick={() => depositMoney(1000)}>Deposit</button>
          <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
          <button onClick={() => reset() }>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Signup } from './components/signup';
import { Sidebar } from './components/sidebar';
import appReducer, { initialState } from './reducers/app_reducer';

function App() {

  const [state, dispatch] = React.useReducer(appReducer, initialState);

  return (
    <div className="App">
      <Signup 
        state={state}
        dispatch={dispatch}
      />
      <Sidebar /> 
    </div>
  );
}

export default App;

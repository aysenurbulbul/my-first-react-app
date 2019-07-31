import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './component/MyComponent';

function App() {
  return (
    <div className="App">
      <MyComponent name="kalopsia">children,behave.</MyComponent>
      <MyComponent name="lahessa">heyo</MyComponent>
    </div>
  );
}

export default App;

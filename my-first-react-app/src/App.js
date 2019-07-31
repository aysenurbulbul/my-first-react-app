import React from 'react';
import './App.css';
import MyComponent from './component/MyComponent';
import MyDataComponent from './component/MyDataComponent';

function App() {
  return (
    <div className="App">
      <MyComponent name="kalopsia">children,behave.</MyComponent>
      <MyComponent name="lahessa">heyo</MyComponent>
      <MyDataComponent></MyDataComponent>
    </div>
  );
}

export default App;

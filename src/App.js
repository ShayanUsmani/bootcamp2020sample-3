import React from 'react';

import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
  <div className="App">
    {/* <Dinner></Dinner> */}
    <Dinner dishName="Chicken Nihari" />
    <hr/>
    <Dinner dishName="Pulao" />
    <hr/>
    <Dinner dishName="Kabab" />

  </div>
  )
}

export default App;

import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Displaymsg} from './displaymsg.js';

export default function App() {
  
  let [count, setCount] = useState(1);
  let [colour, setColour] = useState(true);

  return (
    <div className={`box ${colour? 'box2' : ''}`}>
      
      <h1>Assignment no# 4 - Muhib Aleem</h1>
      <h2>Colour {colour? 'Yellow' : 'Gray'}</h2>
      <Displaymsg counter={count} />
      <br/>

      <button onClick={ ()=> setCount(count+1) } > Update Counter</button>
      <button onClick={ ()=> setColour(!colour) } > Update Colour</button>    
      
    </div>
  );
}



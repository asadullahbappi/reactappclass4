import React , {useState} from 'react';
import {Message} from './Message.js';
import './App.css';

function App() {
  let [count , setCount] = useState(1);
  let [isMorning, setMorning] = useState(true);
  return (
    <div className={`box ${isMorning ? 'daylight' : ''}`}>
      <h1>Day time ={isMorning ? 'Morning' : 'Night'}</h1>
    <Message counter={count}/>
      <br/>
      <button onClick={()=> setCount (count + 1)}> 
       Update counter 
       </button>   
      <button onClick={()=>setMorning(!isMorning)} > Update Day </button>
    </div>
  );
}

export default App;

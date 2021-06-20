import './App.css';

import React, { useState } from 'react';

import axios from 'axios';

function App() {

  const [activity, setActivity] = useState('');
  const [title, setTitle] = useState('');

  const fetchData = async () =>{
    await axios.get('https://www.boredapi.com/api/activity')
    .then(res => {
      setActivity(res.data.activity + '.');
      setTitle(res.data.type);
    })
    
  }

  let inspiration;

  if (title === ''){
    inspiration = <h3>Click the button to get started...</h3>
  } else {
    inspiration =  <h3>{title}</h3>
  }

  return (
    <div className="App">
      <h1>Hello, [name]</h1>
      <nav>
        <li>Card</li>
        <li>You</li>
      </nav>

      <div>
        {inspiration}
        <p>{activity}</p>
        <button onClick={() => fetchData()}>Get inspired</button>
      </div>
      
    </div>
  );
}

export default App;

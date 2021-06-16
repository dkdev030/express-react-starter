import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Default Message');
  // const [message, setMessage] = useState('Default Message');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Do something when state changes
    document.title = `You clicked ${count} times`;

    fetch('/api/message')
      .then((response) => response.json())
      .then(({ message: messageRaw }) => {
        setMessage(messageRaw);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-examples">
        <div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <div>
          <h3>Reactive</h3>
          <p>You clicked {count} times</p>
          <button type="button" onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>

        <div>
          <h3>API</h3>
          <p>Result from Expres API</p>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

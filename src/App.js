import React from 'react';
import { Counter } from './features/counter/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <h1 className="logo">timely <FontAwesomeIcon icon={faCloudBolt} color="#20BEE1" /> weather</h1>
      </header>
    </div>
  );
}

export default App;

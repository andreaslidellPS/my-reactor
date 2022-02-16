import React from 'react';
import './App.css';
import Collapsible from './Collapsable';

function App() {
  return (
    <div>

      <Collapsible label="Clickem" content="cool beans" /> 
      <Collapsible label = "😊" content ="cooler beans" /> 

    </div>
  );
}

export default App;

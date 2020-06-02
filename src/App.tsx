import React, { useState } from 'react';
import Hello from './components/Hello/Hello';

const App = () => {
  const [name, setName] = useState<string | null>('Peter');
  return (
    <div className="App">
      <header className="App-header">
        <Hello message={`I am ${name}!`}></Hello>
      </header>
    </div>
  );
}

export default App;

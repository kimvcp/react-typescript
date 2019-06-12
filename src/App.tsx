import React from 'react';
import './App.css';
import Input from './components/input/input'
import Button from './components/Button/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <Input text="Hello World" num={12}/>
      <Button text="5 times" step={5}/>
    </div>
  );
}

export default App;

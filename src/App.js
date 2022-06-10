import { useState } from 'react';
import './App.css';

function App() {

  const [colour, setColour] = useState('red');
  const otherColour = (colour === 'red' ? 'blue' : 'red');
  const [disabledFlag, setDisabledFlag] = useState(false);

  const handleClick = () => {
    setColour(otherColour);
  };
  const handleChange = () => {
    setDisabledFlag(!disabledFlag);
  };

  return (
    <div>
      <button style={{ backgroundColor: colour }} onClick={ handleClick } disabled={ disabledFlag }>Change to { otherColour }</button>
      <input type="checkbox" onChange={ handleChange } />
    </div>
  );
}

export default App;

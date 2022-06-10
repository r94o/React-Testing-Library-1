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
      <button style={{ backgroundColor: disabledFlag ? 'grey' : colour }} onClick={ handleClick } disabled={ disabledFlag }>Change to { otherColour }</button>
      <input type="checkbox" id="disable-button" onChange={ handleChange } />
      <label htmlFor="disable-button">Disable button</label>
    </div>
  );
}

export default App;

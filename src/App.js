import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colourName) {
  return colourName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const [colour, setColour] = useState('MediumVioletRed');
  const otherColour = (colour === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed');
  const [disabledFlag, setDisabledFlag] = useState(false);

  const handleClick = () => {
    setColour(otherColour);
  };
  const handleChange = () => {
    setDisabledFlag(!disabledFlag);
  };

  return (
    <div>
      <button style={{ backgroundColor: disabledFlag ? 'grey' : colour }} onClick={ handleClick } disabled={ disabledFlag }>Change to { replaceCamelWithSpaces(otherColour) }</button>
      <input type="checkbox" id="disable-button" onChange={ handleChange } />
      <label htmlFor="disable-button">Disable button</label>
    </div>
  );
}

export default App;

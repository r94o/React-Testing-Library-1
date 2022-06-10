import { useState } from 'react'
import './App.css';

function App() {

  const [colour, setColour] = useState('red')
  const otherColour = colour === 'red' ? 'blue' : 'red'

  const handleClick = () => {
    setColour(otherColour)
  };

  return (
    <div>
      <button style={{ backgroundColor: colour}} onClick={ handleClick }>Change to { otherColour }</button>
    </div>
  );
}

export default App;

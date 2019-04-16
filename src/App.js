import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = () => {
  const [selectedCharacter, charSelectHandler] = useState(1);
  const [destroyed, destructionHandler] = useState(false);
  const [side, setChosenSide] = useState('light');

  const onCharSelect = event => {
    const charId = event.target.value;
    charSelectHandler(charId);
  };

  const sideHandler = side => {
    setChosenSide(side);
  };

  return destroyed ? (
    <h1>Total destruction!</h1>
  ) : (
    <React.Fragment>
      <CharPicker
        side={side}
        selectedChar={selectedCharacter}
        onCharSelect={onCharSelect}
      />
      <Character selectedChar={selectedCharacter} />
      <button onClick={sideHandler.bind(this, 'light')}>
        Light Side
      </button>
      <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
      {side === 'dark' && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  )
};

export default App;

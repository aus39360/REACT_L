import React from 'react';
import './App.css';
import Kill from './kill'
import Icon from './iconList.js'
import Lotto from './lotto.js'

function App() {
  return (
    <div className="App">
{/*       <Kill />
      <Icon /> */}
      <Lotto />
      <Lotto title='Mini Lotto' maxBall='4' maxNum='10'/>
    </div>
  );
}

export default App;

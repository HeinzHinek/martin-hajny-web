import React from 'react';

import Menu from '../Menu';
import Infobox from '../Infobox';
import Presentation from '../Presentation';
import LocaleSelector from '../LocaleSelector';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Presentation />
        <div className="App-title">Martin Hajný</div>
        <Menu />
        <Infobox />
        <LocaleSelector />
      </div>
    );
  }
}

export default App;

import React from 'react';

import Game from './scr/components/Game';

export default class App extends React.Component {
  render() {
    return (
      <Game randomNumberCount={6} />
    );
  }
}

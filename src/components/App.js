import React from 'react';
import Header from './Header';
import Homepage from './Homepage';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Homepage />
        </main>
      </div>
    ) 
  }
}

export default App;
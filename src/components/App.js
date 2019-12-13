import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nextPage: null};
  };

  onNextPage = (selected) => {
    this.setState({nextPage: selected});
  };

  render() {
    let pageToRender;

    switch(this.state.nextPage) {
      case 'index':
        pageToRender = <Homepage />
        break;
      case 'btnAbout':
        pageToRender = <About />
        break;
      default:
        pageToRender = <Homepage />
    }

    return (
      <div className="app">
        <Header onNextPage={this.onNextPage} />
        <main>
          {pageToRender}
        </main>
      </div>
    );
  }
}

export default App;
import React from 'react';
import axios from 'axios';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nextPage: null};
  };

  componentDidMount() {

    axios.get('/weather')
      .then(res => {
        console.log(res);
      })

    // axios.get(`https://api.darksky.net/forecast/${process.env.WEATHER_KEY}/47.6062,-122.332`
  }


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
import React from 'react';
import axios from 'axios';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nextPage: null, weatherData: null};
  };

  componentDidMount() {

    axios.get('/weather')
      .then(res => {
        this.setState({weatherData: res.data})
        console.log(this.state.weatherData);
      })
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
        pageToRender = <About temp={this.state.weatherData.temp} bg={this.state.weatherData.bg} />
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
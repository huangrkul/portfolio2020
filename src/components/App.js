import React from 'react';
import axios from 'axios';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';
import projectJson from '../js/projects';
import Banners from './Banners';
import Demo from './Demo';
import Footer from './Footer';

const projectImgs = require.context ( '../../public/assets/projects', true, /\.jpg$/ );

function Project(project) {
  this.img = `./public/assets/projects/${project.img}`;
  this.title = project.title;
  this.url = project.url;
  this.github = project.github;
  this.desc = project.desc;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nextPage: null, weatherData: null, projectsArray: null};
  };

  componentDidMount() {
    this.fetchWeatherData();
    this.createProjectsArray();
  }

  fetchWeatherData() {
    let weatherPath;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      weatherPath = '/weather';
    } else {
      weatherPath = 'https://huangrkul-portfolio-backend.herokuapp.com/weather';
    }

    axios.get(weatherPath)
      .then(res => {
        this.setState({weatherData: res.data})
        console.log(this.state.weatherData);
      })
  }

  createProjectsArray() {
    let allProjects = projectJson.map((project) => {
      let projectItem = new Project(project);
      return projectItem;
    });
    this.setState({projectsArray: allProjects});
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
        pageToRender = <About weatherData={this.state.weatherData} />
        break;
      case 'btnProjects':
        pageToRender = <Projects allProjects={this.state.projectsArray} />
        break;
      case 'btnBanners':
        pageToRender = <Banners />
        break;
      case 'btnDemo':
        pageToRender = <Demo />
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
        <Footer />
      </div>
    );
  }
}
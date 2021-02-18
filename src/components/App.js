import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';
import projectJson from '../js/projects';
import Banners from './Banners';
import Demo from './Demo';
import Contact from './Contact';

const projectImgs = require.context ( '../../public/assets/projects', true, /\.jpg$/ );

function Project(project) {
  this.img = `./public/assets/projects/${project.img}`;
  this.title = project.title;
  this.url = project.url;
  this.github = project.github;
  this.desc = project.desc;
}

const App = (props) => {
  
  const viewComponents = {
    index: () => <Homepage />,
    btnAbout: () => <About weatherData={weatherData} />,
    btnProjects: () => <Projects allProjects={projectsArray} />,
    btnBanners: () => <Banners />,
    btnDemo: () => <Demo />,
    btnContact: () => <Contact />
  }

  const [weatherData, setWeatherData] = useState(null);
  const [projectsArray, setProjectsArray] = useState(null);
  const [current, setCurrent] = useState(viewComponents.index());
  const changePage = (page) => {setCurrent(viewComponents[page]());}

  const fetchWeatherData = () => {
    let weatherPath = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? '/weather' : 'https://huangrkul-portfolio-backend.herokuapp.com/weather';

    axios.get(weatherPath)
    .then(res => {
      setWeatherData(res.data);
    })
  }

  const createProjectsArray = () => {
    let allProjects = projectJson.map((project) => {
      let projectItem = new Project(project);
      return projectItem;
    });

    setProjectsArray(allProjects);
  }


  useEffect(() => {
    fetchWeatherData();
  },[])

  return (
    <div className="app">
      <Header changePage={changePage} />
      <main>
        {current}
      </main>
    </div>
  )
}

export default App;

import React, {useState, useEffect, useContext} from 'react';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';
import Banners from './Banners';
import Demo from './Demo';
import Contact from './Contact';
import {store} from './store.js';
import projectJson from '../js/projects';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";


function Project(project) {
  this.img = `./public/assets/projects/${project.img}`;
  this.title = project.title;
  this.url = project.url;
  this.github = project.github;
  this.desc = project.desc;
}

const App = () => {

  const changePage = (page) => {setCurrent(viewComponents[page]());}

  const viewComponents = {
    index: () => <Homepage changePage={changePage} />,
    btnAbout: () => <About />,
    btnProjects: () => <Projects />,
    btnBanners: () => <Banners />,
    btnDemo: () => <Demo />,
    btnContact: () => <Contact />
  }

  const globalState = useContext(store);
  const {dispatch} = globalState;
  const [current, setCurrent] = useState(viewComponents.index());

  const createProjectsArray = () => {
    const allProjects = projectJson.map((project) => {
      let projectItem = new Project(project);
      return projectItem;
    });
    dispatch({type: 'projects', payload: allProjects});
  }

  const fetchWeatherData = async () => {
    let weatherPath = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? '/weather' : 'https://huangrkul-portfolio-backend.herokuapp.com/weather';
    try{
      await axios.get(weatherPath)
      .then(res => {
        dispatch({type: 'weather', payload: res.data});
      })
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    createProjectsArray();
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

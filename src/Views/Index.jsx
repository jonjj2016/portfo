import React, { useSetate, useEffect, useState } from 'react';
import Slider from '../components/Slider';
import Aos from '../components/Aos';
import { projects } from '../data/projects';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Project from '../components/Project/Project';

import 'aos/dist/aos.css';

const Index = () => {
  const [state, setState] = useState({
    projects: projects,
    directories: ['main', 'about', 'projects', 'skills'],
    currentDir: 'home',
    drawer_isopen: false,
    page: 0,
  });

  const changeDir = (dir) => {
    setState({ ...state, currentDir: dir });
  };
  const toggle_drawer = (bool) => setState({ ...state, drawer_isopen: !state.drawer_isopen });
  const onMenuItemClick = (dir) => {
    console.log(dir);
    const index = state.directories.indexOf(dir);
    console.log(index);
    setState({ ...state, page: index, drawer_isopen: false });
  };
  return (
    <BrowserRouter>
      <Aos duration={2000}>
        <Switch>
          <Route path={`/projects/:projectId`} render={() => <Project toggle_drawer={toggle_drawer} />} />
          <Route exact path='/' render={() => <Slider state={state} toggle_drawer={toggle_drawer} onMenuItemClick={onMenuItemClick} changeDir={changeDir}></Slider>} />
        </Switch>
      </Aos>
    </BrowserRouter>
  );
};

export default Index;

import React, { PropTypes } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from '../styles/app.style';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
    https://github.com/akashrajkn/akashrajkn.github.io        <Interactive
              as={Link}
              {...s.link}
              to={nextPath(route)}
            >{route.mapMenuTitle}</Interactive>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }


  return (
    <div style={s.root}>
      <h1 style={s.title}>Will be updated soon</h1>
      <br> </br>
      <h1 style={s.title}>
        <a target="_blank" href="www.jasp-stats.org"> Check out jasp-stats </a>
      </h1>
    </div>
  );
}

App.propTypes = propTypes;

export default App;

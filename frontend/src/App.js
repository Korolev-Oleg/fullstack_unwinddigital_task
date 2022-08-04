// import logo from './logo.svg';
import './App.css';
import Graph from './components/Graph';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="graph">
        <Graph />
      </div>
    )
  }
}


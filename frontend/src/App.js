// import logo from './logo.svg';
import './App.css';
import Graph from './components/Graph';
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    }
  }

  fetchData(){
    this.setState({loading: true});
    fetch('http://localhost:8000/api/v1/orders')
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: data.result,
        loading: false
      })
    })
    console.log(this.state.data);
  }

  componentDidMount() {
    this.setState({loading: true});
    this.fetchIntervalId = setInterval(() => this.fetchData(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.fetchIntervalId);
  }

  render() {
    return (
      <div className="graph">
        <Graph state={this.state}/>
      </div>
    )
  }
}


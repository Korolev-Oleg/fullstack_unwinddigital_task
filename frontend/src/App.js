// import logo from './logo.svg';
import './App.css';
import Graph from './components/Graph';
import OrderTable from './components/Table';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from "./components/Header";
import TotalSum from "./components/TotalSum";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{}],
    }
  }

  fetchData(){
    fetch('http://localhost:8000/api/v1/orders')
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: data.result,
      });
    })
  }

  componentDidMount() {
    this.fetchData();
    this.fetchIntervalId = setInterval(() => this.fetchData(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.fetchIntervalId);
  }

  render() {
    return (
      <div>
        <MainNavbar/>
        <div className='info'>
          <div className="graph">
            <Graph data={this.state.data}/>
          </div>
          <div className="total-sum">
            <TotalSum/>
          </div>
        </div>
        <div className="table">
          <OrderTable data={this.state.data}/>
        </div>
      </div>
    )
  }
}


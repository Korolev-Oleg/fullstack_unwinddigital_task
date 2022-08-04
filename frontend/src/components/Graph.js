import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import React from 'react';


export default class Graph extends React.Component {
  render() {
    return (
      <LineChart
        width={1000} height={400} data={this.props.data}
        margin={{top: 40, right: 40, bottom: 20, left: 20}}
      >
        <CartesianGrid vertical={false}/>
        <XAxis dataKey="delivery_date" label=""/>
        <YAxis domain={['auto', 'auto']} label=""/>
        <Tooltip
          wrapperStyle={{
            borderColor: 'white',
            boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
          }}
          contentStyle={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}
          labelStyle={{fontWeight: 'bold', color: '#666666'}}
        />
        <Line dataKey="price_rub" stroke="#ff7300" dot={false}/>
      </LineChart>);
  }
}

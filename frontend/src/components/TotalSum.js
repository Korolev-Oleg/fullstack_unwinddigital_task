import Table from 'react-bootstrap/Table';
import React from 'react';

export default class TotalSum extends React.Component{
  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
          </tr>
        </tbody>
      </Table>
    )
  }
}

import React from 'react';
import Table from 'react-bootstrap/Table';

export default class OrderTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
        <tr>
          <th>№</th>
          <th>заказ №	</th>
          <th>стоимость,$</th>
          <th>стоимость,rub</th>
          <th>срок поставки</th>
        </tr>
        </thead>
        <tbody>
          {this.props.data.map(order => (
            <tr>
              <td>{order.order_id}</td>
              <td>{order.number}</td>
              <td>{order.price_usd}</td>
              <td>{order.price_rub}</td>
              <td>{order.delivery_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}

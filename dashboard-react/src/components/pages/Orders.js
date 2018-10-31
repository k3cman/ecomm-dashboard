import React from 'react';

const Orders = props => {
  return (
    <table className="orders-table">
      <tr className="header">
        <th>Status</th>
        <th>Datum</th>
        <th>Cena</th>
        <th>Ime</th>
        <th>Plaćanje</th>
        <th>Notes</th>
      </tr>
      <tr>
        <td>OnHold</td>
        <td>Datum</td>
        <td>Cena</td>
        <td>Ime</td>
        <td>Plaćanje</td>
        <td>Notes</td>
      </tr>
    </table>
  );
};

export default Orders;

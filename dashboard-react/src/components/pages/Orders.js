import React, { Fragment } from 'react';

import { IoMdMore } from 'react-icons/io';

const Orders = props => {
  return (
    <Fragment>
      <table className="orders-table">
        <tr className="header">
          <th>Status</th>
          <th>Datum</th>
          <th>Cena</th>
          <th>Ime</th>
          <th>Plaćanje</th>
          <th>Notes</th>
          <th>Options</th>
        </tr>
        <tr>
          <td>OnHold</td>
          <td>Datum</td>
          <td>Cena</td>
          <td>Ime</td>
          <td>Plaćanje</td>
          <td>Notes</td>
          <td>
            <IoMdMore />
          </td>
        </tr>
        <tr>
          <td>OnHold</td>
          <td>Datum</td>
          <td>Cena</td>
          <td>Ime</td>
          <td>Plaćanje</td>
          <td>Notes</td>
          <td>
            <IoMdMore />
          </td>
        </tr>
        <tr>
          <td>OnHold</td>
          <td>Datum</td>
          <td>Cena</td>
          <td>Ime</td>
          <td>Plaćanje</td>
          <td>Notes</td>
          <td>
            <IoMdMore />
          </td>
        </tr>
        <tr>
          <td>OnHold</td>
          <td>Datum</td>
          <td>Cena</td>
          <td>Ime</td>
          <td>Plaćanje</td>
          <td>Notes</td>
          <td>
            <IoMdMore />
          </td>
        </tr>
        <tr>
          <td>OnHold</td>
          <td>Datum</td>
          <td>Cena</td>
          <td>Ime</td>
          <td>Plaćanje</td>
          <td>Notes</td>
          <td>
            <IoMdMore />
          </td>
        </tr>
        <tr>
          <td>OnHold</td>
          <td>Datum</td>
          <td>Cena</td>
          <td>Ime</td>
          <td>Plaćanje</td>
          <td>Notes</td>
          <td>
            <IoMdMore />
          </td>
        </tr>
        <tr>
          <td>OnHold</td>
          <td>Datum</td>
          <td>Cena</td>
          <td>Ime</td>
          <td>Plaćanje</td>
          <td>Notes</td>
          <td>
            <IoMdMore />
          </td>
        </tr>
        <tr>
          <td>OnHold</td>
          <td>Datum</td>
          <td>Cena</td>
          <td>Ime</td>
          <td>Plaćanje</td>
          <td>Notes</td>
          <td>
            <IoMdMore />
          </td>
        </tr>
        <tr>
          <td>OnHold</td>
          <td>Datum</td>
          <td>Cena</td>
          <td>Ime</td>
          <td>Plaćanje</td>
          <td>Notes</td>
          <td>
            <IoMdMore />
          </td>
        </tr>
      </table>
      <div className="pag">
        <div className="pagination">
          <a href="/">&laquo;</a>
          <a href="/">1</a>
          <a href="/" class="active">
            2
          </a>
          <a href="/">3</a>
          <a href="/">4</a>
          <a href="/">5</a>
          <a href="/">6</a>
          <a href="/">&raquo;</a>
        </div>
      </div>
    </Fragment>
  );
};

export default Orders;

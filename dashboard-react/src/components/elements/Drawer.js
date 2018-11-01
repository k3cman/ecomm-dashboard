import React from 'react';
import { Link } from 'react-router-dom';
import {
  IoMdHome,
  IoMdCart,
  IoMdAnalytics,
  IoMdCodeWorking,
  IoMdMail
} from 'react-icons/io';

const Drawer = props => {
  return (
    <div className="drawer">
      <Link to="/">
        <div className="drawer-icon active">
          <IoMdHome />
          <p>Dash</p>
        </div>
      </Link>

      <Link to="/orders">
        <div className="drawer-icon">
          <IoMdCart />
          <p>Orders</p>
        </div>
      </Link>

      <Link to="/stats">
        <div className="drawer-icon">
          <IoMdAnalytics />
          <p>Statistika</p>
        </div>
      </Link>

      <Link to="/pagebuilder">
        <div className="drawer-icon">
          <IoMdCodeWorking />
          <p>Page</p>
        </div>
      </Link>

      <Link to="emailbuilder">
        <div className="drawer-icon">
          <IoMdMail />
          <p>Email</p>
        </div>
      </Link>
    </div>
  );
};

export default Drawer;

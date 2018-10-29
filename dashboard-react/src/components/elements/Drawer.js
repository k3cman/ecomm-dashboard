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
        <div className="drawer-icon">
          <IoMdHome />
          <p>Dashboard</p>
        </div>
      </Link>

      <div className="divider">&nbsp;</div>
      <Link to="/orders">
        <div className="drawer-icon">
          <IoMdCart />
          <p>Porudžbine</p>
        </div>
      </Link>
      <div className="divider">&nbsp;</div>
      <Link to="/stats">
        <div className="drawer-icon">
          <IoMdAnalytics />
          <p>Statistika</p>
        </div>
      </Link>
      <div className="divider">&nbsp;</div>
      <Link to="/pagebuilder">
        <div className="drawer-icon">
          <IoMdCodeWorking />
          <p>PageBuilder</p>
        </div>
      </Link>
      <div className="divider">&nbsp;</div>
      <Link to="emailbuilder">
        <div className="drawer-icon">
          <IoMdMail />
          <p>EmailBuilder</p>
        </div>
      </Link>
    </div>
  );
};

export default Drawer;

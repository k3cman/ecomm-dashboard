import React, { Component, Fragment } from 'react';
import Card from '../elements/Card';
import number from '../helpers/monthDuration';

class Landing extends Component {
  state = {
    days: null
  };
  componentDidMount = () => {
    let dayNumbers = number;
    this.setState({ days: dayNumbers });
  };
  render() {
    return (
      <Fragment>
        <Card width="50%">Nemanja Kecman</Card>
        <Card width="15%">12</Card>
        <Card width="15%">12</Card>
        <Card width="15%">12</Card>
      </Fragment>
    );
  }
}

export default Landing;

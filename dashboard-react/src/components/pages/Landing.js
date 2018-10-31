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
        <Card width="65%" height="300px">
          Line Chart
        </Card>
        <Card width="25%" height="300px">
          <ul>
            <li>
              On Hold : <strong>15</strong>
            </li>
            <li>
              Finished : <strong>12</strong>
            </li>
            <li>
              Canceled : <strong>2</strong>
            </li>
          </ul>
        </Card>
        <Card width="45%" height="400px">
          <h1>Notes</h1>
        </Card>
        <Card width="45%" height="400px">
          <h1>Latest orders</h1>
        </Card>
      </Fragment>
    );
  }
}

export default Landing;

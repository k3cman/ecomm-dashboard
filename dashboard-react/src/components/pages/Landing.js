import React, { Component, Fragment } from 'react';
import Card from '../elements/Card';
import number from '../helpers/monthDuration';

//ReactCharts
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  RadialBarChart,
  RadarChart,
  RadialBar,
  Legend
} from 'recharts';

class Landing extends Component {
  state = {
    days: null,
    data: [
      { name: ' A', uv: 4000, pv: 2400, amt: 2400 },
      { name: ' B', uv: 3000, pv: 1398, amt: 2210 },
      { name: ' C', uv: 2000, pv: 9800, amt: 2290 },
      { name: ' D', uv: 2780, pv: 3908, amt: 2000 },
      { name: ' E', uv: 1890, pv: 4800, amt: 2181 },
      { name: ' F', uv: 2390, pv: 3800, amt: 2500 },
      { name: ' G', uv: 3490, pv: 4300, amt: 2100 },
      { name: ' A', uv: 4000, pv: 2400, amt: 2400 },
      { name: ' B', uv: 3000, pv: 1398, amt: 2210 },
      { name: ' C', uv: 2000, pv: 9800, amt: 2290 },
      { name: ' D', uv: null, pv: null, amt: null },
      { name: ' E', uv: 1890, pv: 4800, amt: 2181 },
      { name: ' F', uv: 2390, pv: 3800, amt: 2500 },
      { name: ' G', uv: 3490, pv: 4300, amt: 2100 },
      { name: ' A', uv: 4000, pv: 2400, amt: 2400 },
      { name: ' B', uv: 3000, pv: 1398, amt: 2210 },
      { name: ' B', uv: 3000, pv: 1398, amt: 2210 },
      { name: ' C', uv: 2000, pv: 9800, amt: 2290 },
      { name: ' D', uv: 2780, pv: 3908, amt: 2000 },
      { name: ' E', uv: 1890, pv: 4800, amt: 2181 },
      { name: ' F', uv: 2390, pv: 3800, amt: 2500 },
      { name: ' G', uv: 3490, pv: 4300, amt: 2100 },
      { name: ' A', uv: 4000, pv: 2400, amt: 2400 },
      { name: ' B', uv: 3000, pv: 1398, amt: 2210 },
      { name: ' C', uv: 2000, pv: 9800, amt: 2290 },
      { name: ' D', uv: 2780, pv: 3908, amt: 2000 },
      { name: ' E', uv: 1890, pv: 4800, amt: 2181 },
      { name: ' F', uv: 2390, pv: 3800, amt: 2500 },
      { name: ' G', uv: 3490, pv: 4300, amt: 2100 },
      { name: ' A', uv: 4000, pv: 2400, amt: 2400 },
      { name: ' B', uv: 3000, pv: 1398, amt: 2210 }
    ],
    status: [
      { name: 'Canceled', uv: 3, pv: 20, fill: '#8dd1e1' },

      { name: 'Completed', uv: 30, pv: 20, fill: '#83a6ed' },
      { name: 'onHold', uv: 15, pv: 20, fill: '#8884d8' }
    ],
    style: {
      top: 0,
      left: 350,
      lineHeight: '24px'
    }
  };
  componentDidMount = () => {
    let dayNumbers = number;
    this.setState({ days: dayNumbers });
  };
  render() {
    return (
      <Fragment>
        <Card width="25%" height="250px">
          {/* <ResponsiveContainer>
            <LineChart
              width={100}
              height={100}
              data={this.state.data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer> */}
          Zarada
        </Card>
        <Card width="25%" height="250px">
          {/* <ResponsiveContainer>
            <LineChart
              width={100}
              height={100}
              data={this.state.data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer> */}
          OnHold
        </Card>
        <Card width="25%" height="250px">
          {/* <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={this.state.status}
          >
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise={true}
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={this.state.style}
            />
          </RadialBarChart> */}
          Prihvaceno
        </Card>
        <Card width="25%" height="500px">
          <h1>Todo</h1>
        </Card>
        <Card width="51%" height="500px">
          <h1>CHART</h1>
        </Card>
      </Fragment>
    );
  }
}

export default Landing;

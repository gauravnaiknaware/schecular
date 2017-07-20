import React from 'react'
import LineChart from 'react-d3-basic'
import Chart from 'react-d3-core'
import axios from 'axios'


const width = 700;
const height = 300;
const margins = {left: 100, right: 100, top: 50, bottom: 50};
const title = "User sample";
const chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
  ];
const x = function(d) {
      return d.index;
};


export default class D3Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        chartData : []
    };
  }

  componentWillMount() {
      axios.get('https://raw.githubusercontent.com/react-d3/react-d3-example/master/simple/data/user_sample.json')
        .then(res => {
            console.log(res)
            this.setState({
                chartData:res.data
            });
      });
  }

  render() {
    return (
            <Chart
              title={title}
              width={width}
              height={height}
              margins= {margins}
             >
                  <LineChart
                    margins= {margins}
                    title={title}
                    data={this.state.chartData}
                    width={width}
                    height={height}
                    chartSeries={chartSeries}
                    x={x}
                  />
            </Chart>
    );
  }
}

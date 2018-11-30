import React, { Component } from 'react';
import Chart from 'chart.js';

export default class AddLineChart extends Component {
  componentDidMount() {
    const { cityTemp, cityPressure, cityHumidity } = this.props;
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          "datasets":[
            {"label":"Temperature in C",
            "data": cityTemp,
            "borderColor":"#f25e1b"},
            {"label":"Pressure",
            "data": cityPressure,
            "borderColor":"#3e8e29"},
            {"label":"Humidity",
            "data": cityHumidity,
            "borderColor":"#175074"},
          ]
        },
        options: {
        scales: {
            xAxes: [{
              type: 'time',
              time: {
                  unit: 'day',
                  displayFormats: {
                      day: 'MMM DD'
                  }
              }
            }]
        }
    }
    });
  }

  render() {
    return (
      <canvas id="myChart" width="400" height="400"></canvas>
    )
  }
}

import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import AddLineChart from "../components/AddLineChart";
import GoogleMap from "../components/GoogleMap";

//only Poland wather
class WeatherList extends Component {
  renderWeatherList = weatherData => {
    const cityName = weatherData.city.name;
    const cityTemp = weatherData.list.map(weather => {
      const obj = {};
      obj.x = new Date(weather.dt_txt);
      obj.y = weather.main.temp;
      return obj;
    });
    const cityPressure = weatherData.list.map(weather => {
      const obj = {};
      obj.x = new Date(weather.dt_txt);
      obj.y = weather.main.pressure;
      return obj;
    });
    const cityHumidity = weatherData.list.map(weather => {
      const obj = {};
      obj.x = new Date(weather.dt_txt);
      obj.y = weather.main.humidity;
      return obj;
    });

    console.log("weatherData.city:  ", weatherData.city);
    return (
      <tr key={weatherData.city.id}>
        <td>
          <GoogleMap city={weatherData.city} />
        </td>
        <td>
          <AddLineChart
            cityTemp={cityTemp}
            cityPressure={cityPressure}
            cityHumidity={cityHumidity}
          />
        </td>
      </tr>
    );
  };

  render() {
    const { weather } = this.props;

    return (
      <React.Fragment>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>City</th>
              <th>Weather report</th>
            </tr>
          </thead>
          <tbody>{weather[0] && weather.map(this.renderWeatherList)}</tbody>
        </Table>
      </React.Fragment>
    );
  }
}

const mapStateToPros = state => {
  return { weather: state.weather };
};

export default connect(mapStateToPros)(WeatherList);

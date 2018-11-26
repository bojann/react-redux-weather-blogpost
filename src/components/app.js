import React, { Component } from "react";
import SearchInput from "containers/SearchInput";
import WeatherList from "containers/WeatherList";
// import MyForm from "components/MyForm";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchInput />
        <WeatherList />
      </React.Fragment>
    );
  }
}

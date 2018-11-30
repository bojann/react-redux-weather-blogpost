<<<<<<< HEAD
import React, { Component } from 'react';
import BookList from '../containers/BookList'
import BookDetail from '../containers/BookDetail'
=======
import React, { Component } from "react";
import SearchInput from "containers/SearchInput";
import WeatherList from "containers/WeatherList";
// import MyForm from "components/MyForm";
>>>>>>> b841e3d181201e03efe996273622e81d9b8ea501

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
        <BookList />
        <BookDetail />
=======
        <SearchInput />
        <WeatherList />
>>>>>>> b841e3d181201e03efe996273622e81d9b8ea501
      </React.Fragment>
    );
  }
}

import React, { Component } from 'react';
import BookList from '../containers/BookList'
import BookDetail from '../containers/BookDetail'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BookList />
        <BookDetail />
      </React.Fragment>
    );
  }
}

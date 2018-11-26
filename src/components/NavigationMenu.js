import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export default class NavigationMenu extends Component {
  render() {
    return (
      <Navbar className="nav">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/post/new">Add Post</Link>
      </Navbar>
    )
  }
}

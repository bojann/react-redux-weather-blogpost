import React, { Component } from 'react';
import PostList from '../containers/PostList';
import { Col } from 'react-bootstrap';

export default class Blog extends Component {
  render() {
    return(
      <React.Fragment>
        <div>THIS IS BLOG YOO</div>
        <Col sm={5}>
          <PostList />
        </Col>
      </React.Fragment>
    )
  }
};

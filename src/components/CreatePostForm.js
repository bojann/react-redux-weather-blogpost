import React, { Component } from 'react';
import CreatePost from '../containers/CreatePost';

export default class CreatePostForm extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Add Post</h3>
        <CreatePost />
      </React.Fragment>
    )
  }
};

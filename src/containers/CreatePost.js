import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postBlogPost } from '../actions/index';
import PropTypes from 'prop-types';
import history from "../components/history";
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  FieldGroup,
  Button,
  Col
 } from 'react-bootstrap';

class CreatePost extends Component {
  state = {
    title: '',
    content: '',
    categories: 'Candy',
  }

  handleOnChange = (ev) => {
    switch (ev.target.id) {
      case 'formTitle':
        this.setState({
          title: ev.target.value
        })
        break;
      case 'formSelect':
        this.setState({
          categories: ev.target.value
        })
        break;
      case 'formTextarea':
        this.setState({
          content: ev.target.value
        })
        break;
    }
  }

  handleClickCancel = () => {
    history.push('/blog');
  }

  handleSubmitPost = (ev) => {
    ev.preventDefault();

    this.props.postBlogPost(this.state, () => {
      history.push('/blog');
    });
  }

  render() {
    return (
      <React.Fragment>
        <Form horizontal onSubmit={this.handleSubmitPost}>
          <Col sm={6} >
            <FormGroup controlId="formTitle">
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleOnChange}
              />
            </FormGroup>
          </Col>
          <Col smOffset={1} sm={2}>
            <FormGroup controlId="formSelect">
              <ControlLabel>Select Category</ControlLabel>
              <FormControl
                componentClass="select"
                value={this.state.category}
                onChange={this.handleOnChange}
              >
                <option value="select">select</option>
                <option value="Candy">Candy</option>
                <option value="Computer">Computer</option>
                <option value="Friends">Friends</option>
              </FormControl>
            </FormGroup>
          </Col>

          <FormGroup controlId="formTextarea">
            <Col sm={10}>
              <ControlLabel>Post content</ControlLabel>
              <FormControl
                value={this.state.content}
                componentClass="textarea"
                placeholder="Edit text..."
                onChange={this.handleOnChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={10}>
              <Button bsStyle="primary" type="submit">Submit</Button>
              <Button bsStyle="danger" onClick={this.handleClickCancel}>Cancel</Button>
            </Col>
          </FormGroup>
        </Form>
      </React.Fragment>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ postBlogPost }, dispatch);
// }

CreatePost.propTypes = {
  postBlogPost: PropTypes.func
}

export default connect(null, { postBlogPost })(CreatePost);

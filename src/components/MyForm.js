import React, { Component } from 'react';
import history from "components/history";
import { fetchComments } from 'actions/index';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  FieldGroup,
  Button,
  Col
 } from 'react-bootstrap';

class MyForm extends Component {
  state = {
    title: '',
    content: '',
    categories: 'Candy'
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
    this.setState({
      title: '',
      content:'',
      categories: 'Candy'
    })
  }

  handleClickFetchComments = () => {
    this.props.fetchComments()
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
        <button onClick={this.handleClickFetchComments}>GET ALL COMMENTS</button>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: ev => { dispatch(fetchComments(ev)) },
  }
}

export default connect(null, mapDispatchToProps)(MyForm)
